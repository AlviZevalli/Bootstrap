const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Anda menyukai kenangan ini");
  });
});