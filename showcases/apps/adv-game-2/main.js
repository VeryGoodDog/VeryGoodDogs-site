document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('header') != null) {
    if (document.getElementById('gameWrapper').classList.contains('fullHeight')) {
      document.getElementById('gameWrapper').classList.remove('fullHeight');
      document.getElementById('gameWrapper').classList.add('heightControl');
    }
  }
});