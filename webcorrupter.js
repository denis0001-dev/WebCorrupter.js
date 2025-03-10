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
var utils;
(function (utils) {
    function delay(millis) {
        return new Promise(resolve => setTimeout(resolve, millis));
    }
    utils.delay = delay;
})(utils || (utils = {}));
var random;
(function (random) {
    function randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    random.randomNumber = randomNumber;
})(random || (random = {}));
var corrupter;
(function (corrupter) {
    var randomNumber = random.randomNumber;
    var delay = utils.delay;
    let payloads;
    (function (payloads) {
        function messUpElements() {
            return __awaiter(this, void 0, void 0, function* () {
                yield delay(randomNumber(100, 3000));
                const numberOfTimes = randomNumber(1, 15);
                console.log(numberOfTimes);
                for (let i = 0; i < numberOfTimes; i++) {
                    try {
                        randomElement().appendChild(randomElement());
                    }
                    catch (e) { }
                    yield delay(randomNumber(100, 3000));
                }
            });
        }
        payloads.messUpElements = messUpElements;
        function showHead() {
            return __awaiter(this, void 0, void 0, function* () {
                const stylesheet = document.createElement('style');
                stylesheet.textContent = `
            head * {
                display: block !important;
            }
            `;
                document.head.appendChild(stylesheet);
            });
        }
        payloads.showHead = showHead;
    })(payloads || (payloads = {}));
    function randomElement() {
        const elements = document.querySelectorAll("body *");
        return elements[randomNumber(0, elements.length - 1)];
    }
    function start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadStyle();
            showCheatActivated();
            payloads.messUpElements();
            if (randomNumber(0, 1) == 1) {
                payloads.showHead();
            }
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cheatActivated = document.createElement('div');
                cheatActivated.id = "cheat_activated";
                cheatActivated.textContent = "Cheat Activated";
                const element = randomElement();
                element.appendChild(cheatActivated);
                yield delay(randomNumber(100, 5000));
                element.removeChild(cheatActivated);
            }
            catch (e) { }
        });
    }
})(corrupter || (corrupter = {}));
document.addEventListener('DOMContentLoaded', () => {
    corrupter.start();
});
