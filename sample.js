function getit(){
    var result = document.getElementById('demo');
        var allitems = 0;
            var itemCount = prompt("how many items do you need?");
                var items = {};
for (i = 0; i < itemCount; i++) {
items[i] = {

    name : prompt("Product Name"), 
    price : prompt("Product Price"), 
    qty : prompt("Product qty")

    }
}

for (i = 0; i < itemCount; i++) {
var subtotal = 0;
var total = 0;
subtotal = items[i].price * items[i].qty;
total = subtotal * 1.05;
allitems = allitems + subtotal; 
result.innerHTML += "Product: " + items[i].name + "<br/>";
result.innerHTML += "Total Qty: " +items[i].qty + "<br/>";
result.innerHTML += "Sub total: " + subtotal + "<br/>";
result.innerHTML += "Sub total: " + total + "<br/>";
if(i == (itemCount - 1)){result.innerHTML += "Sub total for all items: " + allitems + "<br/>";}
}
    }
