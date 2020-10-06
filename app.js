// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970); 
    // }
}

// Calculate Age - Move this function to the prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); 
}

// Get Full Name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '1990-8-12');
const mary = new Person('Mary', 'Sue', 'March 20 1998');

console.log(mary.getFullName());
console.log(john.getFullName());
console.log(john.calculateAge());

mary.getsMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));