export default function () {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Blend the Goodness, Sip the Happiness!";

    const para = document.createElement("p");
    para.textContent = "At Howell's Smoothies, we make the healthiest smoothies around with loads of love to go along with it :)";

    content.replaceChildren(heading, para);
}