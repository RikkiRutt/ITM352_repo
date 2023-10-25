//define the product_quantities array
let product_quantities = [2,1,1,1,1];

// iterate through product_quantities and print each element in a table
document.write("<table>");
document.write("<tr><tr>Product #</th><th>Quantity</th></th>");

for (let i=0; i < product_quantities.length; i++) {
    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); // product #
    document.write("<td>" + product_quantities[i] + "</td>"); // quantity
    document.write("</tr>");
}
document.write("</table>");