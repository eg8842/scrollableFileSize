function scrolled(e) {
    if(typeof e.currentPage === 'number' || e.currentPage instanceof Number) {
        $.slideshow.updateToolbar(e);
    }
}