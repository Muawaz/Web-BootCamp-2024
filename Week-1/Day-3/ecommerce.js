class Product { 
    constructor(name, category, stock) { 
        this.name = name; 
        this.category = category; 
        this.stock = stock; 
    } 
    updateStock(amount) { 
        this.stock += amount; 
    } 
} 

class Inventory { 
    constructor() { 
        this.products = []; 
    } 
    addProduct(product) { 
        this.products.push(product); 
    } 
    checkLowStock(threshold) { 
        return this.products.filter(product => product.stock < threshold); 
    } 
} 
// Example usage 
const inventory = new Inventory(); 
inventory.addProduct(new Product('Laptop', 'Electronics', 50)); 
inventory.addProduct(new Product('Headphones', 'Electronics', 5)); 
console.log(inventory.checkLowStock(10)); 
// Output: [ Product { name: 'Headphones', category: 'Electronics', stock: 5 } ]