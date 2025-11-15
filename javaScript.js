// A simple Smoothie class
function Smoothie(size, base, ingredients, sweetness, customer) {
    this.size = size;
    this.base = base;
    this.ingredients = ingredients;
    this.sweetness = sweetness;
    this.customer = customer;

    this.getDescription = function () {
        var text = "";
        text += "<strong>" + this.customer + "</strong>, here is your smoothie:<br><br>";
        text += "Size: " + this.size + "<br>";
        text += "Base: " + this.base + "<br>";
        text += "Ingredients: " + (this.ingredients.length > 0 ? this.ingredients.join(", ") : "None") + "<br>";
        text += "Sweetness Level: " + this.sweetness + "/100";

        return text;
    };
}
