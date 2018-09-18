
const { Rank } = require('./rank');

/**
 * @module ranks
 * @description
 *
 * Provides represesntations for the ranks of cards (eg. "ace" or "king").
 *
 * ```javascript
 * const { ranks } = require('cards');
 * ```
 */



// Standard card ranks

/**
 * @alias module:ranks.ace
 * @type {Rank}
 * @property shortName {'A'}
 * @property longName {'Ace'}
 */
exports.ace  = new Rank('A',  'Ace');

/**
 * @alias module:ranks.two
 * @type {Rank}
 * @property shortName {'2'}
 * @property longName {'Two'}
 */
exports.two = new Rank('2',  'Two');

/**
 * @alias module:ranks.three
 * @type {Rank}
 * @property shortName {'3'}
 * @property longName {'Three'}
 */
exports.three = new Rank('3',  'Three');

/**
 * @alias module:ranks.four
 * @type {Rank}
 * @property shortName {'4'}
 * @property longName {'Four'}
 */
exports.four = new Rank('4',  'Four');

/**
 * @alias module:ranks.five
 * @type {Rank}
 * @property shortName {'5'}
 * @property longName {'Five'}
 */
exports.five = new Rank('5',  'Five');

/**
 * @alias module:ranks.six
 * @type {Rank}
 * @property shortName {'6'}
 * @property longName {'Six'}
 */
exports.six = new Rank('6',  'Six');

/**
 * @alias module:ranks.seven
 * @type {Rank}
 * @property shortName {'7'}
 * @property longName {'Seven'}
 */
exports.seven = new Rank('7',  'Seven');

/**
 * @alias module:ranks.eight
 * @type {Rank}
 * @property shortName {'8'}
 * @property longName {'Eight'}
 */
exports.eight = new Rank('8',  'Eight');

/**
 * @alias module:ranks.nine
 * @type {Rank}
 * @property shortName {'9'}
 * @property longName {'Nine'}
 */
exports.nine = new Rank('9',  'Nine');

/**
 * @alias module:ranks.ten
 * @type {Rank}
 * @property shortName {'10'}
 * @property longName {'Ten'}
 */
exports.ten = new Rank('10', 'Ten');

/**
 * @alias module:ranks.jack
 * @type {Rank}
 * @property shortName {'J'}
 * @property longName {'Jack'}
 */
exports.jack = new Rank('J',  'Jack');

/**
 * @alias module:ranks.queen
 * @type {Rank}
 * @property shortName {'Q'}
 * @property longName {'Queen'}
 */
exports.queen = new Rank('Q',  'Queen');

/**
 * @alias module:ranks.king
 * @type {Rank}
 * @property shortName {'K'}
 * @property longName {'King'}
 */
exports.king = new Rank('K',  'King');

/**
 * @alias module:ranks.joker
 * @type {Rank}
 * @property shortName {'Joker'}
 * @property longName {'Joker'}
 */
exports.joker = new Rank('Joker', 'Joker');

// Non-standard card ranks
exports.one      = new Rank('1',  'One');
exports.cavalier = new Rank('C',  'Cavalier');
exports.knight   = new Rank('KN', 'Knight');
exports.page     = new Rank('P',  'Page');

// Major-arcana card ranks
exports.arcana0  = new Rank('0',     'The Fool');
exports.arcana1  = new Rank('I',     'The Magician');
exports.arcana2  = new Rank('II',    'The High Priestess');
exports.arcana3  = new Rank('III',   'The Empress');
exports.arcana4  = new Rank('IV',    'The Emperor');
exports.arcana5  = new Rank('V',     'The Hierophant');
exports.arcana6  = new Rank('VI',    'The Lovers');
exports.arcana7  = new Rank('VII',   'The Chariot');
exports.arcana8  = new Rank('VIII',  'Strength');
exports.arcana9  = new Rank('IX',    'The Hermit');
exports.arcana10 = new Rank('X',     'Wheel of Fortune');
exports.arcana11 = new Rank('XI',    'Justice');
exports.arcana12 = new Rank('XII',   'The Hanged Man');
exports.arcana13 = new Rank('XIII',  'Death');
exports.arcana14 = new Rank('XIV',   'Temperance');
exports.arcana15 = new Rank('XV',    'The Devil');
exports.arcana16 = new Rank('XVI',   'The Tower');
exports.arcana17 = new Rank('XVII',  'The Star');
exports.arcana18 = new Rank('XVIII', 'The Moon');
exports.arcana19 = new Rank('XIX',   'The Sun');
exports.arcana20 = new Rank('XX',    'Judgement');
exports.arcana21 = new Rank('XXI',   'The World');

// Trump suit card ranks
exports.trump0  = new Rank('0',     'The Fool');
exports.trump1  = new Rank('I',     'The Individual');
exports.trump2  = new Rank('II',    'Childhood');
exports.trump3  = new Rank('III',   'Youth');
exports.trump4  = new Rank('IV',    'Maturity');
exports.trump5  = new Rank('V',     'Old Age');
exports.trump6  = new Rank('VI',    'Morning');
exports.trump7  = new Rank('VII',   'Afternoon');
exports.trump8  = new Rank('VIII',  'Evening');
exports.trump9  = new Rank('IX',    'Night');
exports.trump10 = new Rank('X',     'Earth & Air');
exports.trump11 = new Rank('XI',    'Water & Fire');
exports.trump12 = new Rank('XII',   'Dance');
exports.trump13 = new Rank('XIII',  'Shopping');
exports.trump14 = new Rank('XIV',   'The Outdoors');
exports.trump15 = new Rank('XV',    'Visual Arts');
exports.trump16 = new Rank('XVI',   'Spring');
exports.trump17 = new Rank('XVII',  'Summer');
exports.trump18 = new Rank('XVIII', 'Autumn');
exports.trump19 = new Rank('XIX',   'Winter');
exports.trump20 = new Rank('XX',    'The Game');
exports.trump21 = new Rank('XXI',   'The Collective');
