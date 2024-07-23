document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const searchForm = document.getElementById('searchForm');
    const imageContainer = document.getElementById('imageContainer');

    
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(uploadForm);
        try {
            const response = await axios.post('http://localhost:8080/api/image-reviews/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                alert('Image review uploaded successfully!');
                uploadForm.reset();
            } else {
                alert('Failed to upload image review.');
            }
        } catch (error) {
            console.error('Error uploading image review:', error);
            alert('An error occurred while uploading image review.');
        }
    });

   
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const location = document.getElementById('searchLocation').value;
        try {
            const response = await axios.get(`http://localhost:8080/api/image-reviews/search?location=${location}`);
            const data = response.data;
            imageContainer.innerHTML = ''; 
            if (data.length > 0) {
                
                const flexContainer = document.createElement('div');
                flexContainer.classList.add('flex', 'flex-wrap', 'justify-between');

                data.forEach(imageReview => {
                   
                    const card = document.createElement('div');
                    card.classList.add('max-w-md', 'mx-2', 'bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'my-4', 'w-1/4');

                  
                    card.innerHTML = `
                        <div class="p-4">
                            <h2 class="text-lg font-semibold mb-2">Uploader: ${imageReview.username}</h2>
                            <p class="text-sm mb-2">Location: ${imageReview.location}</p>
                            <p class="text-sm mb-2">Review: ${imageReview.review}</p>
                            <img src="${imageReview.imagePath}" alt="Image Review" class="mb-2">
                        </div>
                    `;

                    
                    flexContainer.appendChild(card);
                });
                
                imageContainer.appendChild(flexContainer);
            } else {
                imageContainer.innerHTML = '<p>No images found for this location.</p>';
            }
        } catch (error) {
            console.error('Error fetching image reviews:', error);
            imageContainer.innerHTML = '<p>No Images Found</p>';
        }
    });
});
