import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    //TODO:take the existing function(right side), bind it to this & replace it with existing func.(left side)
    //BUNA ALTERNATİF OLARAK AŞAĞIDA onchange de ()=>this.onInputChange() olarak kullanabilirdik.
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    //tells browser not to submit the form
    //burada apiden veri çekmemiz gerek
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your favorite cities"
          //TODO:form-control, inputu butona kadar uzattı !
          className="form-control"
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
