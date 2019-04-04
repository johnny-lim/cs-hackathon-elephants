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

  elephant = document.createElement('img');
  let imgURL = true ? chrome.extension.getURL('elephant-final.png') : 'chrome-extension/elephant-final.png'
  elephant.setAttribute("src", imgURL);
  elephant.setAttribute("style", "position:absolute; display:block; left:" + e.pageX + "px; top:" + e.pageY + "px; width: 100px; height: 75px; z-index:1000;");

  console.log(elephant)


  document.body.appendChild(elephant)


}
