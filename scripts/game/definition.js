//====================================================
// Define
//====================================================

const VALUES = {
	'1': {
		name: '1',
		full_name: 'As'
	}, '2': {
		name: '2',
		full_name: '2'
	}, '3': {
		name: '3',
		full_name: '3',
	}, '4': {
		name: '4',
		full_name: '4',
	}, '5': {
		name: '5',
		full_name: '5',
	}, '6': {
		name: '6',
		full_name: '6',
	}, '7': {
		name: '7',
		full_name: '7',
	}, '8': {
		name: '8',
		full_name: '8',
	}, '9': {
		name: '9',
		full_name: '9',
	}, '10': {
		name: '10',
		full_name: '10',
	}, 'J': {
		name: 'J',
		full_name: 'Jack',
		french_name: 'V',
		french_full_name: 'Valet',
	}, 'C': {
		name: 'C',
		full_name: 'Knight',
		french_name: 'C',
		french_full_name: 'Cavalier',
	}, 'Q': {
		name: 'Q',
		full_name: 'Queen',
		french_name: 'D',
		french_full_name: 'Dame',
	}, 'K': {
		name: 'K',
		full_name: 'King',
		french_name: 'R',
		french_full_name: 'Roi',
	}
};

const COLORS = {
	'H': {
		name: 'H',
		full_name: 'Hearts',
		french_full_name: 'Coeurs',
		color: 'Red',
		hex: '#ff0000',
		french_color: 'Rouge',
	}, 'T': {
		name: 'T',
		full_name: 'Diamonds',
		french_full_name: 'Carreaux',
		color: 'Red',
		hex: '#ff0000',
		french_color: 'Rouge',
	}, 'C': {
		name: 'C',
		full_name: 'Clubs',
		french_full_name: 'Trèfles',
		color: 'Black',
		hex: '#000000',
		french_color: 'Noir',
	}, 'S': {
		name: 'S',
		full_name: 'Spades',
		french_full_name: 'Piques',
		color: 'Black',
		hex: '#000000',
		french_color: 'Noir',
	}
};

const TRUMPS = {
	'F': {
		name: 'F',
		full_name: 'Fool',
		french_name: 'E',
		french_full_name: 'Excuse'
	},
	'1': {
		name: '1'
	}, '2': {
		name: '2'
	}, '3': {
		name: '3'
	}, '4': {
		name: '4'
	}, '5': {
		name: '5'
	}, '6': {
		name: '6'
	}, '7': {
		name: '7'
	}, '8': {
		name: '8'
	}, '9': {
		name: '9'
	}, '10': {
		name: '10'
	}, '11': {
		name: '11'
	}, '12': {
		name: '12'
	}, '13': {
		name: '13'
	}, '14': {
		name: '14'
	}, '15': {
		name: '15'
	}, '16': {
		name: '16'
	}, '17': {
		name: '17'
	}, '18': {
		name: '18'
	}, '19': {
		name: '19'
	}, '20': {
		name: '20'
	}, '21': {
		name: '21'
	},
}

//====================================================
// Functions
//====================================================

function make52CardsDeck() {
	const deck = new Stack();
	
	for (let i in VALUES) {
		const value = VALUES[i];
		if (value.name !== 'C') {
			for (let j in COLORS) {
				const color = COLORS[j];
				deck.addCard({
					value: value,
					color: color,
				});
			}
		}
	}

	return deck;
}

//====================================================
// End
//====================================================