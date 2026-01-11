const clickJS = () => {
    alert("On click event");
}

const hoverJS = () => {
    document.getElementById("onhover").style.color = "red";
}

const hoveroutJS = () => {
    document.getElementById("onhover").style.color = "black";
}

const checkboxJS = () => {
    const checkbox = document.getElementById("checkboxJS");
    alert("Checkbox is " + (checkbox.checked ? "checked" : "unchecked"));
}

const buttonJS = () => {
    const tekstveld = document.getElementById("textJS").value;
    alert("Tekst in tekstveld: " + tekstveld);
}

const apiRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    jsonData = JSON.stringify(data) //Geen object meer ma string!
    placeholderData = document.getElementById("apiResult");

    data.forEach(element => {
        placeholderData.innerHTML += `<p> userid: ${element.userId} id: ${element.id}</p>`
    });


    return data;
};


const validateFormJS = () => {
    const numberInput = document.getElementById("numberJS").value;
    const resultPlaceholder = document.getElementById("formResultJS");
    if (numberInput === "" || isNaN(numberInput)) {
        resultPlaceholder.innerText = "Vul een geldig nummer in.";
    } else if (Number(numberInput) > 20) {
        resultPlaceholder.innerText = "Nummer mag niet groter zijn dan 20.";
    } else {
        resultPlaceholder.innerText = "Cava";
    }
}


const optellen = () => {
    huidig = document.getElementById("Optellen").innerText;
    huidigNum = Number(huidig);
    huidigNum += 1;
    document.getElementById("Optellen").innerText = huidigNum;
}

console.log(`A == A: ${'A' == 'A'}`); // true
console.log(`A === A: ${'A' === 'A'}`); // true
console.log(`A == a: ${'A' == 'a'}`); // false
console.log(`A === a: ${'A' === 'a'}`); // false
console.log(`5 == '5': ${5 == '5'}`); // true
console.log(`5 === '5': ${5 === '5'}`); // false
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`null === undefined: ${null === undefined}`); // false
console.log(`0 == false: ${0 == false}`); // true
console.log(`0 === false: ${0 === false}`); // false
console.log(`2 arrays optellen:`);
console.log(`a = [a, b, c]`);
let a = ['a', 'b', 'c'];

console.log(`b = [d, e, f]`);
let b = ['d', 'e', 'f'];

console.log(`c = [...a, ...b] = ${[...a, ...b]}`);

console.log("eerste entry verwijderen")

let c = ['x', 'y', 'z'];
console.log(`c = [${c.join(", ")}]`);
c.shift(); // verwijdert eerste
console.log(`c.shift() → [${c.join(", ")}]`);
console.log("Laatste entry verwijderen")

let d = ['x', 'y', 'z'];
console.log(`d = [${d.join(", ")}]`);
d.pop(); // verwijdert laatste
console.log(`d.pop() → [${d.join(", ")}]`);
console.log("Filteren")


let e = [1, 2, 3, 4, 5];
console.log(`e = [${e.join(", ")}]`);

let even = e.filter(n => n % 2 === 0);
console.log(`e.filter(even) → [${even.join(", ")}]`);

console.log(`😛🔫`);



setInterval(optellen, 1000);