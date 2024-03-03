document.querySelectorAll('.container .card .content .icon').forEach(icon => {
  icon.addEventListener('click', function() {
    const content = this.parentNode;
    content.classList.toggle('active');
  });
});