//====================================================
// Define
//====================================================
let VALUES = {
    '1': {
        name: '1',
        full_name: 'As',
        type: "number",
        sortValue: 1,
    }, '2': {
        name: '2',
        full_name: '2',
        type: "number",
        sortValue: 2,
    }, '3': {
        name: '3',
        full_name: '3',
        type: "number",
        sortValue: 3,
    }, '4': {
        name: '4',
        full_name: '4',
        type: "number",
        sortValue: 4,
    }, '5': {
        name: '5',
        full_name: '5',
        type: "number",
        sortValue: 5,
    }, '6': {
        name: '6',
        full_name: '6',
        type: "number",
        sortValue: 6,
    }, '7': {
        name: '7',
        full_name: '7',
        type: "number",
        sortValue: 7,
    }, '8': {
        name: '8',
        full_name: '8',
        type: "number",
        sortValue: 8,
    }, '9': {
        name: '9',
        full_name: '9',
        type: "number",
        sortValue: 9,
    }, '10': {
        name: '10',
        full_name: '10',
        type: "number",
        sortValue: 10,
    }, 'J': {
        name: 'J',
        full_name: 'Jack',
        french_name: 'V',
        french_full_name: 'Valet',
        type: "face",
        sortValue: 11,
    }, 'C': {
        name: 'C',
        full_name: 'Knight',
        french_name: 'C',
        french_full_name: 'Cavalier',
        type: "face",
        sortValue: 12,
    }, 'Q': {
        name: 'Q',
        full_name: 'Queen',
        french_name: 'D',
        french_full_name: 'Dame',
        type: "face",
        sortValue: 13,
    }, 'K': {
        name: 'K',
        full_name: 'King',
        french_name: 'R',
        french_full_name: 'Roi',
        type: "face",
        sortValue: 14,
    }
};
let COLORS = {
    'H': {
        name: 'H',
        full_name: 'Hearts',
        french_full_name: 'Coeurs',
        color: 'Red',
        hex: '#ff0000',
        french_color: 'Rouge'
    }, 'D': {
        name: 'D',
        full_name: 'Diamonds',
        french_full_name: 'Carreaux',
        color: 'Red',
        hex: '#ff0000',
        french_color: 'Rouge'
    }, 'C': {
        name: 'C',
        full_name: 'Clubs',
        french_full_name: 'Trèfles',
        color: 'Black',
        hex: '#000000',
        french_color: 'Noir'
    }, 'S': {
        name: 'S',
        full_name: 'Spades',
        french_full_name: 'Piques',
        color: 'Black',
        hex: '#000000',
        french_color: 'Noir'
    }
};
let TRUMPS = {
    'TF': {
        name: 'TF',
        full_name: 'Fool',
        french_name: 'E',
        french_full_name: 'Excuse',
        sortValue: 100,
    },
    'T1': {
        name: 'T1',
        type: "Trump",
        french_full_name: 'Petit',
        sortValue: 101,
    }, 'T2': {
        name: 'T2',
        type: "Trump",
        sortValue: 102,
    }, 'T3': {
        name: 'T3',
        type: "Trump",
        sortValue: 103,
    }, 'T4': {
        name: 'T4',
        type: "Trump",
        sortValue: 104,
    }, 'T5': {
        name: 'T5',
        type: "Trump",
        sortValue: 105,
    }, 'T6': {
        name: 'T6',
        type: "Trump",
        sortValue: 106,
    }, 'T7': {
        name: 'T7',
        type: "Trump",
        sortValue: 107,
    }, 'T8': {
        name: 'T8',
        type: "Trump",
        sortValue: 108,
    }, 'T9': {
        name: 'T9',
        type: "Trump",
        sortValue: 109,
    }, 'T10': {
        name: 'T10',
        type: "Trump",
        sortValue: 110,
    }, 'T11': {
        name: 'T11',
        type: "Trump",
        sortValue: 111,
    }, 'T12': {
        name: 'T12',
        type: "Trump",
        sortValue: 112,
    }, 'T13': {
        name: 'T13',
        type: "Trump",
        sortValue: 113,
    }, 'T14': {
        name: 'T14',
        type: "Trump",
        sortValue: 114,
    }, 'T15': {
        name: 'T15',
        type: "Trump",
        sortValue: 115,
    }, 'T16': {
        name: 'T16',
        type: "Trump",
        sortValue: 116,
    }, 'T17': {
        name: 'T17',
        type: "Trump",
        sortValue: 117,
    }, 'T18': {
        name: 'T18',
        type: "Trump",
        sortValue: 118,
    }, 'T19': {
        name: 'T19',
        type: "Trump",
        sortValue: 119,
    }, 'T20': {
        name: 'T20',
        type: "Trump",
        sortValue: 120,
    }, 'T21': {
        name: 'T21',
        type: "Trump",
        sortValue: 121,
    }
};
let JOKER = {
    name: 'JO',
    full_name: 'Joker',
    sortValue: 20,
};
//====================================================
// Functions
//====================================================
/**
 * makeCardsStack
 * @param {Number} n : 32, 52, 54, 78
 * @returns
 */
function makeCardsStack(n) {
    let stack = new Stack();
    
    if (![32, 52, 54, 78].includes(n)) {
        return new Error(Error.BAD_CARDS_COUNT);
    }
    
    for (let i in VALUES) {
        let value = VALUES[i];
        if ((value.name !== 'C' || n === 78) && (!['2', '3', '3', '4', '5', '6'].includes(value.name) || n !== 32)) {
            for (let j in COLORS) {
                let color = COLORS[j];
                stack.addCard({
                    value: value,
                    color: color
                });
            }
        }
    }
    
    if (n === 54) {
        for (let i = 0; i < 2; i++) {
            stack.addCard({
                value: JOKER
            });
        }
    }
    
    if (n === 78) {
        for (let i in TRUMPS) {
            let trump = TRUMPS[i];
            stack.addCard({
                value: trump
            });
        }
    }
    return stack;
}
//====================================================
// End
//====================================================
