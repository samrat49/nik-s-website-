const photoUrls = [
    '12.jpg',
    '1.jpg',
    '5.jpg',
    '3.jpg',
    '4.jpg',
    '9.jpg',
    '2.jpg',
    '11.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '10.jpg',
    
];

const galleryItems = document.getElementById('gallery-items');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const seeLessBtn = document.getElementById('seeLessBtn');
let currentlyShown = 0;

function addPhotosToGallery(start, end) {
    for (let i = start; i < end && i < photoUrls.length; i++) {
        const img = document.createElement('img');
        img.src = photoUrls[i];
        img.alt = `Gallery Photo ${i + 1}`;
        img.className = 'gallery-item';
        img.tabIndex = 0;  // Make the image focusable
        galleryItems.appendChild(img);
        currentlyShown++;
    }
}

function removePhotos(start) {
    while (galleryItems.children.length > start) {
        galleryItems.removeChild(galleryItems.lastChild);
        currentlyShown--;
    }
}

function updateButtons() {
    seeMoreBtn.style.display = currentlyShown < photoUrls.length ? 'inline-block' : 'none';
    seeLessBtn.style.display = currentlyShown > 9 ? 'inline-block' : 'none';
}

// Initial load of 9 photos
addPhotosToGallery(0, 9);
updateButtons();

seeMoreBtn.addEventListener('click', () => {
    addPhotosToGallery(currentlyShown, currentlyShown + 9);
    updateButtons();
});

seeLessBtn.addEventListener('click', () => {
    removePhotos(9);
    updateButtons();
});
