import React from "react";
import ReactDOM from "react-dom";
import Demo from "Demo";


ReactDOM.render(<Demo />, document.getElementById("react-app"));

if(module.hot) {
  module.hot.accept();
}
