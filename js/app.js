const catModel = {
    cats: [
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
            name: 'Selina',
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
    ],
    nowCat: null
};

const catControl = {
    init() {
        catModel.nowCat = catModel.cats[0];
        catView.init();
        catListView.init();

    },
    clickCat(cat) {
        catModel.nowCat = cat;
        catView.render();
    },
    clickCount() {
        catModel.nowCat.count++;
        catView.render();
    }
};


const catListView = {
    init() {
        this.catList = document.querySelector('.cat-list');
        this.catArray = catModel.cats;
        this.render();
    },
    render() {
        for (let cat of catModel.cats) {
            let li = document.createElement('li');
            li.innerText = `${cat.name}`;
            li.onclick = () => {catControl.clickCat(cat)};
            this.catList.appendChild(li);
        }
    }
};


const catView = {
    init() {
        this.view = document.querySelector('.cat-picture');
        this.name = document.querySelector('.cat-name');
        this.click = document.querySelector('.count');
        this.render();

    },
    render() {
        this.view.setAttribute('src', catModel.nowCat.imgSrc);
        this.name.textContent = `${catModel.nowCat.name}`;
        this.click.textContent = `${catModel.nowCat.count}`
        this.view.onclick = catControl.clickCount;

    }
};




catControl.init();
