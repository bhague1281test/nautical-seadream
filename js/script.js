document.addEventListener('DOMContentLoaded', function() {
  var dreams = [
    'Will I ever get off this boat... Plz help',
    'Hereeeeee on Giligannnnn\'sssss Isleeeeeeee',
    'WILSONNNNNNNNNNNNNN!!!!! NOOOOO!!!'
  ];

  var generateDream = document.getElementById('generate');
  var dream = document.getElementById('dream');

  generateDream.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * dreams.length);
    dream.textContent = dreams[randomIndex];
  });
});
