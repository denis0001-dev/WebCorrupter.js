# WebCorrupter.js
## Что это?
WebCorrupter - это вирус для веб-станиц. Он портит контент веб-страницы,
удаляя контент, меняя его местами и меняя его внешний вид.

## Как использовать
Чтобы запустить вирус на веб-странице, выполните следующий код в DevTools:
```js
eval(
    await (
        await fetch(
            "https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/master/webcorrupter.js"
        )
    ).text()
);
```

Для постоянного встраивания добавьте следующий код в `head` или конец `body`:
```html
<script src="https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/master/webcorrupter.js"></script>
```

## Тесты
Этот вирус содержит два теста:
1. [Простая HTML-страница](https://denis0001-dev.github.io/WebCorrupter.js/tests/1)
2. [Клон сайта Toolbox.io](https://denis0001-dev.github.io/WebCorrupter.js/tests/2). 
   Кстати, если вам интересно узнать про Toolbox.io, [оригинальный сайт здесь](https://toolbox-io.ru)

Все тесты содержат копию `webcorrupter.js` для удобства тестирования.