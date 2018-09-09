
const { Card } = require('./card');
const { shuffle } = require('./rand');

/**
 * @typedef CardPosition
 * @property pile {string}
 * @property index {number}
 * @property card {Card}
 */

/**
 * @type {Map.<Deck, Object>}
 */
const props = new WeakMap();

/**
 * @type {Set.<string>}
 */
const piles = new Set([ 'deck', 'discard', 'held' ]);

exports.Deck = class Deck {
	/**
	 * @param cards {Card[]}
	 */
	constructor(cards = [ ]) {
		props.set(this, {
			cards: new Set(cards),
			deck: cards.slice(),
			held: [ ],
			discard: [ ]
		});

		// Assign each card to the deck
		cards.forEach((card) => {
			card.deck = this;
		});
	}

	/**
	 * The total number of cards belonging to this deck
	 *
	 * @type {number}
	 */
	get totalLength() {
		return props.get(this).cards.size;
	}

	/**
	 * The current number of cards remaining in the deck pile
	 *
	 * @type {number}
	 */
	get remainingLength() {
		return props.get(this).deck.length;
	}

	/**
	 * Add a new card to the deck, placing it in the given pile
	 *
	 * @param card {Card}
	 * @param pile {'deck'|'discard'|'held'}
	 * @return void
	 */
	add(card, pile = 'deck') {
		if (! piles.has(pile)) {
			throw new Error(`Deck - cannot add card to unknown pile "${pile}"`);
		}

		const _props = props.get(this);

		card.deck = this;

		_props.cards.add(card);
		_props[pile].push(card);
	}

	/**
	 * Removes a card from the deck entirely
	 *
	 * @param card {Card}
	 * @return void
	 */
	remove(card) {
		const { cards, deck, discard, held } = props.get(this);

		cards.delete(card);
		remove(deck, card);
		remove(discard, card);
		remove(held, card);

		card.deck = null;
	}

	/**
	 * Draw the given number of cards, places them in the held pile, and returns the drawn cards
	 *
	 * @param count {number}
	 * @return {Card[]}
	 */
	draw(count = 1) {
		const { deck, held } = props.get(this);

		if (! deck.length) {
			throw new Error('Deck - Cannot draw from deck, no cards remaining');
		}

		if (count < 0) {
			return [ ];
		}

		const cards = deck.splice(0, count);

		held.push(...cards);

		return cards;
	}

	/**
	 * Draws the given number of cards, places them in the discard pile, and returns the drawn cards
	 *
	 * @param count {number}
	 * @return {Card[]}
	 */
	drawToDiscard(count = 1) {
		const { deck, discard } = props.get(this);

		if (! deck.length) {
			throw new Error('Deck - Cannot draw from deck, no cards remaining');
		}

		if (count < 0) {
			return [ ];
		}

		const cards = deck.splice(0, count);

		discard.push(...cards);

		return cards;
	}

	/**
	 * Moves the given card into the discard pile
	 *
	 * @param card {Card|Card[]}
	 * @return {void}
	 */
	discard(card) {
		if (Array.isArray(card)) {
			card.forEach((card) => this.discard(card));
		}

		if (! (card instanceof Card)) {
			throw new Error('Value provided is not a Card instance');
		}

		const { cards, deck, held, discard } = props.get(this);

		if (! cards.has(card)) {
			throw new Error('Provided card does not belong to this deck');
		}

		const deckIndex = deck.indexOf(card);

		if (deckIndex >= 0) {
			deck.splice(deckIndex, 1);
			discard.push(card);
		}

		else {
			const heldIndex = held.indexOf(card);

			if (heldIndex >= 0) {
				held.splice(heldIndex, 1);
				discard.push(card);
			}
		}
	}

	/**
	 * Finds the given card and returns an object representing its current location (pile, and index in that pile)
	 *
	 * @param card {Card}
	 * @return {CardPosition}
	 */
	find(card) {
		if (! (card instanceof Card)) {
			throw new Error('Value provided is not a Card instance');
		}

		const { cards, deck, held, discard } = props.get(this);

		if (! cards.has(card)) {
			throw new Error('Provided card does not belong to this deck');
		}

		const deckIndex = deck.indexOf(card);

		if (deckIndex >= 0) {
			return {
				pile: 'deck',
				index: deckIndex,
				card
			};
		}

		const heldIndex = held.indexOf(card);

		if (heldIndex >= 0) {
			return {
				pile: 'held',
				index: heldIndex,
				card
			};
		}

		const discardIndex = discard.indexOf(card);

		if (discardIndex >= 0) {
			return {
				pile: 'discard',
				index: discardIndex,
				card
			};
		}

		// This should never happen
		throw new Error('Failed to find the given card');
	}

	/**
	 * Moves all cards back to the deck and shuffles the deck
	 *
	 * @return {void}
	 */
	shuffleAll() {
		const { deck, held, discard } = props.get(this);

		deck.push(...held);
		deck.push(...discard);

		held.length = 0;
		discard.length = 0;

		shuffle(deck);
	}

	/**
	 * Shuffles the cards remaining in the deck
	 *
	 * @return {void}
	 */
	shuffleRemaining() {
		shuffle(props.get(this).deck);
	}

	/**
	 * Shuffles the cards in the discard pile and then places them at the end of the deck
	 *
	 * @return {void}
	 */
	shuffleDiscard() {
		const { deck, discard } = props.get(this);

		shuffle(discard);

		deck.push(...discard);

		discard.length = 0;
	}

	/**
	 * Moves all cards in the discard back to the deck and shuffles the deck
	 *
	 * @return {void}
	 */
	shuffleDeckAndDiscard() {
		const { deck, discard } = props.get(this);

		deck.push(...discard);

		discard.length = 0;

		shuffle(deck);
	}

	/**
	 * Moves all currently held cards to the discard pile
	 *
	 * @return {void}
	 */
	discardAllHeld() {
		const { held, discard } = props.get(this);

		discard.push(...held);

		held.length = 0;
	}
};

const remove = (array, value) => {
	const index = array.indexOf(value);

	if (index >= 0) {
		array.splice(index, 1);
	}
};