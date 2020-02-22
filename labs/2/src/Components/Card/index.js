import "./index.css";

class Card {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("button");
        this.element.innerText = this.props.question.value;

        this.element.className = "card";

        this.element.onclick = switchFace();
    }

    
    render() {
        return this.element;
        
    }
}

function switchFace() {
    switch (this.props) {
        case value:
            
            break;
    
        default: console.log("Hello!");
            break;
    }
}

export default Card;