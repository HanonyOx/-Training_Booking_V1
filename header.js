const toogleBtn = document.querySelector('.toogle_btn');
const toogleBtnIcon = document.querySelector('.toogle_btn i');
const mobileMenu = document.querySelector('.mobile_menu');

toogleBtn.onclick = function() {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');

    toogleBtnIcon.classList = isOpen ? 'fas fa-times' : 'fas fa-ellipsis-v';
}
// Close when clicking anywhere outside
document.addEventListener('click', function (event) {
    // If menu is open AND click is outside both menu and button
    if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !toogleBtn.contains(event.target)
    ) {
        mobileMenu.classList.remove('open');
        toogleBtnIcon.classList = 'fas fa-ellipsis-v';
    }
});