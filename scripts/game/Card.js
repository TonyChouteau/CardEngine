function Card(data) {
    if (!data.color) {
        data.color = {};
    }

    this.title = data.value.name + (data.color.name ? "-" + data.color.name : "");
    this.value = data.value;
    this.color = data.color;

    this.isCard = true;
}
Card.prototype = {
    makeHTML: function() {
        return `<div class="card">
            <img class="card_img" src="./images/cards/` + (this.value.name + (this.color.name ? this.color.name : "")) + `.png">
        </div>`;
    },

    displayTo: function(elt) {
        let html = $(this.makeHTML());
        elt.append(html);
        return html;
    }
};
