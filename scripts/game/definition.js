//====================================================
// Define
//====================================================
let VALUES = {
    '1': {
        name: '1',
        full_name: 'As',
        type: "number"
    }, '2': {
        name: '2',
        full_name: '2',
        type: "number"
    }, '3': {
        name: '3',
        full_name: '3',
        type: "number"
    }, '4': {
        name: '4',
        full_name: '4',
        type: "number"
    }, '5': {
        name: '5',
        full_name: '5',
        type: "number"
    }, '6': {
        name: '6',
        full_name: '6',
        type: "number"
    }, '7': {
        name: '7',
        full_name: '7',
        type: "number"
    }, '8': {
        name: '8',
        full_name: '8',
        type: "number"
    }, '9': {
        name: '9',
        full_name: '9',
        type: "number"
    }, '10': {
        name: '10',
        full_name: '10',
        type: "number"
    }, 'J': {
        name: 'J',
        full_name: 'Jack',
        french_name: 'V',
        french_full_name: 'Valet',
        type: "face"
    }, 'C': {
        name: 'C',
        full_name: 'Knight',
        french_name: 'C',
        french_full_name: 'Cavalier',
        type: "face"
    }, 'Q': {
        name: 'Q',
        full_name: 'Queen',
        french_name: 'D',
        french_full_name: 'Dame',
        type: "face"
    }, 'K': {
        name: 'K',
        full_name: 'King',
        french_name: 'R',
        french_full_name: 'Roi',
        type: "face"
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
    }, 'T': {
        name: 'T',
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
        name: 'F',
        full_name: 'Fool',
        french_name: 'E',
        french_full_name: 'Excuse'
    },
    'T1': {
        name: 'T1',
        type: "Trump",
        french_full_name: 'Petit'
    }, 'T2': {
        name: 'T2',
        type: "Trump"
    }, 'T3': {
        name: 'T3',
        type: "Trump"
    }, 'T4': {
        name: 'T4',
        type: "Trump"
    }, 'T5': {
        name: 'T5',
        type: "Trump"
    }, 'T6': {
        name: 'T6',
        type: "Trump"
    }, 'T7': {
        name: 'T7',
        type: "Trump"
    }, 'T8': {
        name: 'T8',
        type: "Trump"
    }, 'T9': {
        name: 'T9',
        type: "Trump"
    }, 'T10': {
        name: 'T10',
        type: "Trump"
    }, 'T11': {
        name: 'T11',
        type: "Trump"
    }, 'T12': {
        name: 'T12',
        type: "Trump"
    }, 'T13': {
        name: 'T13',
        type: "Trump"
    }, 'T14': {
        name: 'T14',
        type: "Trump"
    }, 'T15': {
        name: 'T15',
        type: "Trump"
    }, 'T16': {
        name: 'T16',
        type: "Trump"
    }, 'T17': {
        name: 'T17',
        type: "Trump"
    }, 'T18': {
        name: 'T18',
        type: "Trump"
    }, 'T19': {
        name: 'T19',
        type: "Trump"
    }, 'T20': {
        name: 'T20',
        type: "Trump"
    }, 'T21': {
        name: 'T21',
        type: "Trump"
    }
};
let JOKER = {
    name: 'JO',
    full_name: 'Joker'
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
