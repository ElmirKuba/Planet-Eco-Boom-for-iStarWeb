// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  const myMap = new ymaps.Map(
    "contacts-map",
    {
      center: [54.953755, 37.371629],
      zoom: 16,
      controls: [],
    },
    { searchControlProvider: "yandex#search" }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [54.953755, 37.371629],
      {
        balloonContent:
          "<strong>МО, Серпуховский р-н, деревня Глазово, Строение 34-45</strong>",
        iconCaption: "деревня Глазово, 34-45",
      },
      {
        preset: "islands#greenDotIconWithCaption",
      }
    )
  );
}
