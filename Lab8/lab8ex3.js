//define the product_quantities array
let product_quantities = [2,1,1,1,1];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

// iterate through product_quantities and print each element in a table
document.write("<table>");
//document.write("<tr><tr>Product #</th><th>Quantity</th></th>");
//lab 8 part 3.2
document.write("<tr><tr>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></th>");

for (let i=0; i < product_quantities.length; i++) {

    let quantity = product_quantities[i];
    let product = products[i];

    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // product #
    document.write("<td>" + product_quantities[i] + "</td>"); // quantity
    document.write("</tr>");
}
document.write("</table>");

