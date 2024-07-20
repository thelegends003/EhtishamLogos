document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('logoUpload');
    const file = fileInput.files[0];
    
    if (file) {
        const formData = new FormData();
        formData.append('logoUpload', file);

        // This part requires a backend server to handle the file upload.
        // Here we use a mock function to simulate the upload process.
        mockFileUpload(formData);
    }
});

function mockFileUpload(formData) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const newLogo = document.createElement('img');
        newLogo.src = event.target.result;
        newLogo.alt = 'New Logo';
        document.querySelector('.gallery').appendChild(newLogo);
    }
    reader.readAsDataURL(formData.get('logoUpload'));
}
