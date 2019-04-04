/*
let feed = document.getElementById('contents');
let parent = feed.parentNode;
parent.removeChild(feed);

elephant = document.createElement('img');
let imgURL = chrome.extension.getURL('elephant-final.png')
elephant.setAttribute("src", imgURL);
//elephant.setAttribute("style", "fill:white;")

parent.appendChild(elephant);
*/
//set body to position relative;
document.body.setAttribute("style", "position:relative;")

document.body.onmousedown = function(e) {

    //capture top left position of cursor on mouse down
    let topLeftX = e.pageX;
    let topLeftY = e.pageY;
    console.log(topLeftX)
    console.log(topLeftY)

let arrElephants = ['/imgs/elephant-final.png','/imgs/ele2.png','/imgs/ele3.png','/imgs/ele4.png', '/imgs/ele5.png','/imgs/ele6.png','/imgs/ele7.png']
let index = Math.floor(Math.random() * 7);
let randomElephant = arrElephants[index];
  elephant = document.createElement('img');

  let imgURL = true ? chrome.extension.getURL(randomElephant) : `chrome-extension/${randomElephant}`
  e.preventDefault();

  
  elephant.setAttribute("src", imgURL);
  elephant.setAttribute("style", "position:absolute; display:block; left:" + topLeftX + "px; top:" + topLeftY + "px; width: 100px; height: 75px; z-index:1000; pointer-events: none;");

  //add elephant to body
  document.body.appendChild(elephant);

  
    function startResizing(e) {
       elephant.style.width = 100 + e.pageX - topLeftX + 'px';
       elephant.style.height = 75 + e.pageY - topLeftY + 'px';
    }

    function stopResizing(e) {
      window.removeEventListener('mousemove', startResizing, false);
      window.removeEventListener('mouseup', stopResizing, false);
    }

	   window.addEventListener('mousemove', startResizing, false);
      window.addEventListener('mouseup', stopResizing, false);
  


  let audioElement = document.createElement('audio');
  audioElement.setAttribute('src', chrome.extension.getURL('elephant_sound.mp3'));
  audioElement.play();


}

/*
"browser_action": {
  "default_icon" :  {"32": "elephant-final.png"}
}
*/
