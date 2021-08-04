function Error(type) {
    this.type = type;
    this.message = this.getMessage();
}

Error.NOT_ENOUGH_CARDS = 1;
Error.BAD_CARDS_COUNT = 2;

Error.prototype = {

    getMessage: function (lang) {
        switch (this.type) {
            case 1:
                return this.notEnoughCard(lang);
            case 2:
                return this.badCardCount(lang);
            default: 
                return this.default(lang);
        }
    },

    notEnoughCard: function (lang) {
        if (lang === 'fr') {
            return "Pas assez de cartes dans le paquet.";
        } else {
            return "Not enough card in this stack.";
        }
    },

    badCardCount: function (lang) {
        if (lang === 'fr') {
            return "Les valeurs possibles sont : 32, 52, 54, 78.";
        } else {
            return "The possible values are: 32, 52, 54, 78.";
        }
    },

    default: function(lang) {
        if (lang === 'fr') {
            return "Erreur inconnue.";
        } else {
            return "Unknown error.";
        }
    }
};
