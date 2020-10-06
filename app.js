// Person Constructor
function Person(name, dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970); 
    }
}

// const shiva = new Person('Shiva', 27);
// const theo = new Person('Theo', 12);

// console.log(shiva);
// console.log(theo);

const shiva = new Person('Shiva', '1992-12-20');
console.log(shiva);

console.log(shiva.calculateAge());