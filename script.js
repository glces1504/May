let fruits=["Apple","Banana","Orange","Mango"];
console.log(fruits[0]);
fruits.push("Grapes");
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);

let person={
    firstName: "Antonio",
    lastName: "Doe",
    age: 24,
    hobbies: ["Writing","Traveling"],
    address: {
    street: "Via Alcide de Gasperi",
    city: "Rome",
    country:"Italy"
}
};
console.log(person.firstName);
person.hobbies.push("Cooking");
console.log(person.firstName, person.hobbies);

for (let i=0; i<5; i++){
    console.log(i);
}

for (let i=0; i<fruits.length;i++) {console.log(fruits[i]);}

for (let hobbies in person) {
    console.log(hobbies +":"+ person [hobbies]);
}

let x=7
if(x>5){console.log("Hello")}
else{console.log("Bye")}

let temperature=7;
if(temperature>20){console.log("It's a warm day!")}
else{console.log("It's freezing!")}

let hour=18;
if (hour<12){
    console.log("Good Morning!")
}
else{console.log("It's Getting Late!")}

let age=24
if(age>=18){
    if(age<21){console.log("You're an adult but not yet allowed to drink.");}
    else{console.log("You're an adult and allowed to drink.")}
}
else{console.log("You are a minor!");}

let height=195


if (height >= 175) {  
    
if(height>190){console.log("You're too tall to play with us");}
else {console.log("You can play basketball");}}

else{console.log("You're too short to play basketball");}

let xx = document.getElementById('gulce');
console.log(xx)

let yy = document.getElementsByClassName('date');
console.log(yy)

let zz = document.getElementsByTagName('div');
console.log(zz)

xx.innerHTML = 'Merhaba Dünya!';

function change(){
    let resim = document.getElementById('bir');
    let yeni = 'images/two.svg';
    resim.setAttribute('src', yeni);
}
function addItalic(){
let baslik = document.getElementById('ismim');

baslik.classList.add('italic');
}

function createNewDiv(){
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.textContent='This is a dynamically created div!';
    document.body.appendChild(newDiv);
   let baba = document.getElementById('menu')
 baba.appendChild(newDiv)
}
let baba = document.getElementById('menu')
console.log(baba)
let Gbutton = document.getElementById('gbutton');

Gbutton.addEventListener('click',function(event){
console.log('ButtonClicked!', event);
});

function tavsansay(){
    for(let i=1; i<=7; i++){
        alert("Tavşan Sayısı " + i);
    }
}