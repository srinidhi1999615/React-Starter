const heading=React.createElement("h1",{id:"heading"},"Hello world from React");
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Im h1 inside child"),
React.createElement("h1",{},"Im h2 inside child")]
));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);