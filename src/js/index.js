/* Here goes your JS code */
//alert("sdfds");
// Get the modal
var modal = document.getElementById('show-popup-form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}