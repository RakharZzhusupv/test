let numbers: number[] = [2, 20, 5, 8, 99, 4, 5, 2];
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

type TCategory = "smartphone" | "laptop";
type TStuff = {
  category: TCategory;
  price: number;
  count: number;
};
let products: TStuff[] = [
  {
    category: "smartphone",
    price: 40000,
    count: 50,
  },
  {
    category: "smartphone",
    price: 50000,
    count: 20,
  },
  {
    category: "laptop",
    price: 120000,
    count: 12,
  },
  {
    category: "laptop",
    price: 200000,
    count: 23,
  },
];

let smartphones: TStuff[] = products.filter((e) => e.category === "smartphone");
let laptops: TStuff[] = products.filter((e) => e.category === "laptop");

smartphones.sort((a, b) => {
  return b.price - a.price;
});
laptops.sort((a, b) => {
  return b.price - a.price;
});

console.log(smartphones);
console.log(laptops);

function addProductToCategory(
  category: TCategory,
  price: number,
  count: number
): void {
  if (category === "laptop") {
    laptops.push({
      category: category,
      price: price,
      count: count,
    });
  } else {
    smartphones.push({
      category: category,
      price: price,
      count: count,
    });
  }
}

addProductToCategory("smartphone", 60000, 10);
addProductToCategory("laptop", 150000, 15);

smartphones.forEach((smartphone) => {
  smartphone.price *= 1.1;
});

laptops.forEach((laptop) => {
  laptop.price *= 0.8;
});

console.log(smartphones);
console.log(laptops);
