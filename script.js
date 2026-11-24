const cameraInput = document.querySelector('#camera-input');
const cameraButton = document.querySelector('#open-camera');
const preview = document.querySelector('#preview');

cameraButton.addEventListener('click', () => {
    cameraInput.click();
});

cameraInput.addEventListener('change', () => {
    const file = cameraInput.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
    }
});
