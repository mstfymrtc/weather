import React, { Component } from "react";
//action çağırabiliyor, redux'a müdahale edebiliyor bu yüzden CONTAINER
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "", error: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    //TODO:take the existing function(right side), bind it to this & replace it with existing func.(left side)
    //BUNA ALTERNATİF OLARAK AŞAĞIDA onchange de ()=>this.onInputChange() olarak kullanabilirdik.
  }

  onInputChange(event) {
    this.setState({ term: event.target.value, error: false });
  }
  onFormSubmit(event) {
    event.preventDefault();
    //tells browser not to submit the form
    //burada apiden veri çekmemiz gerek
    this.props
      .fetchWeather(this.state.term)
      .then(res => {})
      .catch(err => {
        this.setState({ error: true });
      });
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <div className="row">
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
        </div>
        <div className="row">
          {this.state.error && (
            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  marginTop: -15,
                  marginLeft: 2,
                  position: "absolute",
                  color: "red"
                }}
              >
                City not found.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//BUNU YAPARSAN ACTIONUN MIDDLEWARE VE REDUCERLARA KAYAR GİDER, MUST

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

//TODO:BİR JSX'DE CALLBACK VARSA VE THIS 'I REFERANS EDİYORSA BIND ETMEK ZORUNDAYIK!
