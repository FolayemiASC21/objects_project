let content = document.querySelector("#content")

let firstPerson = document.querySelector("#first")
let secondPerson = document.querySelector("#second")
let thirdPerson = document.querySelector("#third")
let fourthPerson = document.querySelector("#fourth")

let info = {
    0: {
        firstName: "Folayemi",
        lastName: "Kehinde",
        heightFeet: "5",
        heighInches: "9",
        favoriteFood: "tacos",
        favoriteColor: "red",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        // Person #2
        firstName: "Olamide",
        lastName: "Kehinde",
        heightFeet: "5",
        heighInches: "2",
        favoriteFood: "rice",
        favoriteColor: "light blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName)
        }
    },
    2: {
        // Person #3
        firstName: "Afolake",
        lastName: "Kehinde",
        heightFeet: "5",
        heighInches: "6",
        favoriteFood: "beans",
        favoriteColor: "blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName)
        }
    },
    3: {
        // Person #4
        firstName: "Yemi",
        lastName: "Kehinde",
        heightFeet: "6",
        heighInches: "2",
        favoriteFood: "eba",
        favoriteColor: "sky blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName)
        }
    },
}

firstPerson.onclick = function(event) {
    event.preventDefault()

    content.innerHTML = ""

    let div = document.createElement("div")

    div.style.color = "white"
    div.style.fontSize = "50px"
    div.style.margin = "5% 20% 5% 20%"
    div.style.padding = "30px"
    div.style.border = "solid black 5px"
    div.style.textAlign = "center"

    let text1 = document.createElement("p")
    let text2 = document.createElement("p")
    let text3 = document.createElement("p")

    let button = document.createElement("button")
    button.innerHTML = "Who is this?"
    button.style.fontSize = "20px"
    button.style.padding = "20px"

    button.onclick = function() {
        event.preventDefault()

        info[0].sayFullName()
    }

    text1.innerHTML = "My name is " + info[0].firstName + " " + info[0].lastName
    text2.innerHTML = "I am " + info[0].heightFeet + " feet and " + info[0].heighInches + " inches tall"
    text3.innerHTML = "My favorite food is " + info[0].favoriteFood + ", and my favorite color is " + info[0].favoriteColor

    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(button)
    content.appendChild(div)
}

secondPerson.onclick = function(event) {
    event.preventDefault()

    content.innerHTML = ""

    let div = document.createElement("div")

    div.style.color = "white"
    div.style.fontSize = "50px"
    div.style.margin = "5% 20% 5% 20%"
    div.style.padding = "30px"
    div.style.border = "solid black 5px"
    div.style.textAlign = "center"

    let text1 = document.createElement("p")
    let text2 = document.createElement("p")
    let text3 = document.createElement("p")

    let button = document.createElement("button")
    button.innerHTML = "Who is this?"
    button.style.fontSize = "20px"
    button.style.padding = "20px"

    button.onclick = function() {
        event.preventDefault()

        info[1].sayFullName()
    }

    text1.innerHTML = "My name is " + info[1].firstName + " " + info[1].lastName
    text2.innerHTML = "I am " + info[1].heightFeet + " feet and " + info[1].heighInches + " inches tall"
    text3.innerHTML = "My favorite food is " + info[1].favoriteFood + ", and my favorite color is " + info[1].favoriteColor

    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(button)
    content.appendChild(div)
}

thirdPerson.onclick = function(event) {
    event.preventDefault()

    content.innerHTML = ""

    let div = document.createElement("div")

    div.style.color = "white"
    div.style.fontSize = "50px"
    div.style.margin = "5% 20% 5% 20%"
    div.style.padding = "30px"
    div.style.border = "solid black 5px"
    div.style.textAlign = "center"

    let text1 = document.createElement("p")
    let text2 = document.createElement("p")
    let text3 = document.createElement("p")

    let button = document.createElement("button")
    button.innerHTML = "Who is this?"
    button.style.fontSize = "20px"
    button.style.padding = "20px"

    button.onclick = function() {
        event.preventDefault()

        info[2].sayFullName()
    }

    text1.innerHTML = "My name is " + info[2].firstName + " " + info[2].lastName
    text2.innerHTML = "I am " + info[2].heightFeet + " feet and " + info[2].heighInches + " inches tall"
    text3.innerHTML = "My favorite food is " + info[2].favoriteFood + ", and my favorite color is " + info[2].favoriteColor

    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(button)
    content.appendChild(div)
}

fourthPerson.onclick = function(event) {
    event.preventDefault()

    content.innerHTML = ""

    let div = document.createElement("div")

    div.style.color = "white"
    div.style.fontSize = "50px"
    div.style.margin = "5% 20% 5% 20%"
    div.style.padding = "30px"
    div.style.border = "solid black 5px"
    div.style.textAlign = "center"

    let text1 = document.createElement("p")
    let text2 = document.createElement("p")
    let text3 = document.createElement("p")

    let button = document.createElement("button")
    button.innerHTML = "Who is this?"
    button.style.fontSize = "20px"
    button.style.padding = "20px"

    button.onclick = function() {
        event.preventDefault()

        info[3].sayFullName()
    }

    text1.innerHTML = "My name is " + info[3].firstName + " " + info[3].lastName
    text2.innerHTML = "I am " + info[3].heightFeet + " feet and " + info[3].heighInches + " inches tall"
    text3.innerHTML = "My favorite food is " + info[3].favoriteFood + ", and my favorite color is " + info[3].favoriteColor

    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(button)
    content.appendChild(div)
}