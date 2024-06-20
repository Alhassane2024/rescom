document.addEventListener("DOMContentLoaded", function () {
    const intersectionAPI = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("slide_up")) {
                    entry.target.classList.add("visible");
                } else if (entry.target.classList.contains("slide_left")) {
                    entry.target.classList.add("visible_slide_left");
                } else if (entry.target.classList.contains("slide_right")) {
                    entry.target.classList.add("visible_slide_right");
                }



                intersectionAPI.unobserve(entry.target);
            }

        })
    });

    document.querySelectorAll(".slide_up").forEach(el => {
        intersectionAPI.observe(el);
    })

    document.querySelectorAll(".slide_left").forEach(el => {
        intersectionAPI.observe(el);
    })

    document.querySelectorAll(".slide_right").forEach(el => {
        intersectionAPI.observe(el);
    })


})