function makememe()
{
    var urlbox = document.getElementById("url")
   var myWindow1 = window.open("https://blocked.com-default.ws/?url=" + urlbox.value, 'GogaurdianMeme', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
}
  
