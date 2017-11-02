window.onload = function () {
  var photos = document.getElementsByClassName('photo');
  var showcase = document.getElementsByClassName('showcase')[0];
  for (var i = 0; i < photos.length; i++) {
    photos[i].addEventListener('click', function (event) {
      var lightBoxContainer = document.createElement('div');
      lightBoxContainer.setAttribute('class','lightBox');
      lightBoxContainer.addEventListener('click', function (event) {
        this.parentNode.removeChild(this);
      });

      var lightBoxImage = document.createElement('img');
      lightBoxImage.setAttribute('src',this.id);
      lightBoxImage.addEventListener('click', function (event) {
        this.parentNode.removeChild(this);
      });

      lightBoxContainer.appendChild(lightBoxImage);

      showcase.appendChild(lightBox);
    });
  }
}