document.addEventListener("DOMContentLoaded",function() {
    // Back to Top Button
    var backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        } else {
        backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        // Smooth scroll to top
        window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth behavior
        });
    });
    //"welcome" animation
    document.addEventListener("DOMContentLoaded", function () {
        // Add a delay before starting the animation (e.g., 1 second)
    setTimeout(function () {
        document.querySelector(".welcome-text").classList.add("start-animation");
    }, 1000); // 1000 milliseconds = 1 second
    });
});