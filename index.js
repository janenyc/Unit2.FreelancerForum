//Create an array of freelancers
const freelancers = [
    {name: "Dr. Slice", price: 25, occupation: "gardener"},
    {name: "Dr. Pressure", price: 51, occupation: "programmer"},
    {name: "Prof. Possibility", price: 43, occupation: "teacher"},
    {name: "Prof. Prism", price: 81, occupation: "teacher"},
    {name: "Dr. Impulse", price: 43, occupation: "teacher"},
    {name: "Prof. Spark", price: 76, occupation: "programmer"},
    {name: "Dr. Wire", price: 47, occupation: "teacher"},
    {name: "Prof. Goose", price: 72, occupation: "driver"},
];

//Calculate the average
const calculateAverage = () => {
    const total = freelancers.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);
    return total / freelancers.length;
};

//Create a heading Freelance Forum
const body = document.body;
const h1El = document.createElement("h1");
h1El.textContent = "Freelance Forum";
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

//Create a heading for average
const h4El = document.createElement("h4");
h4El.textContent = `The average starting price is ${calculateAverage()}`;
h4El.setAttribute("style", "margin:30px; width:90%; text-align:center;");

//Create a heading Availalbe freelancers
const h2El = document.createElement("h2");
h2El.textContent = "Available Freelancers";
h2El.setAttribute("style", "margin:30px; width:90%; text-align:center;");

// Append the elements to the body
body.appendChild(h1El);
body.appendChild(h4El);
body.appendChild(h2El);

const container = document.getElementById("container");

//Create a function to display freelancers
const displayFreelancers = () => {
    const listEl = document.createElement("ul");
    listEl.setAttribute("style", "padding: 5px; margin-left: 35px");

    freelancers.forEach((freelancer) => {
        const person = document.createElement("li");
        person.textContent = `${freelancer.name} --- ${freelancer.occupation} --- $${freelancer.price}`;
        listEl.appendChild(person);
    });

    container.appendChild(listEl);
};

// Call the function to display freelancers
displayFreelancers(freelancers);
