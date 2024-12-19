

class CashRegistry {
    constructor() {
        this.users = new Map([
            ["5276151", new User("pass6151", "ROBBIE")],
            ["0245064", new User("pass5064", "CARL")],
            ["0716199", new User("pass6199", "JOE")],
            ["0911201", new User("pass1120", "JOHN")],
            ["0513199", new User("pass3199", "ALICIA")],
            ["9633228", new User("pass3228", "IAN")],
            ["6910806", new User("pass0806", "ROSS")],
            ["4384848", new User("pass4848", "ANNIE")],
            ["0190200", new User("pass0200", "ROBERTA")],
            ["2024110", new User("pass4110", "DELILAH")],
        ]);
        this.items = [
            new Item("Water", 1.99),
            new Item("Juice", 2.55),
            new Item("Red Bull", 3.99),
            new Item("Sandwich", 6.99),
            new Item("Beer", 5.0),
            new Item("Bagel", 3.65),
            new Item("Coffee", 2.25),
        ];
        this.cart = [];
    }

    validateUser(cashierNumber, password) {
        const user = this.users.get(cashierNumber);
        return user && user.getPassword() === password ? user : null;
    }

    addItem(name, price) {
        this.items.push(new Item(name, price));
    }

    listItems() {
        return this.items.map((item, index) => `${index + 1}. ${item.getInfo()}`).join("\n");
    }

    addToCart(itemIndex, quantity) {
        if (itemIndex < 1 || itemIndex > this.items.length || quantity <= 0) {
            return "Invalid item number or quantity.";
        }
        const item = this.items[itemIndex - 1];
        const subtotal = item.getPrice() * quantity;
        this.cart.push({ item, quantity, subtotal });
        return `Added ${quantity} x ${item.getName()} to cart. Subtotal: $${subtotal.toFixed(2)}`;
    }

    removeFromCart(cartIndex, quantityToRemove) {
        if (cartIndex < 1 || cartIndex > this.cart.length || quantityToRemove <= 0) {
            return "Invalid cart item number or quantity.";
        }
        const cartItem = this.cart[cartIndex - 1];
        if (quantityToRemove >= cartItem.quantity) {
            this.cart.splice(cartIndex - 1, 1);
            return `Removed ${cartItem.quantity} x ${cartItem.item.getName()} from cart.`;
        } else {
            cartItem.quantity -= quantityToRemove;
            cartItem.subtotal = cartItem.item.getPrice() * cartItem.quantity;
            return `Removed ${quantityToRemove} of ${cartItem.item.getName()} from cart.`;
        }
    }

    listCart() {
        return this.cart.map((cartItem, index) => `${index + 1}. ${cartItem.quantity} x ${cartItem.item.getName()} - $${cartItem.subtotal.toFixed(2)}`).join("\n");
    }

    getGrandTotal() {
        const total = this.cart.reduce((sum, cartItem) => sum + cartItem.subtotal, 0);
        return `Grand Total: $${total.toFixed(2)}`;
    }
}

class User {
    constructor(password, name) {
        this.password = password;
        this.name = name;
    }

    getPassword() {
        return this.password;
    }

    getName() {
        return this.name;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getInfo() {
        return `${this.name} - $${this.price.toFixed(2)}`;
    }
}

// Example Usage
const registry = new CashRegistry();

// DOM Elements Interaction (assuming the HTML is ready)
function handleLogin() {
    const cashierNumber = document.getElementById("cashierNumberInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    const user = registry.validateUser(cashierNumber, passwordInput);
    if (user) {
        alert(`Welcome, ${user.getName()}!`);
    } else {
        alert("Invalid cashier number or password");
    }
}

function handleAddItem() {
    const itemName = document.getElementById("itemNameInput").value;
    const priceInput = parseFloat(document.getElementById("priceInput").value);
    if (itemName && !isNaN(priceInput) && priceInput >= 0) {
        registry.addItem(itemName, priceInput);
        alert(`${itemName} added successfully.`);
    } else {
        alert("Invalid item name or price");
    }
}

function handlePurchaseItem() {
    const itemNumber = parseInt(document.getElementById("itemNumberInput").value, 10);
    const quantity = parseInt(document.getElementById("quantityInput").value, 10);
    const result = registry.addToCart(itemNumber, quantity);
    alert(result);
}

function handleListItems() {
    alert(registry.listItems());
}

function handleListCart() {
    const cartList = registry.listCart();
    alert(cartList.length ? cartList : "Cart is empty.");
}

function handleGetTotal() {
    alert(registry.getGrandTotal());
}

function handleRemoveFromCart() {
    const cartIndex = parseInt(document.getElementById("cartIndexInput").value, 10);
    const quantityToRemove = parseInt(document.getElementById("removeQuantityInput").value, 10);
    const result = registry.removeFromCart(cartIndex, quantityToRemove);
    alert(result);
}
