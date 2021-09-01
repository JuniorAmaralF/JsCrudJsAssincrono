const http = new XMLHttpRequest();

http.open('GET','http://localhost:3000/profile');

http.send();

http.onload = function () {
    const data = http.response;
    console.log(data);
}