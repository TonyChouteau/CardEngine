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
        if (card.isCard) {
            this.cards.push(card);
        } else {
            this.cards.push(new Card(card));
        }

        return this;
    },

    addCards: function (cards) {
        for (let i in cards) {
            this.addCard(cards[i]);
        }

        return this;
    },

    shuffle: function (n) {
        for (let i = 0; i < (n || 5); i++) {
            this.cards = this.cards.sort(() => 0.5 - Math.random());
        }

        return this;
    },

    sort: function () {
        this.cards = this.cards.sort((a, b) => a.value.sortValue - b.value.sortValue);
        return this;
    },

    draw: function () {
        let card = this.cards.shift();

        return card;
    },

    deal: function (cardPerPlayer, playerCount, cardsPerDraw) {
        if (this.cards.length < playerCount * cardPerPlayer) {
            return new Error(Error.NOT_ENOUGH_CARDS);
        }
        if (!cardsPerDraw) {
            cardsPerDraw = 1;
        }
        if (!playerCount) {
            playerCount = 1;
        }

        let decks = [];
        for (let i = 0; i < playerCount; i++) {
            decks.push(new Stack());
        }

        let l = -1;
        for (let i = 0; i < cardPerPlayer / cardsPerDraw; i++) {
            l++;
            if (l >= playerCount) {
                l = 0;
            }
            for (let j = 0; j < playerCount; j++) {
                for (let k = 0; k < cardsPerDraw; k++) {
                    decks[l].addCard(this.draw());
                }
            }
        }

        return decks;
    },

    displayTo: function(elt) {
        let container = $('<div class="cards_container"></div>');
        for (let i in this.cards) {
            this.cards[i].displayTo(container);
        }
        elt.append(container);
    }
};
