
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

function getAvailableProducts() {
    return products.filter(function(product) {
        return product.stock > 0;
    });
}

console.log(getAvailableProducts());

function getProductsByCategory(category) {
    return products.filter(function(product) {
        return product.category === category;
    });
}

console.log(getProductsByCategory("tech"));

function getTotalInventoryValue() {
    return products.reduce(function(total, product) {
        return total + (product.price * product.stock);
    }, 0);
}

console.log(getTotalInventoryValue());

function hasOutOfStockProduct() {
    return products.some(function(product) {
        return product.stock === 0;
    });
}

function allProductsHaveValidPrices() {
    return products.every(function(product) {
        return product.price > 0;
    });
}

console.log(hasOutOfStockProduct());
console.log(allProductsHaveValidPrices());
