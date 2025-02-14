function openCard(button) {
    hiddenContent = document.querySelector('.hidden-content');
    button.style.display = 'none';
    hiddenContent.classList.add('slide');
    setTimeout(() => {
        hiddenContent.classList.add('show');
      }, 10);
}