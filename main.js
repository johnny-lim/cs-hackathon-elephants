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

document.body.onclick = function(e) {
  console.log(e.pageX)
  console.log(e.pageY)

let arrElephants = ['elephant-final.png','ele2.png','ele3.png','ele4.png', 'ele5.png','ele6.png','ele7.png']
let index = Math.floor(Math.random() * 7);
let randomElephant = arrElephants[index];
  elephant = document.createElement('img');

  let imgURL = true ? chrome.extension.getURL(randomElephant) : `chrome-extension/${randomElephant}`
  elephant.setAttribute("src", imgURL);
  elephant.setAttribute("style", "position:absolute; display:block; left:" + e.pageX + "px; top:" + e.pageY + "px; width: 100px; height: 75px; z-index:1000;");

  console.log(elephant)

  let audioElement = document.createElement('audio');
  audioElement.setAttribute('src', chrome.extension.getURL('elephant_sound.mp3'));
  audioElement.play();


  


  document.body.appendChild(elephant)


}
