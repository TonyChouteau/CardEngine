function Error(type) {
	this.type = type;
	this.message = this.getMessage();
}

Error.NOT_ENOUGH_CARDS = 1;

Error.prototype = {
	getMessage: function(lang) {
		switch (this.type) {
			case 1:
				return this.notEnoughCard(lang);
		};
	},

	notEnoughCard: function(lang) {
		if (lang === 'fr') {
			return "Pas assez de cartes dans le paquet.";
		} else {
			return "Not enough card in this stack.";
		}
	}
}