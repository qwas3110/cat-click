const catModel = {
    currentCat: null,
    catArray: [
        {
            name: 'Laso',
            imgSrc: 'img/cat1.jpg',
            clickCount: 0
        },
        {
            name: 'Jack',
            imgSrc: 'img/cat2.jpg',
            clickCount: 0
        },
        {
            name: 'Alex',
            imgSrc: 'img/cat3.jpg',
            clickCount: 0
        },
        {
            name: 'Jasmine',
            imgSrc: 'img/cat4.jpg',
            clickCount: 0
        },
        {
            name: 'Ming',
            imgSrc: 'img/cat5.jpg',
            clickCount: 0
        }
    ]
};

const catControl = {
    init() {
        catModel.currentCat = catModel.catArray[0];
        catListView.init();
        catView.init();
    },
    getCurrentCat() {
        return catModel.currentCat;
    },
    getCats() {
        return catModel.catArray;
    },
    selectCurrentCat(cat) {
        catModel.currentCat = cat;
        catView.render();
    },
    changClickCount() {
        catModel.currentCat.clickCount++;
        catView.render();
    }
};



const catView =  {
    init() {
        this.catName = document.getElementById('cat-name');
        this.catCount = document.getElementById('cat-count');
        this.catPicture = document.getElementById('cat-picture');

        this.catPicture.onclick = catControl.changClickCount;

        this.render();
    },
    render() {
        const nowCat = catControl.getCurrentCat();
        this.catName.textContent = nowCat.name;
        this.catCount.textContent = nowCat.clickCount;
        this.catPicture.setAttribute('src',nowCat.imgSrc);
    }
};


const catListView = {
  init() {
      this.catList = document.getElementById('cat-list');
      this.render();
  },
  render() {
      const cats = catControl.getCats();
      for (let cat of cats) {
          let li = document.createElement('li');
          li.textContent = cat.name;
          li.onclick = () => catControl.selectCurrentCat(cat);
          this.catList.appendChild(li);
      }
  }
};





catControl.init();





