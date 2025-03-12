# WebCorrupter.js
## Что это?
WebCorrupter - это вирус для веб-станиц. Он портит контент веб-страницы,
удаляя контент, меняя его местами и меняя его внешний вид.

## Как использовать
## Временно
Чтобы запустить вирус на веб-странице, выполните следующий код в DevTools:
```js
eval(await(await fetch("https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/refs/heads/main/dist/WebCorrupter.js")).text());
```

Если не получается, откройте [WebCorrupter.js](dist/WebCorrupter.js) и скопируйте текст из скрипта в DevTools.

## Постоянно
Для постоянного встраивания добавьте следующий код в `head` или конец `body`:
```html
<script src="https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/refs/heads/main/dist/WebCorrupter.js"></script>
```