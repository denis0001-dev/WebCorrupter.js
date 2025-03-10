namespace utils {
    export function delay(millis: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, millis));
    }
}

namespace random {
    export function randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    export function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

namespace corrupter {
    import randomNumber = random.randomNumber;
    import delay = utils.delay;

    namespace payloads {
        import randomColor = random.randomColor;

        export async function messUpElements() {
            await delay(randomNumber(100, 3000));
            const numberOfTimes = randomNumber(1, 50);
            console.log(numberOfTimes);
            for (let i = 0; i < numberOfTimes; i++) {
                try {
                    randomElement().appendChild(randomElement(true));
                } catch(e) {}
                await delay(randomNumber(100, 500));
            }
        }

        export async function addRandomText() {
            await delay(randomNumber(100, 3000));
            const numberOfTimes = randomNumber(1, 15);
            console.log(numberOfTimes);
            for (let i = 0; i < numberOfTimes; i++) {
                try {
                    randomElement().textContent += "error"
                } catch(e) {}
                await delay(randomNumber(100, 1000));
            }
        }

        export async function addRandomStyles() {
            await delay(randomNumber(100, 3000));
            const numberOfTimes = randomNumber(1, 15);
            console.log(numberOfTimes);
            for (let i = 0; i < numberOfTimes; i++) {
                try {
                    const element = randomElement() as HTMLElement;
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
                } catch(e) {}
                await delay(randomNumber(100, 1000));
            }
        }

        export async function showHead() {
            const stylesheet = document.createElement('style');
            stylesheet.textContent = `
            head {
                display: block !important;
            }
            `;
            document.head.appendChild(stylesheet);
        }

        export async function randomScroll() {
            // noinspection InfiniteLoopJS
            while (true) {
                scrollTo({
                    top: randomNumber(0, innerHeight)
                });
                await delay(randomNumber(100, 10000));
            }
        }
    }

    function randomElement(fromBody: boolean = false): Element {
        let elements: NodeListOf<Element>
        if (fromBody) {
            elements = document.querySelectorAll("body *");
        } else {
            elements = document.querySelectorAll("*");
        }
        return elements[randomNumber(0, elements.length - 1)]
    }

    export async function start() {
        await loadStyle();
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
    }

    async function loadStyle() {
        const style = await fetch(
            "https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css"
        );
        const stylesheet = document.createElement("style");
        stylesheet.textContent = await style.text();
        document.head.appendChild(stylesheet);
    }

    async function showCheatActivated() {
        try {
            const cheatActivated = document.createElement('div');
            cheatActivated.id = "cheat_activated";
            cheatActivated.textContent = "Cheat Activated";
            const element: Element = randomElement();
            element.appendChild(cheatActivated);
            await delay(randomNumber(100, 5000));
            element.removeChild(cheatActivated);
        } catch (e) {}
    }
}

document.addEventListener('DOMContentLoaded', () => {
    corrupter.start()
});