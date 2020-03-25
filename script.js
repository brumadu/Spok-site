
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = addVideo;
xhr.open("GET", "http://localhost:9000/videos");

function addVideo() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        for (let i = 0; i < 5; i++) {
            let textVideo = response[i];
            if (textVideo.isLastVideo == true) {
                console.log(textVideo)
                document.getElementById("video").src = 'https://www.youtube.com/embed/' + textVideo.id;
            }
            
        }
    }




}
xhr.send();



