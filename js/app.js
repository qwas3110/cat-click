const model = {
  cat: [
      {
          name: 'Laso',
          imgSrc: 'img/cat1.jpg',
          count: 0
      },
      {
          name: 'Rexy',
          imgSrc: 'img/cat2.jpg',
          count: 0
      },
      {
          name:'Selina',
          imgSrc: 'img/cat3.jpg',
          count: 0
      },
      {
          name: 'Jack',
          imgSrc: 'img/cat4.jpg',
          count: 0
      },
      {
          name: 'Alex',
          imgSrc: 'img/cat5.jpg',
          count: 0
      }
  ]
};

const catPicture = document.querySelector('.cat-picture');
const catName = document.querySelector('.cat-name');
const count = document.querySelector('.count');
const catList = document.querySelector(".cat-list");


(function () {
    catPicture.setAttribute('src', `${model.cat[0].imgSrc}`);
    catName.textContent = `${model.cat[0].name}`;
    count.textContent = `${model.cat[0].count}`;

    for (let cat of model.cat) {
        let li = document.createElement('li');
        li.textContent = cat.name;

        li.addEventListener('click', function (e) {
            catPicture.setAttribute('src',cat.imgSrc);
            catName.textContent = `${cat.name}`;
            count.textContent = `${cat.count}`;
            catPicture.onclick = () => {
              cat.count++;
              count.textContent = cat.count;
            };
        });


        catList.appendChild(li);
    }


}());


