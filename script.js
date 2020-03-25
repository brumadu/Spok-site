
let xhrVideos = new XMLHttpRequest();
xhrVideos.onreadystatechange = addVideo;
xhrVideos.open("GET", "http://localhost:9000/videos");

function addVideo() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        for (let i = 0; i < 4; i++) {
            let textVideo = response[i];
            if (textVideo.isLastVideo == true) {
                // console.log(textVideo);
                document.getElementById("video").src = 'https://www.youtube.com/embed/' + textVideo.id;
            } else {
                // console.log(textVideo.thumb);
                // console.log(textVideo.url);
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

function addInsta(){
    if (this.readyState == 4 && this.status == 200){
        // console.log((this.response));

        let encodedData = btoa(this.response);
        console.log(encodedData);
        //     let img = new Image();
		// 	let response = xhr.responseText;
        //     let binary = ""
            
        //     for(i=0; i<response.length; i++){
		// 		binary += String.fromCharCode(response.charCodeAt(i) & 0xff);
		// 	}
			
		// 	img.src = 'data:image/jpeg;base64,' + btoa(binary);
		// 	let canvas = document.getElementById('showImage');
		// 	let context = canvas.getContext('2d');
				
		// 	context.drawImage(img,0,0);
		// 	let snapshot = canvas.toDataURL("image/png");
		// 	let twinImage = document.getElementById('twinImg');
		// 	twinImage.src = snapshot;

    }
}

// xhr.overrideMimeType('text/plain; charset=x-user-defined');
xhrInsta.send();