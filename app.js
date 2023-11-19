document.body.style = "margin: 0";
const nav = document.createElement("nav");
const pNav = document.createElement("p");
const ulNav = document.createElement("ul");
pNav.textContent = "Header Logo";
const array = ["header link one", "header link two", "header link three"];
for (let i = 0; i < array.length; i++) {
  const li = document.createElement("li");
  li.textContent = array[i];
  ulNav.appendChild(li);
}
nav.appendChild(pNav);
nav.appendChild(ulNav);
document.body.appendChild(nav);

const header = document.createElement("section");
header.id = "header";

const headerDivOne = document.createElement("div");
headerDivOne.id = "letters";

const h1 = document.createElement("h1");
h1.textContent = "This website is awesome";
headerDivOne.appendChild(h1);

const pOne = document.createElement("p");
pOne.id = "description";
pOne.textContent = ` That website has some subbtext that goes here under the main title.
it's a smaller font and the color is lower contrast `;
headerDivOne.appendChild(pOne);

const pTwo = document.createElement("p");
pTwo.id = "sign_up";
pTwo.classList.add("button");
pTwo.textContent = `Sign up `;
headerDivOne.appendChild(pTwo);

header.appendChild(headerDivOne);

const headerDivTwo = document.createElement("div");
headerDivTwo.id = "image";

const pDiv = document.createElement("p");
pDiv.textContent = "this a placeholder for an image";
headerDivTwo.appendChild(pDiv);

header.appendChild(headerDivTwo);

document.body.appendChild(header);

const sectionInformation = document.createElement("section");
sectionInformation.id = "information";

sectionInformation.innerHTML = `<div id="text">
<p>Some random information.</p>
</div>
<div id="boxes">
<div class="all">
  <div class="box"></div>
  <p>this is some subtext under an illustration or image</p>
</div>
<div class="all">
  <div class="box"></div>
  <p>this is some subtext under an illustration or image</p>
</div>
<div class="all">
  <div class="box"></div>
  <p>this is some subtext under an illustration or image</p>
</div>
<div class="all">
  <div class="box"></div>
  <p>this is some subtext under an illustration or image</p>
</div>
</div>`;

document.body.appendChild(sectionInformation);

const sectionQuote = document.createElement("section");
document.body.appendChild(sectionQuote);
sectionQuote.outerHTML = `<section id="quote">
<div id="contents">
  <p>
    This is an inspiring quote, or a testimonial form a customer. Maybe
    it's just filling up space, or maybe people will actually read it. Who
    knows? All i know is that it looks nice.
  </p>
</div>
<div id="author">
  <p>-Thor, God of Thunder</p>
</div>
</section>`;

const Ending = document.createElement("section");
document.body.appendChild(Ending);
Ending.outerHTML = `<section id="action">
<div id="blue_box">
  <div style="width: 60%; margin-bottom: 50px">
    <p class="text" id="text1">Call to action! It's time!</p>
    <p class="text" id="text2">
      Sing up for our product by clicking that button right over there!
    </p>
  </div>

  <div class="button" id="sign_up_v2">
    <p>Sign up</p>
  </div>
</div>
</section>
<footer>
<p>Copyright &copy The Odin Project 2023</p>
</footer>`;

const buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent === "Log out") {
      alert("Wylogowałeś się pomyślnie");
      return (ele.textContent = "Sign up");
    }
    alert("Kliknięto w przycisk");
    ele.textContent = "Log out";
  });
});
