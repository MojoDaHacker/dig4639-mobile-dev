class Task {
    constructor(props) {
        this.props = props;
        // this. = _button;
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return `<input type="checkbox" name="" id=""></input><span class="content">Finish in class exercise!</span>`;
    }

}