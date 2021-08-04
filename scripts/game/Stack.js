/**
 * Stack object
 *
 * The deck of cards is modeled face down, so the first item in the list of cards is the top of the deck.
 */

function Stack() {
    this.cards = [];
}

Stack.prototype = {

    addCard: function (card) {
        this.cards.push(new Card(card));

        return this;
    },

    shuffle: function () {
        for (let i = 0; i < 5; i++) {
            this.cards = this.cards.sort(() => 0.5 - Math.random());
        }

        return this;
    },

    draw: function () {
        let card = this.cards.shift();

        return card;
    },

    deal: function (playerCount, cardPerPlayer) {
        if (this.cards.length < playerCount * cardPerPlayer) {
            return new Error(Error.NOT_ENOUGH_CARDS);
        }

        let decks = [];
        for (let i = 0; i < playerCount; i++) {
            decks.push([]);
        }

        let k = -1;
        for (let i = 0; i < cardPerPlayer; i++) {
            k++;
            if (k >= playerCount) {
                k = 0;
            }
            for (let j = 0; j < playerCount; j++) {
                decks[k].push(this.draw());
            }
        }

        return decks;
    }
};
