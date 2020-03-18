galleryImg = new Array();
galleryImg[0] = "uno.png";
galleryImg[1] = "due.png";
galleryImg[2] = "tre.png";
galleryImg[3] = "quattro.png";
galleryImg[4] = "cinque.png";

id = 0;

function goPrevious(){
  var currentImg=document.querySelector("#current_img")
  var miaFreccia=document.querySelector("#prev_arrow")
  var currentDes=document.querySelector("#description")
  id--
  if (id < 0) {
    id = galleryImg.length-1
  }

  currentImg.src="img/" + galleryImg[id]
  currentDes.innerHTML = galleryImg[id]
}

function goNext(){
  var currentImg=document.querySelector("#current_img")
  var miaFreccia=document.querySelector("#next_arrow")
  var currentDes=document.querySelector("#description")
  id++
  if (id >= galleryImg.length) {
    id = 0
  }
  currentImg.src="img/" + galleryImg[id]
  currentDes.innerHTML = galleryImg[id]
}
