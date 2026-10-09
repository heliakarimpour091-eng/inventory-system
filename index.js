
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

function addProduct(id, name, price, stock, category) {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        stock: stock,
        category: category
    };

    products.push(newProduct);
}

addProduct(6, "Headphones", 80, 10, "tech");

console.log(products);

function removeProduct(id) {
    const productIndex = products.findIndex(function(product) {
        return product.id === id;
    });

    if (productIndex === -1) {
        console.log("Product not found");
        return;
    }

    products.splice(productIndex, 1);
    console.log("Product removed successfully");
}

removeProduct(2);

console.log(products);

function updateStock(id, newStock) {
    if (newStock < 0) {
        console.log("Stock cannot be negative");
        return;
    }

    const product = products.find(function(product) {
        return product.id === id;
    });

    if (!product) {
        console.log("Product not found");
        return;
    }

    product.stock = newStock;
    console.log("Stock updated successfully");
}

updateStock(1, 15);

console.log(products);

function purchaseProduct(id, quantity) {
    const product = products.find(function(product) {
        return product.id === id;
    });

    if (!product) {
        console.log("Product not found");
        return;
    }

    if (quantity <= 0) {
        console.log("Quantity must be greater than zero");
        return;
    }

    if (product.stock < quantity) {
        console.log("Not enough stock");
        return;
    }

    product.stock -= quantity;

    const totalPrice = product.price * quantity;

    console.log("Purchase successful");
    return totalPrice;
}

console.log(purchaseProduct(1, 2));
console.log(products);

function applyDiscount(category, percentage) {
    if (percentage < 0 || percentage > 100) {
        console.log("Invalid discount percentage");
        return;
    }

    products.forEach(function(product) {
        if (product.category === category) {
            product.price = product.price * (1 - percentage / 100);
        }
    });

    console.log("Discount applied successfully");
}

applyDiscount("tech", 10);

console.log(products);
