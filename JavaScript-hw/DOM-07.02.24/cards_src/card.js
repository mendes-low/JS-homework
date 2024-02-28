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

function changeCard(arrObj) {
    const url = window.location.href;
    const id = url.split('id=')[1];
    const card = arrObj.find(item => item.id == id);

    const cardImg = document.querySelector('#card_image');
    cardImg.src = card.menDataImg;

    const cardMainPrice = document.querySelector('.card_price');
    const cardCurrentPrice = document.querySelector('.card_current_price');
    const cardOldPrice = document.querySelector('.card_old_price');

    if (card.hasOwnProperty('oldPrice')) {
        cardOldPrice.textContent = card.oldPrice
        cardCurrentPrice.textContent = card.price + ' ₸';
    } else {
        cardMainPrice.children[0].remove();
        cardCurrentPrice.classList.remove('card_current_price');
        cardCurrentPrice.classList.add('card_default_price');
        cardCurrentPrice.textContent = card.price + ' ₸';
    }

    const cardTextH1 = document.querySelector('.card_texts h1');
    cardTextH1.textContent = card.brand;

    const cardTextH2 = document.querySelector('.card_texts h2');
    cardTextH2.textContent = card.category;

    return card;
};
changeCard(menDataList);
