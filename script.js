$(document).ready(function () {
    // Smooth scroll for nav links
    $("a.nav-link").on("click", function (e) {
        const target = $(this).attr("href");
        if (target.startsWith("#")) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(target).offset().top - 80
            }, 600);
        }
    });
});