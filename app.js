const aboutPieButton = document.getElementById('aboutPiesButton');
const pieSizeButton = document.getElementById('pieSizesButton');
const aboutDiv = document.querySelector('.about');
const pieSizeDiv = document.querySelector('.pieSizes');

aboutPieButton.addEventListener('click', function() {
    aboutDiv.style.display = 'block';
    pieSizeDiv.style.display = 'none';

});

pieSizeButton.addEventListener('click', function() {
    pieSizeDiv.style.display = 'block';
    aboutDiv.style.display = 'none';
});
