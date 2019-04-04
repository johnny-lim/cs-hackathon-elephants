let feed = document.getElementById('contents');
let parent = feed.parentNode;
parent.removeChild(feed);

elephant = document.createElement('img');
let imgURL = chrome.extension.getURL('elephant-final.png')
elephant.setAttribute("src", imgURL);
//elephant.setAttribute("style", "fill:white;")


parent.appendChild(elephant);
