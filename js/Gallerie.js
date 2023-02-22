var modal;
var modalImg;
var captionText;
var span;

window.onload = function() {
  // Get the modal
  modal = document.getElementById("myModal");

  modalImg = document.getElementById("img01");
  captionText = document.getElementById("caption");
  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}

function clickimage(img){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}
