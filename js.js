
let header = document.getElementById("nav");
let btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-nav");
        current[0].className = current[0].className.replace(" active-nav", "");
        this.className += " active-nav";
    });
}


let navbar = document.getElementById("navbar");
let navItem = navbar.getElementsByClassName("nav-link");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

window.addEventListener('load', function() {(function() {

    // Get all elements that have a style attribute
    var elms = document.querySelectorAll("*[style]");

    // Loop through them
    Array.prototype.forEach.call(elms, function(elm) {
        // Get the color value
        var clr = elm.style.position || "";

        // Remove all whitespace, make it all lower case
        clr = clr.replace(/\s/g, "").toLowerCase();

        // Switch on the possible values we know of
        switch (clr) {
            case "fixed":
                elm.style.display = "none";
                break;
        }
    });
})();})