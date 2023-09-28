// Responsive Header section
let btn = document.querySelector(".hemberger");
btn.addEventListener("click", () => {
    let items = document.querySelector(".items");
    items.classList.toggle("active");
})
// Change image background javaScript
let body = document.body;
let imgBackground = document.querySelector(".imgbackground");
body.addEventListener("mouseover", (e) => {
    let xcor = e.x / 5;
    let ycor = e.y / 5;
    imgBackground.style.background = `linear-gradient(rgb(${xcor}, ${ycor}, 87), rgb(${ycor}, ${xcor}, 2))`;
})
// Passion change section
let passionSpan = document.querySelector(".passion");
setInterval(() => {
    if (passionSpan.innerHTML == "Web Developer") {
        passionSpan.innerHTML = "SoftWare Engineer";
    }
    else if (passionSpan.innerHTML == "Job Seeker") {
        passionSpan.innerHTML = "Web Developer";
    }
    else if (passionSpan.innerHTML = "Software Engineer") {
        passionSpan.innerHTML = "Job Seeker";
    }
}, 1000);

// Form_Validation Section


// Social Media Click Section
let facebook = document.querySelector(".fa-facebook");
facebook.addEventListener("click", () => {
    window.location.href = `https://www.facebook.com/profile.php?id=100064916148016`;
})
let instagram = document.querySelector(".fa-instagram");
instagram.addEventListener("click", () => {
    window.location.href = `https://www.instagram.com/p/CnTydgVvJC_/?igshid=MDJmNzVkMjY=`;
})
let twitter = document.querySelector(".fa-twitter");
twitter.addEventListener("click", () => {
    window.location.href = `https://twitter.com/Raj_Yadav_620`;
})