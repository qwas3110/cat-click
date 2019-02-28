// 对象数据
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


// 对象控制

const catControl = {
    // 初始化
    init() {
        catModel.currentCat = catModel.catArray[0];
        catListView.init();
        catView.init();
    },
    // 获取当前点击对象
    getCurrentCat() {
        return catModel.currentCat;
    },
    // 获取所有对象数据
    getCats() {
        return catModel.catArray;
    },
    // 指定当前点击对象
    selectCurrentCat(cat) {
        catModel.currentCat = cat;
        catView.render();
    },
    // 增减点击数字
    changClickCount() {
        catModel.currentCat.clickCount++;
        catView.render();
    }
};

// 对象视图

const catView = {
    init() {
        // 获取DOM元素
        this.catName = document.getElementById('cat-name');
        this.catCount = document.getElementById('cat-count');
        this.catPicture = document.getElementById('cat-picture');
        // 加入点击事件，点击增加相应数字
        this.catPicture.onclick = catControl.changClickCount;

        this.render();
    },
    render() {
        // 将当前点击渲染到页面
        const nowCat = catControl.getCurrentCat();
        this.catName.textContent = nowCat.name;
        this.catCount.textContent = nowCat.clickCount;
        this.catPicture.setAttribute('src', nowCat.imgSrc);
    }
};


// 对象列表视图

const catListView = {
    init() {
        // 获取DOM元素
        this.catList = document.getElementById('cat-list');
        this.render();
    },
    render() {
        // 遍历猫数组，创建列表
        const cats = catControl.getCats();
        for (let cat of cats) {
            let li = document.createElement('li');
            li.innerHTML = `<a href="#"><img class="img-responsive img-circle" id="cat-icon" src="${cat.imgSrc}"/></a>`;
            // 加入点击事情，指定当前点击的对象
            li.onclick = () => catControl.selectCurrentCat(cat);
            this.catList.appendChild(li);
        }
    }
};


// 运行

catControl.init();





