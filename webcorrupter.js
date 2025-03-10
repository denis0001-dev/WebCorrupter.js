"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var random;
(function (random) {
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    random.randomNumber = randomNumber;
})(random || (random = {}));
var corrupter;
(function (corrupter) {
    var randomNumber = random.randomNumber;
    function randomElement() {
        const elements = document.querySelectorAll("body *");
        return elements[randomNumber(0, elements.length - 1)];
    }
    function start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadStyle();
            showCheatActivated();
        });
    }
    corrupter.start = start;
    function loadStyle() {
        return __awaiter(this, void 0, void 0, function* () {
            const style = yield fetch("https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css");
            const stylesheet = document.createElement("style");
            stylesheet.textContent = yield style.text();
            document.head.appendChild(stylesheet);
        });
    }
    function showCheatActivated() {
        const cheatActivated = document.createElement('div');
        cheatActivated.id = "cheat_activated";
        randomElement().appendChild(cheatActivated);
    }
})(corrupter || (corrupter = {}));
document.addEventListener('DOMContentLoaded', () => {
    corrupter.start();
});
