const video = document.querySelector('#camera');
const button = document.querySelector('#start-camera');

button.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment'
            },
            audio: false
        });

        video.srcObject = stream;
    } catch (error) {
        console.error('Camera access failed: ', error);
    }
});
