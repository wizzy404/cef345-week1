const products = [
  { name: "Rice (50 kg bag)", qty: 4, minQty: 2, buy: 21000, sell: 23500 },
  { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
  { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
  { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000 }
];

const lowStock = products.filter(p => p.qty < p.minQty);

console.log("Products to restock:");
for (const p of lowStock) {
  console.log(`- ${p.name}: ${p.qty} left`);
}

const stockValue = products.reduce((total, p) => total + p.qty * p.buy, 0);
console.log(`Stock value at buying price: ${stockValue} XAF`);

function profitPerUnit(arr) {
  let highest = arr[0];
  for (const p of arr) {
    const currentProfit = p.sell - p.buy;
    const highestProfit = highest.sell - highest.buy;
    if (currentProfit > highestProfit) {
      highest = p;
    }
  }
  console.log(`Product with highest profit per unit: ${highest.name} (${highest.sell - highest.buy} XAF profit)`);
}

profitPerUnit(products);


function getOutOfStock(arr) {
  return arr.filter(p => p.qty === 0);
}

console.log("Out of stock products:");
const outOfStock = getOutOfStock(products);

const totalSellValue = products.reduce((total, p) => total + p.qty * p.sell, 0);
console.log(`Total stock value at selling price: ${totalSellValue} XAF`);

const totalPotentialProfit = products.reduce((total, p) => total + p.qty * (p.sell - p.buy), 0);
console.log(`Total profitMami Ngum will make if she sold everything: ${totalPotentialProfit} XAF`);

