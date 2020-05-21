import React, { Component } from "react";

class PhoneticName extends Component {
  render() {
    if (this.props.submitted === true && this.props.username.length > 0) {
      return (
        <div>
        <h2>
          {this.props.submittedUsername}'s phonetic Chinese name is:{" "}
          {this.props.chineseName}{" "}
        </h2>
        </div>
      );
    } else {
      return <h2>Submit to see your name in Chinese!</h2>;
    }
  }
}

PhoneticName.propTypes = {};

export default PhoneticName;
