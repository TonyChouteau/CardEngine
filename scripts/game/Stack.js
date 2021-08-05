/**
 * Stack object
 *
 * The deck of cards is modeled face down, so the first item in the list of cards is the top of the deck.
 */

function Stack() {
    this.cards = [];
    this.visible = false;
    this.stacked = true;

    this.displayed = false;
    this.container;
}

Stack.prototype = {
    setVisible: function (visible) {
        this.visible = visible;
        if (this.displayed) {
            this.displayTo();
        }

        return this;
    },

    setStacked: function (stacked) {
        this.stacked = stacked;
        if (this.displayed) {
            this.displayTo();
        }

        return this;
    },

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
        this.cards = this.cards.sort(
            (a, b) => a.value.sortValue - b.value.sortValue
        );
        return this;
    },

    draw: function () {
        let card;

        if (this.visible) {
            card = this.cards.pop();
        } else {
            card = this.cards.shift();
        }

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

    displayTo: function (elt) {

        if (!this.container) {
            this.container = $('<div class="cards_container"></div>');
        } else {
            this.container.html("");
        }

        let move = 0;
        if (this.stacked) {
            let $card = this.cards[0].displayTo(this.container, this.visible);
            $card.css({
                position: "absolute",
                left: move + "vw",
            });
            this.container.css(Card.CSS);
        } else {
            for (let i in this.cards) {
                let $card = this.cards[i].displayTo(this.container, this.visible);
                $card.css({
                    position: "absolute",
                    left: move + "vw",
                });
                move += 2.5;
            }
            this.container.css({
                width: (5 * this.cards.length) / 2 + 2.5 + "vw",
                height: 10 + "vw",
            });
        }

        
        if (!this.displayed) {
            elt.append(this.container);
        }
    },
};
