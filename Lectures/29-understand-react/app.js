window.onload = function () {
  main();
};

function main() {
  const app = Container(
    [
      Text("h1", "Hello World"),
      Text("h2", "I am Rakib Talukder Rupom"),
      Container(
        [
          Text("h5", "This is another container inside parent container"),
          Text("del", "this line is deleted"),
        ],
        {
          backgroundColor: "blue",
        }
      ),
      Text("h3", "I am a software engineer at Google"),
      Text("p", "I love my country very much"),
    ],
    {
      backgroundColor: "salmon",
    }
  );

  document.body.appendChild(app);
}

function Container(children, style = {}) {
  const div = document.createElement("div");

  Object.keys(style).map((key) => {
    div.style[key] = style[key];
  });

  children.forEach((child) => {
    div.appendChild(child);
  });

  return div;
}

function Text(tag, value) {
  const text = document.createElement(tag);
  text.textContent = value;

  return text;
}
