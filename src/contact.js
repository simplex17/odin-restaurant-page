export default function () {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact";

    const div = document.createElement("div");

    const name = document.createElement("p");
    name.classList.add("contact__name");
    name.textContent = "Sam Howell";

    const mail = document.createElement("a");
    mail.classList.add("contact__mail");
    mail.href = "mailto:sam@totallyrealemail.com";
    mail.textContent = "same@totallyrealemail.com";

    const tel = document.createElement("a");
    tel.classList.add("contact__tel");
    tel.href = "tel: +1234567890";
    tel.textContent = "+1234567890";

    div.append(name, mail, tel);
    content.replaceChildren(heading, div);
}
