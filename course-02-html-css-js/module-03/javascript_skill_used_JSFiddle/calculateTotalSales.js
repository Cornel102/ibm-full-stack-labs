const sales = [
    { item: "sugar", quantity: 2, price: 200 },
    { item: "cream", quantity: 3, price: 130 },
    { item: "soap", quantity: 4, price: 45 }
];

function calculateTotalSales(sale) {
    let total = 0;
    for (let i = 0; i < sale.length; i++) {
        total += sale[i].quantity * sale[i].price;
    }
    return total;
}

console.log("Total Sales Amount: ", calculateTotalSales(sales));