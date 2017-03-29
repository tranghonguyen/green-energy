/*global console*/
// variables
var masthead = document.querySelector(".mh-image");
var slides = ["<figure><img src=\"./img/bio.png\" alt=\"Bio Energy\"><figcaption>Bio Energy</figcaption></figure>",
"<figure><img src=\"./img/hydro.png\" alt=\"Hydro Energy\"><figcaption>Hydro Energy</figcaption></figure>",
"<figure><img src=\"./img/solar.png\" alt=\"Solar Energy\"><figcaption>Solar Energy</figcaption></figure>",
"<figure><img src=\"./img/wind.png\" alt=\"Wind Energy\"><figcaption>Wind Energy</figcaption></figure>"];
var buttons = document.querySelectorAll(".btn");
var contents = [
    "<figure><img src=\"./img/wind.png\" alt=\"Wind Energy\"><figcaption>Wind Energy</figcaption><p>Airflows can be used to run wind turbines. Modern utility-scale wind turbines range from around 600 kW to 5 MW of rated power, although turbines with rated output of 1.5–3 MW have become the most common for commercial use.</p></figure>",
    "<figure><img src=\"./img/solar.png\" alt=\"Solar Energy\"><figcaption>Solar Energy</figcaption><p>Solar energy, radiant light and heat from the sun, is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, concentrated solar power (CSP), concentrator photovoltaics (CPV), solar architecture and artificial photosynthesis.[46][47] Solar technologies are broadly characterized as either passive solar or active solar depending on the way they capture, convert and distribute solar energy.</p></figure>",
    "<figure><img src=\"./img/hydro.png\" alt=\"Hydro Energy\"><figcaption>Hydro Energy</figcaption><p>In 2015 hydropower generated 16.6% of the worlds total electricity and 70% of all renewable electricity.[43] Since water is about 800 times denser than air, even a slow flowing stream of water, or moderate sea swell, can yield considerable amounts of energy.</p></figure>"];
var container = document.querySelector(".container");
var i = 0;
var k;

// slide-show
function fadeOut() {
    "use strict";
    masthead.style.opacity = 0;
}

function runSlides() {
    "use strict";
    masthead.style.opacity = "1";
    if (i > 3) {
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i += 1;
    setTimeout(fadeOut, 5000);
}

runSlides();
setInterval(runSlides, 6000);

// reveal-hide main content
container.innerHTML = contents[0];

function handleClick(e) {
    "use strict";
    console.log(e.target.innerHTML);
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttributes("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (e.target.innerHTML === "Wind") {
        container.innerHTML = contents[0];
    }
    if (e.target.innerHTML === "Solar") {
        container.innerHTML = contents[1];
    }
    if (e.target.innerHTML === "Hydro") {
        container.innerHTML = contents[2];
    }
    e.target.parentNode.setAttribute("id", "active");
}

for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}