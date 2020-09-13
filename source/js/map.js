ymaps.ready(function () {
    inputSearch = new ymaps.control.SearchControl({
        options: {
            // Пусть элемент управления будет
            // в виде поисковой строки.
            size: 'small',
            // Включим возможность искать
            // не только топонимы, но и организации.
            provider: 'yandex#search'            
        }
    })
    zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "large"
        }
    });
    myMap = new ymaps.Map('map', {
            center: [59.939235, 30.313337],
            zoom: 15,
            controls: [inputSearch, zoomControl]
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // ),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Магазин Cat-Energy',
            // balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/raster/map-pin.png',
            // Размеры метки.
            iconImageSize: [113, 106],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-53, -104]
        });

    myMap.geoObjects
        .add(myPlacemark)
    });