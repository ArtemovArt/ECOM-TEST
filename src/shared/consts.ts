export const consts = {
  headerActionItemsNames: {
    favourites: 'Избранное',
    cart: 'Корзина',
  },
  logoTexts: {
    logoTitle: 'EcomTestSneakers',
    logoDescription: 'Тестовое задание для ecom.tech',
  },
  cardItem: {
    price: 'ЦЕНА:',
    pricePostfix: 'руб.',
  },
  searchBlock: {
    title: 'Все кроссовки',
    nothingFound: 'По вашему запросу ничего не найдено',
  },
  errors: {
    portalError: 'Отсутствует контейнер портала',
    generalError: 'Упс. Что-то пошло не так:',
  },
  modal: {
    buyButtonText: 'Купить',
    alreadyInCart: 'Уже в корзине',
    noItems: 'Пока что здесь ничего нет :(',
  },
} as const;
