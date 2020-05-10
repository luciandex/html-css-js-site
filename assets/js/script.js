// RESPONSIVE MENU BAR
function expand() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// BACK_TO_TOP **
// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);

        // ScrollTo takes an x and a y coordinate.
        window.scrollTo(0, c - c / 10);

        // Increase the '10' value to get a smoother/slower scroll!
    }
};
// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}





// COOKIES *******
$(document).ready(function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});


/// contact form
let formular = document.getElementById("formular");
let form = document.createElement("form");
form.id = "cForm";
let inputName = document.createElement("input");
inputName.id = "fullNm";
inputName.type = "text";
inputName.name = "fullName";
inputName.placeholder = "Nume, prenume...";
form.appendChild(inputName);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
let inputEmail = document.createElement("input");
inputEmail.id = "mail";
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Email...";
inputEmail.required = true;
form.appendChild(inputEmail);
let message = document.createElement("textarea");
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
message.id = "message";
message.name = "message";
message.minLength = 20;
message.placeholder = "Mesaj...";
form.appendChild(message);
message.required = true;
let submit = document.createElement("input");
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
submit.id = "submit";
submit.type = "submit";
submit.value = "Trimite";
submit.name = "send";
submit.onclick = function() {
    if (confirm("Te mai gîndești?")) {
        form.submit();
    }
};
form.appendChild(submit);

if (formular) {
	formular.appendChild(form);	
}
