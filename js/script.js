document.addEventListener("DOMContentLoaded", function() {
    const destinations = document.querySelectorAll(".destination");

    function animateDestinations() {
        destinations.forEach(destination => {
            destination.addEventListener("mouseenter", function() {
                this.classList.add("animate-destination");
            });
            destination.addEventListener("mouseleave", function() {
                this.classList.remove("animate-destination");
            });
        });
    }

    animateDestinations();
});
// script.js
$(document).ready(function() {
    $('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true
    });
  });
  