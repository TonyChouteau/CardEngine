function Stack() {
	this.cards = [];
}

Stack.prototype = {
	addCard: function(card) {
		this.cards.push(new Card(card));

		return this;
	},

	shuffle: function() {
		for (let i = 0; i < 5; i++) {
			this.cards = this.cards.sort(() => 0.5 - Math.random());
		}

		return this;
	},

	deal: function(playerCount, cardPerPlayer) {
		if (this.cards.length < playerCount*cardPerPlayer) {
			return new Error(Error.NOT_ENOUGH_CARDS);
		}

		return this;
	}
}