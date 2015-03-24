var audio = null;
//play the background music on startup
function playSound(){
	
	audio = new Audio("audio/backgroundmusic.mp3");
	audio.loop = true;
	audio.play();
}
// pause the music on game pause

function pauseSound(){
	if (audio!= null) {
		audio.pause();
	}
}
// resume the music on game resume
function resumeSound(){
	if (audio!= null) {
		audio.play();
	}
}