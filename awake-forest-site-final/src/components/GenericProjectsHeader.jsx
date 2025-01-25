import React, { Component } from "react";
import "./GenericProjectsHeaderStyles.css";

export class GenericProjectsHeader extends Component {
  render() {
    // Destructure props for easier access
    const { heading, text, backgroundImage } = this.props;

    // Set the background image style
    const headerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div className="headerStyle" style={headerStyle}>
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default GenericProjectsHeader;
