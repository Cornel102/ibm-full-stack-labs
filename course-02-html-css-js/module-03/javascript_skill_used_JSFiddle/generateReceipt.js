const orders = [
    { item: "laptop", quantity: 3, price: 45.8 },
    { item: "mouse", quantity: 2, price: 25.6 },
    { item: "keyboard", quantity: 1, price: 75 }
];

function generateReceipt(order) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------------");
    for (let i = 0; i < order.length; i++) {
        const itemTotal = order[i].quantity * order[i].price;
        grandTotal += itemTotal;
        console.log(`${order[i].item} - Quantity: ${order[i].quantity}, Price: ${order[i].price}, Total: ${itemTotal.toFixed(2)}`);
    }
    console.log("----------------------------");
    console.log(`Grand Total: ${grandTotal.toFixed(2)}`);
}

generateReceipt(orders);