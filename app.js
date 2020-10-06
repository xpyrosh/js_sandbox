// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
}

// Prototype Method
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit Person Prototype to use methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer();
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Overwrite greeting method
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} Welcome to our Company.`;
}

console.log(customer1.greeting());