//Display the images in grid
const fetchData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/thatvisualguy/json_files/main/images.json');
    data = await response.json();
    return data;
};

const displayImages = (startIndex, endIndex, imageData = data) => {
    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = '';
	
    const images = imageData.slice(startIndex, endIndex);

    images.forEach((image) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = image.url; // Change 'source' to 'url'
        imgElement.alt = image.tag;
        imgElement.className = 'image';
        imageContainer.appendChild(imgElement);      
      
        const rect = document.createElement('div');
        rect.className = 'image_rect';
        imageContainer.appendChild(rect); 
        
        const h2Element = document.createElement('h2');
        h2Element.innerHTML = image.tag;
        h2Element.className = 'image_tag';
        imageContainer.appendChild(h2Element);
        
        const downloadButton = document.createElement('input');
        downloadButton.type = 'image';
        downloadButton.src= "https://img.icons8.com/material-rounded/24/download--v1.png" ;
        downloadButton.className = 'download-button';
        downloadButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent image click event from triggering
            downloadImage(image.url); // Change 'source' to 'url'
        });
        imageContainer.appendChild(downloadButton);

        imageGrid.appendChild(imageContainer);
    });
};

document.addEventListener('DOMContentLoaded', async function () {
        const data = await fetchData();
        displayImages(0, 15, data);
});


//Download the images
const downloadImage = async (url) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectURL;
        link.download = 'image.jpg'; // You can customize the filename if needed
        link.target = '_blank'; // Open in a new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the object URL
        URL.revokeObjectURL(objectURL);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};


//Filter the images
const filterButtons = document.querySelectorAll('#btn-bar button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.textContent.toLowerCase(); // Assuming button text is the filter
    filterImagesByTag(filter);
    
    filterButtons.forEach(b => {
      b.style.backgroundColor = '';
      b.style.color = '';
    });
    button.style.backgroundColor = '#d10754';
    button.style.color = 'white';
  });
});

const filterImagesByTag = (tag) => {
  const filteredData = data.filter(image => image.tag.toLowerCase() === tag);
  displayImages(0, 15, filteredData);
};
