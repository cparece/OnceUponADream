var imgArray = new Array(
     'AK_DINO.jpeg',
     'AK_ENTR.jpeg',
     'AK_EXPE.jpeg',
     'AK_RPWC.jpeg',
     'AK_RPWC2.jpeg'
);

var imgPath = "gallery/";

function preloadImages() {
     for(var i = 0; i < imgArray.length; i++) {
          var tmpImg = new Image;
          tmpImg.src = imgPath + imgArray[i];
     }
}

function swapImage(imgID) {
     var theImage = document.getElementById('theImage');
     var newImg;
     newImg = imgArray[imgID];
     theImage.src = imgPath + newImg;
}
