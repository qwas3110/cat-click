



(function () {
    document
        .querySelector('.cat-picture')
        .addEventListener('click', function () {
            let count = document.querySelector('.count');
            count.textContent++;
        })
}());
