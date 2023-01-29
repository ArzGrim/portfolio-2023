const loader = document.querySelector('.loader');

if (localStorage.getItem('firstVisit') === null) {
    // Show the loader
    loader.style.display = 'block';
    setTimeout(function() {
        loader.style.display = 'none';
    }, 2000);
    localStorage.setItem('firstVisit', 'true');
} else {
    // Hide the loader
    loader.style.display = 'none';
}