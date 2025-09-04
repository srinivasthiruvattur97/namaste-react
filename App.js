const parentdiv = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Iam h1 tag"),
  React.createElement("h3", {}, "Iam h3 tag"),
]);
console.log(parentdiv);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parentdiv);