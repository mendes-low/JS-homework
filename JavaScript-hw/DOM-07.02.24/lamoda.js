// MainData
const mainDataList = [
    {
        id: 1,
        mainDataImg: 'https://a.lmcdn.ru/bs2/0/81/566x448_new_clothes.jpg',
        title: 'Новинка одежды',
        text: 'Зимние коллекции'
    },
    {
        id: 2,
        mainDataImg: 'https://a.lmcdn.ru/bs2/9/82/m_ba.jpg',
        title: 'Скидки до 80%',
        text: 'на тысячи моделей'
    },
    {
        id: 3,
        mainDataImg: 'https://a.lmcdn.ru/bs2/5/41/566x448_clothes_premium.jpg',
        title: 'Premium',
        text: 'Купите то, что давно хотели'
    },
    {
        id: 4,
        mainDataImg: 'https://a.lmcdn.ru/bs2/9/20/566x448_clothes_sport.jpg',
        title: 'Спорт',
        text: 'Все для тренировок'
    }
]

function createMainCard(mainData) {
    const mainCard = document.createElement('div');
    mainCard.classList.add('main_card');

    const mainImg = document.createElement('div');
    mainImg.classList.add('main_img');

    const imageSrc = document.createElement('img');
    imageSrc.src = mainData.mainDataImg;
    mainImg.appendChild(imageSrc);

    const mainTexts = document.createElement('div');
    mainTexts.classList.add('main_texts');

    const h1 = document.createElement('h1');
    h1.textContent = mainData.title;

    const h2 = document.createElement('h2');
    h2.textContent = mainData.text;
    mainTexts.appendChild(h1);
    mainTexts.appendChild(h2);

    mainCard.appendChild(mainImg);
    mainCard.appendChild(mainTexts);

    return mainCard;
}

const mainCards = document.querySelector('.main_cards');

for (let mainCard of mainDataList) {
    mainCards.appendChild(createMainCard(mainCard));
}
// ---------------------------------------------


// MenData
const menDataList = [
    {
        id: '1',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
        oldPrice: 119900,
        price: 49900,
        brand: "Vivaldi",
        category: "Пальто"
    },
    {
        id: '2',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
        price: 160850,
        brand: "Winterra",
        category: "Куртка утепленная"
    },
    {
        id: '3',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM08U9O_18059559_1_v1_2x.jpg',
        price: 54000,
        brand: "Tom Tailor",
        category: "Джинсы"
    },
    {
        id: '4',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
        oldPrice: 32490,
        price: 14250,
        brand: "Finn Flare",
        category: "Олимпийка"
    },
    {
        id: '5',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
        oldPrice: 282200,
        price: 141070,
        brand: "Marc O'Polo",
        category: "Пуховик"
    },
    {
        id: '6',
        menDataImg: 'https://a.lmcdn.ru/img236x341/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
        price: 62900,
        brand: "adidas",
        category: "Костюм спортивный"
    },
    {
        id: '7',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XW0JLLX_20446829_1_v1.jpeg',
        oldPrice: 14950,
        price: 8950,
        brand: "Colin's",
        category: "Брюки"
    },
    {
        id: '8',
        menDataImg: 'https://a.lmcdn.ru/img236x341/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
        oldPrice: 113990,
        price: 34875,
        brand: "Finn Flare",
        category: "Пуховик"
    }
];

function createMenCard(menData) {
    const menCard = document.createElement('div');
    menCard.classList.add('men_card');

    // menImage
    const menImg = document.createElement('div');
    menImg.classList.add('men_img');

    const imageSrc = document.createElement('img');
    imageSrc.src = menData.menDataImg;
    menImg.appendChild(imageSrc);

    // menPrice
    const menPrice = document.createElement('div');
    menPrice.classList.add('men_price');

    const currentPrice = document.createElement('h1');
    currentPrice.classList.add('current_price');

    const oldPrice = document.createElement('h1');
    oldPrice.classList.add('men_old_price');

    if (menData.hasOwnProperty('oldPrice')) {
        oldPrice.textContent = menData.oldPrice;
        currentPrice.textContent = menData.price + ' ₸';
        menPrice.appendChild(oldPrice);
        menPrice.appendChild(currentPrice);
    } else {
        if (menPrice.children.length > 0) {
            menPrice.removeChild(menPrice.firstChild);
        }
        currentPrice.classList.remove('current_price');
        currentPrice.classList.add('current_default_price');
        currentPrice.textContent = menData.price + ' ₸'; 
        menPrice.appendChild(currentPrice);
    }

    // menTexts
    const menTexts = document.createElement('div');
    menTexts.classList.add('men_texts');

    const men_texts_h1 = document.createElement('h1');
    men_texts_h1.textContent = menData.brand;

    const men_texts_h2 = document.createElement('h2');
    men_texts_h2.textContent = menData.category;
    menTexts.appendChild(men_texts_h1);
    menTexts.appendChild(men_texts_h2);

    menCard.appendChild(menImg);
    menCard.appendChild(menPrice);
    menCard.appendChild(menTexts);

    menCard.addEventListener('click', () => {
        window.location.href = `./cards_src/card.html?id=${menData.id}`;
    });

    return menCard;
};

const menCards = document.querySelector('.men_cards');

for (let menCard of menDataList) {
    menCards.appendChild(createMenCard(menCard));
};

