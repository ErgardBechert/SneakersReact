
let store = {
    _state:{
        contentPage:{
            cards: [
                {
                    "id": 1,
                    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
                    "price": 12999,
                    "imageUrl": "/img/sneakers1.jpg"
                },
                {
                    "id": 2,
                    "title": "Мужские Кроссовки Nike Air Max 270",
                    "price": 12999,
                    "imageUrl": "/img/sneakers2.jpg"
                },
                {
                    "id": 3,
                    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
                    "price": 8499,
                    "imageUrl": "/img/sneakers3.jpg"
                },
                {
                    "id": 4,
                    "title": "Кроссовки Puma X Aka Boku Future Rider",
                    "price": 8999,
                    "imageUrl": "/img/sneakers4.jpg"
                },
                {
                    "id": 5,
                    "title": "Мужские Кроссовки Under Armour Curry 8",
                    "price": 15199,
                    "imageUrl": "/img/sneakers5.jpg"
                },
                {
                    "id": 6,
                    "title": "Мужские Кроссовки Nike Kyrie 7",
                    "price": 11299,
                    "imageUrl": "/img/sneakers6.jpg"
                },
                {
                    "id": 7,
                    "title": "Мужские Кроссовки Jordan Air Jordan 11",
                    "price": 10799,
                    "imageUrl": "/img/sneakers7.jpg"
                }
            ]
        }
    },
    getState() {
        return this._state;
    }
}

