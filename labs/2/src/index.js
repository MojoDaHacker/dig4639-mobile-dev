// Import correct component
import Card from "./Components/Card/index.js";
// This creates a reference to the Card Class


function runOnLoad()
{
    // Create a container for us
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newTask = new Card({question:"What is 5 * 5?", answer: "55"});
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);

