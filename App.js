const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
React.createElement("h1",{},"Hi how are you ?")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

