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
    function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    random.randomColor = randomColor;
})(random || (random = {}));
var corrupter;
(function (corrupter) {
    var randomNumber = random.randomNumber;
    var delay = utils.delay;
    let payloads;
    (function (payloads) {
        var randomColor = random.randomColor;
        function messUpElements() {
            return __awaiter(this, void 0, void 0, function* () {
                yield delay(randomNumber(100, 3000));
                const numberOfTimes = randomNumber(1, 50);
                console.log(numberOfTimes);
                for (let i = 0; i < numberOfTimes; i++) {
                    try {
                        randomElement().appendChild(randomElement(true));
                    }
                    catch (e) { }
                    yield delay(randomNumber(100, 500));
                }
            });
        }
        payloads.messUpElements = messUpElements;
        function addRandomText() {
            return __awaiter(this, void 0, void 0, function* () {
                yield delay(randomNumber(100, 3000));
                const numberOfTimes = randomNumber(1, 15);
                console.log(numberOfTimes);
                for (let i = 0; i < numberOfTimes; i++) {
                    try {
                        randomElement().textContent += "error";
                    }
                    catch (e) { }
                    yield delay(randomNumber(100, 1000));
                }
            });
        }
        payloads.addRandomText = addRandomText;
        function addRandomStyles() {
            return __awaiter(this, void 0, void 0, function* () {
                yield delay(randomNumber(100, 3000));
                const numberOfTimes = randomNumber(1, 15);
                console.log(numberOfTimes);
                for (let i = 0; i < numberOfTimes; i++) {
                    try {
                        const element = randomElement();
                        const random = randomNumber(0, 2);
                        switch (random) {
                            case 0: {
                                element.style.color = randomColor();
                                break;
                            }
                            case 1: {
                                element.style.backgroundColor = randomColor();
                                break;
                            }
                            case 2: {
                                element.style.transform = `blur(${randomNumber(1, 100)}px)`;
                                break;
                            }
                        }
                    }
                    catch (e) { }
                    yield delay(randomNumber(100, 1000));
                }
            });
        }
        payloads.addRandomStyles = addRandomStyles;
        function showHead() {
            return __awaiter(this, void 0, void 0, function* () {
                const stylesheet = document.createElement('style');
                stylesheet.textContent = `
            head {
                display: block !important;
            }
            `;
                document.head.appendChild(stylesheet);
            });
        }
        payloads.showHead = showHead;
        function randomScroll() {
            return __awaiter(this, void 0, void 0, function* () {
                // noinspection InfiniteLoopJS
                while (true) {
                    scrollTo({
                        top: randomNumber(0, innerHeight)
                    });
                    yield delay(randomNumber(100, 10000));
                }
            });
        }
        payloads.randomScroll = randomScroll;
    })(payloads || (payloads = {}));
    function randomElement(fromBody = false) {
        let elements;
        if (fromBody) {
            elements = document.querySelectorAll("body *");
        }
        else {
            elements = document.querySelectorAll("*");
        }
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
            if (randomNumber(0, 1) == 1) {
                payloads.randomScroll();
            }
            if (randomNumber(0, 1) == 1) {
                payloads.addRandomText();
            }
            if (randomNumber(0, 1) == 1) {
                payloads.addRandomStyles();
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
if (document.readyState === "complete") {
    corrupter.start();
}
else {
    document.addEventListener('DOMContentLoaded', corrupter.start);
}
