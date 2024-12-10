
import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h2", {}, "My name is Mehak Narang");
const para = React.createElement("p", {}, "I am 22 years old.")

const react_element = React.createElement("div", {}, [heading, para]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(react_element)