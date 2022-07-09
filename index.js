let photos = ["../img/img-1.jpg", "../img/img-2.jpg", "../img/img-3.jpg"];
let imgtag = document.getElementById("img");

let count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgtag.src = photos[count];
  } else {
    imgtag.src = photos[count];
  }
}

function previous() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgtag.src = photos[count];
  } else {
    imgtag.src = photos[count];
  }
}
