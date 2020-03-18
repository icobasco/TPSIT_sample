galleryImg = new Array();
galleryImg[0] = "uno.png";
galleryImg[1] = "due.png";
galleryImg[2] = "tre.png";
galleryImg[3] = "quattro.png";
galleryImg[4] = "cinque.png";

id = 0;

function goPrevious(){
  var currentImg=document.querySelector("#current_img")
  var prevArrow=document.querySelector("#prev_arrow")
  var currentDes=document.querySelector("#description")
  var loop_mode = document.querySelector('input[name="loop_mode"]:checked').value;
  id--
  if (id == 0) {
    if (loop_mode == "SINGLE") {
      prevArrow.style.visibility = "hidden";
      console.log("id=" + id + "; PREV scompare")
    }
  }
  if (id < 0) {
      id = galleryImg.length-1
  }
  currentImg.src="img/" + galleryImg[id]
  currentDes.innerHTML = galleryImg[id] + " - " + loop_mode
  showNextArrow()
}

function goNext(){
  var currentImg=document.querySelector("#current_img")
  var nextArrow=document.querySelector("#next_arrow")
  var currentDes=document.querySelector("#description")
  var loop_mode = document.querySelector('input[name="loop_mode"]:checked').value;
  id++
  if (id == galleryImg.length-1) {
    if (loop_mode == "SINGLE") {
      nextArrow.style.visibility = "hidden";
      console.log("id=" + id + "; NEXT scompare")
    }
  }
  if (id >= galleryImg.length) {
    id = 0
  }
  currentImg.src="img/" + galleryImg[id]
  currentDes.innerHTML = galleryImg[id] + " - " + loop_mode
  showPrevArrow()
}

/* In posizione 0, single, la freccia PREV is not visible.
Quando clicca su Radio si deve mostrare
*/
function showPrevArrow() {
  var prevArrow=document.querySelector("#prev_arrow")
  prevArrow.style.visibility = "visible"
}

function showNextArrow() {
  var nextArrow=document.querySelector("#next_arrow")
  nextArrow.style.visibility = "visible"
}

function showNextPrevArrows() {
  var prevArrow=document.querySelector("#prev_arrow")
  var nextArrow=document.querySelector("#next_arrow")
  prevArrow.style.visibility = "visible"
  nextArrow.style.visibility = "visible"
}

function hidePrevArrow() {
  var prevArrow=document.querySelector("#prev_arrow")
  prevArrow.style.visibility = "hidden"
}

function hideNextArrow() {
  var nextArrow=document.querySelector("#next_arrow")
  nextArrow.style.visibility = "hidden"
}

function hideNextPrevArrows() {
  if (id == 0)
    hidePrevArrow()
  if (id == galleryImg.length - 1)
    hideNextArrow()
}
