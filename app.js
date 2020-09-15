let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.characterSet;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(fuction(script) {
    console.log(script.getAttribute('src'));
    
});

console.log(val);