const Pet = (parent) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, parent.name),
    React.createElement("h2", {}, parent.animal),
    React.createElement("h2", {}, parent.breed),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Meeeee!"),
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Yapper",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Doink",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
