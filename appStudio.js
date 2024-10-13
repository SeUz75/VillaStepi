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


// Get the modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

// Get all images in the slider on the current page
const sliderImages = document.querySelectorAll('.slider img');

// Add click event to each image
sliderImages.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = "block"; // Show the modal
        modalImage.src = img.src; // Set the modal image source
        captionText.innerHTML = img.alt; // Set the caption text
    });
});

// Close the modal when the user clicks on <span> (x)
const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = () => {
    modal.style.display = "none"; // Hide the modal
};

// Close the modal when clicking anywhere outside the modal content
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
};


// PREV AND NEXT FUNCTIONALITY BUTTONS

let currentSlideIndex = 0;
const images = document.querySelectorAll('.studioPicture'); // All your images in the slider

function showImage(index) {
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    if (index >= images.length) {
        currentSlideIndex = 0; // Go back to the first image
    } else if (index < 0) {
        currentSlideIndex = images.length - 1; // Go to the last image
    } else {
        currentSlideIndex = index; // Update current index
    }

    modalImage.src = images[currentSlideIndex].src; // Update modal image
    captionText.innerHTML = images[currentSlideIndex].alt; // Update caption
}

function changeSlide(direction) {
    showImage(currentSlideIndex + direction);
}

// Assuming you have a function to open the modal
function openModal(index) {
    currentSlideIndex = index; // Set the current index
    showImage(currentSlideIndex); // Show the image
    document.getElementById("imageModal").style.display = "block"; // Open the modal
}

// Close modal when clicking on the close button
document.querySelector('.close').onclick = function() {
    document.getElementById("imageModal").style.display = "none"; 
}

// Open modal for each image
document.querySelectorAll('.studioPicture').forEach((img, index) => {
    img.onclick = () => openModal(index);
});

