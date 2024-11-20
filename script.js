const videoElement = document.getElementById("video");
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play 

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    }catch(error) {
        // Catch error here
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    button.dasabled= true;
    await videoElement.requestPictureInPicture();
    button.dasabled = false;

})

// On load
selectMediaStream();