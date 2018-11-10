document.getElementById("start-btn").onclick = function () {

    var urls = document.getElementById("urls").value;

    var bg = chrome.extension.getBackgroundPage();
    bg.start(urls);
}


