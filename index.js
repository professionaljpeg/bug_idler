leafCount = 0;

const leaf = document.getElementById('leafBox');
const leafCounter = document.getElementById('counter');

leaf.addEventListener('click', function () {
    leafCount++;
    leafCounter.innerText = leafCount;
});