document.addEventListener("deviceready", init, false);
function init() {
	
	
	document.querySelector("#takeVideo").addEventListener("touchend", function() {
		console.log("Take video");
		navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
	}, false);

	document.querySelector("#openVideo").addEventListener("touchend", function() {
		console.log("open video",localStorage.videoPath);
		if (device.platform == "iOS") {
			window.open(localStorage.videoPath, '_blank', 'location=yes');
		} else {
			window.open(localStorage.videoPath, '_system');
		}
		
	}, false);
	
}

function captureError(e) {
	console.log("capture error: "+JSON.stringify(e));
}

function captureSuccess(s) {
	console.log("Success");
	console.dir(s[0]);
	var v = "<video controls='controls'>";
	v += "<source src='" + s[0].fullPath + "' type='video/mp4'>";
	v += "</video>";
	localStorage.videoPath = s[0].fullPath;
	document.querySelector("#videoArea").innerHTML = v;
}
