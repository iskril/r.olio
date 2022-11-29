function init() {
    let map = new ymaps.Map('map', {
        center: [55.75144502720278,37.61888230437219],
        zoom: 17,

    });

// метка на карте
    let placemark = new ymaps.Placemark([55.75144502720278,37.61888230437219], {}, {
        iconLayout: 'default#image',
        iconImageHref:'img/icons/icon-location.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });
    map.geoObjects.add(placemark);

// map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(init);