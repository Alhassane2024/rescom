document.addEventListener("DOMContentLoaded", function () {
    const intersectionAPI = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("slide_up")) {
                    entry.target.classList.add("visible");
                }


                intersectionAPI.unobserve(entry.target);
            }

        })
    });

    document.querySelectorAll(".slide_up").forEach(el => {
        intersectionAPI.observe(el);
    })


    let index = 0;
    const slides = document.querySelectorAll(".container_slider");
    const totalSlides = slides.length;

    const showSlide = (n) => {
        if (n >= totalSlides) {
            index = 0;
        } else if (n < totalSlides) {
            index = totalSlides - 1;
        }

        const sliderContainer = document.querySelector(".slider");
        sliderContainer.style.transform = `translateX(${-index * 100}px)`;
    }

    document.querySelector(".prev").addEventListener("click", () => {
        index--;
        showSlide(index);
    })

    document.querySelector(".next").addEventListener("click", () => {
        index++;
        console.log(index);
        showSlide(index);
        console.log(index);
    })
})