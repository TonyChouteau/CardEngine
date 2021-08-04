function Card(data) {
    if (!data.color) {
        data.color = {};
    }

    this.title = data.value.name + (data.color.name ? "-" + data.color.name : "");
    this.value = data.value;
    this.color = data.color;
}
Card.prototype = {};
