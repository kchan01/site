$(document).ready(function() {
    var carouselSection = 1;

    $(".right").click(function() {
        nextSection(carouselSection += 1);
    })

    $(".left").click(function() {
        nextSection(carouselSection -= 1);
    })

    function nextSection(n) {
        var i;
        var slides = document.getElementsByClassName("carousel-section");

        if (n < 1) {
            carouselSection = slides.length} //if at home and go left, then go to slide at end of carousel which equals length

        if (n > slides.length) {
            carouselSection = 1} //if reach past end of carousel, return to home

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; //no view of other carousel sections
        }
        slides[carouselSection-1].style.display = "block";
    }

});
