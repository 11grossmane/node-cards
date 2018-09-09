
const { Deck } = require('../deck');
const { Suit } = require('../suits');

const props = new WeakMap();

exports.Card = class Card {
	constructor({ suit, value, shortText, longText }) {
		if (! (suit instanceof Suit)) {
			throw new Error('Invalid card suit provided');
		}

		props.set(this, {
			value,
			shortText,
			longText
		});

		this.suit = suit;
		this.value = value;

		Object.freeze(this);
	}
	
	toString() {
		return `<Card suit=${this.suit} value=${this.value}>`;
	}

	/*
	 * @type {Deck}
	 */
	get deck() {
		return props.get(this).deck;
	}

	set deck(deck) {
		const _props = props.get(this);

		if (deck instanceof Deck) {
			if (_props.deck) {
				_props.deck = null;
				_props.deck.remove(this);
			}

			_props.deck = deck;
		}

		else if (deck == null) {
			_props.deck = null;
		}
	}

	/*
	 * @type {string}
	 */
	get shortText() {
		const { shortText } = props.get(this);

		switch (this.suit.name) {
			case '':
			case 'trump':
			case 'joker':
				return shortText;

			default:
				return `${shortText}${this.suit.unicode}`;
		}
	}

	get longText() {
		const { longText } = props.get(this);

		switch (this.suit.name) {
			case '':
			case 'trump':
			case 'joker':
				return longText;

			default:
				return `${longText} of ${this.suit.name}`;
		}
	}

	get unicode() {
		return this.suit.unicodeCards[this.value];
	}
};
