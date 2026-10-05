//your JS code here. If required.
const para = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener("click", function(){
	const h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	para.replaceWith(h1);
});