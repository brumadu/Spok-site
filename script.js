
let xhrVideos = new XMLHttpRequest();
xhrVideos.onreadystatechange = addVideo;
xhrVideos.open("GET", "http://localhost:9000/videos");

function addVideo() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        for (let i = 0; i < 3; i++) {
            let textVideo = response[i];
            if (textVideo.isLastVideo == true) {
                document.getElementById("video").src = 'https://www.youtube.com/embed/' + textVideo.id;
            } else {
                document.getElementById("thumb" + String(i)).src = textVideo.thumb;
                document.getElementById("linkT" + String(i)).href = textVideo.url;
            }
        }
    }
}

xhrVideos.send();

let xhrInsta = new XMLHttpRequest();
xhrInsta.onreadystatechange = addInsta;
xhrInsta.open("GET", "http://localhost:9000/instagram");
xhrInsta.overrideMimeType('text/plain; charset=x-user-defined');
xhrInsta.send();

function addInsta() {
    if (this.readyState === 4 && this.status == 200) {
        var response = xhrInsta.response;
        var binary = ""
        for (i = 0; i < response.length; i++) 
            binary += String.fromCharCode(response.charCodeAt(i) & 0xff);
    
        document.getElementById("instagram").src = 'data:image/jpeg;base64,' + btoa(binary)
    }
}
