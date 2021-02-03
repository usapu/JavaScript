let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let name=prompt("用户名");
localStorage.setItem('name',name);
myHeading.textContent = 'Mozilla 酷毙了，' + name;
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }