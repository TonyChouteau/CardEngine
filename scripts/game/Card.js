function Card(data) {
    if (!data.color) {
        data.color = {};
    }

    this.title = data.value.name + (data.color.name ? "-" + data.color.name : "");
    this.value = data.value;
    this.color = data.color;

    this.isCard = true;
}

Card.WIDTH = 5;
Card.HEIGHT = 10;
Card.UNIT = "vw";
Card.CSS = {
    width: Card.WIDTH + Card.UNIT,
    height: Card.HEIGHT + Card.UNIT,
};

Card.prototype = {
    makeHTML: function (visible) {
        let img = "./images/cards/";
        if (visible) {
            img +=
                this.value.name + (this.color.name ? this.color.name : "");
        } else {
            img += "back";
        }
        img += ".png";

        const html =
            `<div class="card">
            <img class="card_img" src="` +
            img +
            `">
        </div>`;
        const $html = $(html);
        $html.css(Card.CSS);
        $html.find(".card_img").css(Card.CSS);

        return $html;
    },

    displayTo: function (elt, visible) {
        let html = $(this.makeHTML(visible));
        elt.append(html);
        return html;
    },
};
