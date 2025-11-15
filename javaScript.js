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

// Wait for form submit
var form = document.getElementById("smoothie");

form.addEventListener("submit", function (event) {
    // Stop page from refreshing
    event.preventDefault();

    // Get simple form values
    var size = document.getElementById("size").value;
    var base = document.getElementById("base").value;
    var sweetness = document.getElementById("sweetness").value;
    var customer = document.getElementById("customer").value;

});