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
    jsonData = JSON.stringify(data)
    placeholderData = document.getElementById("apiResult");

    data.forEach(element => {
        placeholderData.innerHTML += `<p> userid: ${element.userId} id: ${element.id}</p>`
    });


    return data;
};


