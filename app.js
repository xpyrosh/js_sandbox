// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element

// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// console.log(taskTitle.style.background = "#333");
// console.log(taskTitle.style.color = "#fff");
// console.log(taskTitle.style.padding = '5px');
// // console.log(taskTitle.style.display = 'none');

// // Change content
// console.log(taskTitle.textContent = 'Task List');
// console.log(taskTitle.innerText = 'My Tasks');
// console.log(taskTitle.innerHTML = '<span style="color:red">Task List</span>');

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = "#ccc";
document.querySelector('li:nth-child(even)').style.background = "#f4f4f4";