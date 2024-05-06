// Assume there is CSS for .hover-effect with transition effects
// CSS:
// .hover-effect {
//   transition: transform 0.3s ease;
// }
// .hover-effect:hover {
//   transform: scale(1.1);
// }

// Get all navigation items
const navItems = document.querySelectorAll('nav ul li');

// Add hover class to each navigation item
navItems.forEach(item => {
    item.classList.add('hover-effect');
});

// Get all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Add hover class to each image in the gallery
galleryImages.forEach(image => {
    image.classList.add('hover-effect');

    // Add click event to each image in the gallery for fullscreen view
    image.addEventListener('click', () => {
        if (image.requestFullscreen) {
            image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { /* Firefox */
            image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */
            image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { /* IE/Edge */
            image.msRequestFullscreen();
        }
    });
});

// Get all download buttons in the gallery
const downloadButtons = document.querySelectorAll('.download-btn');

// Add click event to each download button in the gallery
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Use currentTarget to ensure you get the button regardless of what was clicked in it
        const image = e.currentTarget.previousElementSibling;

        // Get the image source
        const imageSrc = image.getAttribute('src'); 

        // Extract the filename and ensure it has a fallback
        const imageName = imageSrc.split('/').pop() || 'downloaded_image.jpg';

        // Create a temporary anchor element and trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = imageSrc;
        downloadLink.setAttribute('download', imageName); // Use the actual image name or a default
        downloadLink.style.display = 'none'; // Hide the anchor element
        document.body.appendChild(downloadLink); // Append the anchor to the body
        downloadLink.click(); // Trigger the download
        document.body.removeChild(downloadLink); // Clean up the anchor element after download
    });
});