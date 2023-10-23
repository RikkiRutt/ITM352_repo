
let item1 = 'Hat';
let quantity1 = 1;
let price1 = 25.26;
let extended_price1 = quantity1 * price1;

let item2 = 'Shirt';
let quantity2 = 4;
let price2 = 35.75;
let extended_price2 = quantity2 * price2;

let item3 = 'Pants';
let quantity3 = 2;
let price3 = 40.45;
let extended_price3 = quantity3 * price3;

let item4 = 'Shoes';
let quantity4 = 1;
let price4 = 75.56;
let extended_price4 = quantity4 * price4;

let item5 = 'Socks';
let quantity5 = 4;
let price5 = 10.21;
let extended_price5 = quantity5 * price5;

//lab 8 part 1.1
let product1 = {
    itemName: 'iPhone12',
    quantitu: 4,
    price: 247.95
};

//calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//calcuate sales tax
let taxRate = 0.0575;  // 5.75%
let taxAmount = subtotal * taxRate;

//calculate shipping
let shippingCharge = 0
if (subtotal <= 50)
{
    shippingCharge = 2
} //lest then$50 is $2
else if (subtotal <= 100) 
{
    shippingCharge = 5
} //$50 to $99.99 is $5
else
{
    shippingCharge= subtotal * 0.05 //5% of subtotal
} //more then $100 is 5% of subtotal
//calculate total
let total = subtotal + taxAmount + shippingCharge;

//populate the table rows using dom manipulation
let table = document.getElementById('invoiceTable');

let row = invoiceTable.insertRow(); //create new row for each item
row.insertCell(0).innerHTML = `${item1}`; 
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = `$` + `${price1}`;
row.insertCell(3).innerHTML = (`$` + `${extended_price1}`);
row = invoiceTable.insertRow(); //create new row for each item
row.insertCell(0).innerHTML = `${item2}`; 
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = `$` + `${price2}`;
row.insertCell(3).innerHTML = (`$` + `${extended_price2}`);
row = invoiceTable.insertRow(); //create new row for each item
row.insertCell(0).innerHTML = `${item3}`; 
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = `$` + `${price3}`;
row.insertCell(3).innerHTML = (`$` + `${extended_price3}`);
row = invoiceTable.insertRow(); //create new row for each item
row.insertCell(0).innerHTML = `${item4}`; 
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = `$` + `${price4}`;
row.insertCell(3).innerHTML = (`$` + `${extended_price4}`);
row = invoiceTable.insertRow(); //create new row for each item
row.insertCell(0).innerHTML = `${item5}`; 
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = `$` + `${price5}`;
row.insertCell(3).innerHTML = (`$` + `${extended_price5}`);

//set subt, tax and total cells
document.getElementById(`subtotal_cell`).innerHTML = `$` + subtotal.toFixed(2);
document.getElementById(`tax_cell`).innerHTML = `$` + taxAmount.toFixed(2);
document.getElementById(`shipping_cell`).innerHTML = `$` + shippingCharge.toFixed(2);
document.getElementById(`total_cell`).innerHTML = `$` + total.toFixed(2);