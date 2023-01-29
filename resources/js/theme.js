var buttons = document.querySelectorAll('#button1, #button2, #button3, #button4');
var styles = document.querySelectorAll('link[rel=stylesheet]');
var selectedStyle = localStorage.getItem('selectedStyle');

if (selectedStyle) {
    styles.forEach((style, i) => style.disabled = i !== Number(selectedStyle.slice(-1)) + 1);
}

buttons.forEach((button, index) => button.addEventListener('click', () => {
    styles.forEach((style, i) => style.disabled = i !== index + 2);
    localStorage.setItem('selectedStyle', `style${index + 1}`);
}));