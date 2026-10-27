export default function () {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const menu = [
    { name: "Blueberry", price: "$30" },
    { name: "Mango", price: "$30" },
    { name: "Orange Pineapple", price: "$35" },
    { name: "Kiwi Strawberry", price: "$40" }
  ];

  const ul = document.createElement("ul");
  ul.classList.add("menu");

  for (const item of menu) {
    const li = document.createElement("li")
    li.classList.add("menu__item");

    const name = document.createElement("div");
    name.classList.add("menu__item-name");
    name.textContent = item.name;

    const price = document.createElement("div");
    price.classList.add("menu__item-price");
    price.textContent = item.price;

    li.append(name, price);
    ul.append(li);
  }

  content.replaceChildren(heading, ul);
}
