class Adder {
    constructor(a, b){
      this.props = {
          "a": a,
          "b": b
        };
    }

    sum() {
      return this.props['a'] + this.props['b'];
    }
    render() {
      return "The sum of " + this.props['a'] + " and " + this.props['b'] + " is " + this.sum() ;
    }
}

module.exports = Adder;