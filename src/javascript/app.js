var retina = window.devicePixelRatio > 1;
if (retina) {
  var src = document.getElementById('badge').getAttribute('src');
  document.getElementById('badge').setAttribute('src', src.replace('.png', '@2x.png'));
}

$(document).stellar();