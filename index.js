
const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 120,
        stock: 5,
        category: "tech"
    },
    {
        id: 2,
        name: "Mouse",
        price: 60,
        stock: 0,
        category: "tech"
    },
    {
        id: 3,
        name: "Notebook",
        price: 15,
        stock: 20,
        category: "office"
    },
    {
        id: 4,
        name: "Monitor",
        price: 300,
        stock: 3,
        category: "tech"
    },
    {
        id: 5,
        name: "Pen",
        price: 5,
        stock: 50,
        category: "office"
    }
];

function findProductById(id) {
    return products.find(function(product) {
        return product.id === id;
    });
}

console.log(findProductById(3));
