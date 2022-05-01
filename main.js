window.onscroll = function() {
    if (window.scrollY > 100) {
        document.getElementById('header').classList.add('header-scroll');
    } else {
        document.getElementById('header').classList.remove('header-scroll');
    }
};

/**
 * change page theme
 */
// const toggle_btn = document.querySelector(".toggle-btn");

// function changeTheme() {
//     if (!document.body.classList.contains("dark")) {
//         document.body.classList.add("dark");
//     }
// }
// toggle_btn.addEventListener("click", () => {
//     changeTheme();
// });

document.getElementById("toggle_btn").onclick = function() {
    var result = document.getElementById("body");
    result.classList.add("dark");
    var result1 = document.getElementById("header");
    result1.classList.add("dark1");
    var result2 = document.getElementById("nav-link");
    result2.classList.add("dark2");
    var result3 = document.getElementById("nav-link1");
    result3.classList.add("dark2");
    var result4 = document.getElementById("nav-link2");
    result4.classList.add("dark2");
    var result5 = document.getElementById("nav-link3");
    result5.classList.add("dark2");
    var result6 = document.getElementById("nav-link4");
    result6.classList.add("dark2");
    var result7 = document.getElementById("about__box");
    result7.classList.add("dark");
    var result8 = document.getElementById("about__box1");
    result8.classList.add("dark");
    var result9 = document.getElementById("about__box2");
    result9.classList.add("dark");
    var result10 = document.getElementById("about__box3");
    result10.classList.add("dark");
    var result11 = document.getElementById("about__box4");
    result11.classList.add("dark");
    var result12 = document.getElementById("about__box5");
    result12.classList.add("dark");
    var result13 = document.getElementById("plan__1");
    result13.classList.add("dark");
    var result14 = document.getElementById("plan__12");
    result14.classList.add("dark");
    var result15 = document.getElementById("plan__13");
    result15.classList.add("dark");
    var result16 = document.getElementById("feedback__item");
    result16.classList.add("dark");
    var result17 = document.getElementById("feedback__item1");
    result17.classList.add("dark");
    var result18 = document.getElementById("feedback__item2");
    result18.classList.add("dark");
    var result19 = document.getElementById("feedback__item3");
    result19.classList.add("dark");
    var result20 = document.getElementById("feedback__item4");
    result20.classList.add("dark");
    var result21 = document.getElementById("feedback__item5");
    result21.classList.add("dark");
    var result22 = document.getElementById("toggle_btn");
    result22.style.display = "none";
    var result222 = document.getElementById("toggle_btn1");
    result222.classList.add("dark2");
    var result23 = document.getElementById("a");
    result23.classList.add("dark2");
    var result24 = document.getElementById("a1");
    result24.classList.add("dark2");
    var result25 = document.getElementById("a2");
    result25.classList.add("dark2");
    var result26 = document.getElementById("a3");
    result26.classList.add("dark2");
    var result27 = document.getElementById("a4");
    result27.classList.add("dark2");
    var result28 = document.getElementById("a5");
    result28.classList.add("dark2");
    var result29 = document.getElementById("a6");
    result29.classList.add("dark2");
    var result30 = document.getElementById("choose");
    result30.classList.add("dark2");
    var result31 = document.getElementById("plan");
    result31.classList.add("dark2");
    var result32 = document.getElementById("better");
    result32.classList.add("dark2");
    var result33 = document.getElementById("feedback");
    result33.classList.add("dark2");
    var result34 = document.getElementById("stay");
    result34.classList.add("dark2");
    var result35 = document.getElementById("about");
    result35.classList.add("dark2");
    document.getElementById("toggle_btn1").style.display = "inline";
}

document.getElementById("toggle_btn1").onclick = function() {

    var re = document.getElementById("body");
    re.classList.remove("dark");
    var result1 = document.getElementById("header");
    result1.classList.remove("dark1");
    var result2 = document.getElementById("nav-link");
    result2.classList.remove("dark2");
    var result3 = document.getElementById("nav-link1");
    result3.classList.remove("dark2");
    var result4 = document.getElementById("nav-link2");
    result4.classList.remove("dark2");
    var result5 = document.getElementById("nav-link3");
    result5.classList.remove("dark2");
    var result6 = document.getElementById("nav-link4");
    result6.classList.remove("dark2");
    var result7 = document.getElementById("about__box");
    result7.classList.remove("dark");
    var result8 = document.getElementById("about__box1");
    result8.classList.remove("dark");
    var result9 = document.getElementById("about__box2");
    result9.classList.remove("dark");
    var result10 = document.getElementById("about__box3");
    result10.classList.remove("dark");
    var result11 = document.getElementById("about__box4");
    result11.classList.remove("dark");
    var result12 = document.getElementById("about__box5");
    result12.classList.remove("dark");
    var result13 = document.getElementById("plan__1");
    result13.classList.remove("dark");
    var result14 = document.getElementById("plan__12");
    result14.classList.remove("dark");
    var result15 = document.getElementById("plan__13");
    result15.classList.remove("dark");
    var result16 = document.getElementById("feedback__item");
    result16.classList.remove("dark");
    var result17 = document.getElementById("feedback__item1");
    result17.classList.remove("dark");
    var result18 = document.getElementById("feedback__item2");
    result18.classList.remove("dark");
    var result19 = document.getElementById("feedback__item3");
    result19.classList.remove("dark");
    var result20 = document.getElementById("feedback__item4");
    result20.classList.remove("dark");
    var result21 = document.getElementById("feedback__item5");
    result21.classList.remove("dark");
    var result22 = document.getElementById("toggle_btn");
    result22.style.display = "inline";
    var result222 = document.getElementById("toggle_btn1");
    result222.style.display = "none";

    var result23 = document.getElementById("a");
    result23.classList.remove("dark2");
    var result24 = document.getElementById("a1");
    result24.classList.remove("dark2");
    var result25 = document.getElementById("a2");
    result25.classList.remove("dark2");
    var result26 = document.getElementById("a3");
    result26.classList.remove("dark2");
    var result27 = document.getElementById("a4");
    result27.classList.remove("dark2");
    var result28 = document.getElementById("a5");
    result28.classList.remove("dark2");
    var result29 = document.getElementById("a6");
    result29.classList.remove("dark2");
    var result30 = document.getElementById("choose");
    result30.classList.remove("dark2");
    var result31 = document.getElementById("plan");
    result31.classList.remove("dark2");
    var result32 = document.getElementById("better");
    result32.classList.remove("dark2");
    var result33 = document.getElementById("feedback");
    result33.classList.remove("dark2");
    var result34 = document.getElementById("stay");
    result34.classList.remove("dark2");
    var result35 = document.getElementById("about");
    result35.classList.remove("dark2");
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}