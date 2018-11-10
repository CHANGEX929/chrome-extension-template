function start(urls) {

    var urlArray = new Array(); //定义一数组
    urlArray = urls.split(","); //字符分割

    alert("script begin~~");
    for (var i = 0; i < urlArray.length; i++) {

        var newURL = urlArray[i];

        if (newURL.indexOf("https://") > -1 || newURL.indexOf("http://") > -1) {

        } else {

            newURL = "https://" + newURL;
        }

        chrome.tabs.create({url: newURL});
        chrome.tabs.executeScript(null, {
            code:
            "window.onload=function(){" +
            "document.getElementById('kw').value='" + i + "';" +
            "document.getElementById('su').click();" +
            "}"

        });
    }

    alert("success~");
}



