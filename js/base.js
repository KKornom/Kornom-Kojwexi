window.onload = function() {

    var darkmode = 0;


    // laden aus Cookies
    if(localStorage.getItem("darkmode") != null){
        darkmode = parseInt(localStorage.getItem("darkmode"));
        
        if (darkmode === 0){
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else if (darkmode === 1) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }
    
    // Get the toggle switches
    const lightSwitch = document.getElementById('light');
    const darkSwitch = document.getElementById('dark');

    // Hinzufügen des Event-Listeners, wenn das Element gefunden wurde
    // Add event listeners to the switches
    lightSwitch.addEventListener('click', function() {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        darkmode = 0;
        localStorage.setItem("darkmode", darkmode);
    });

    darkSwitch.addEventListener('click', function() {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        darkmode = 1;
        localStorage.setItem("darkmode", darkmode);
    });

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
