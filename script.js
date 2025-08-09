document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navlinks').classList.toggle('active');
});