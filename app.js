let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Get all slider navigation links
const sliderNavLinks = document.querySelectorAll('.slider-nav a');

// Get the slider container element
const slider = document.querySelector('.slider');

// Add click event listeners to each slider navigation link
sliderNavLinks.forEach((link, index) => {
  link.addEventListener('click', function(event) {
    // Prevent the default action (jumping to anchor)
    event.preventDefault();

    // Calculate the width of one slide
    const slideWidth = slider.clientWidth;

    // Scroll the slider container to the selected slide by setting scrollLeft
    slider.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });

    // Optional: Set active state for the clicked link (if needed)
    sliderNavLinks.forEach(nav => nav.style.opacity = '0.75');
    this.style.opacity = '1'; // Highlight the active slide
  });
});




