namespace utils {
    export function delay(millis: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, millis));
    }
}

namespace random {
    export function randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

namespace corrupter {
    import randomNumber = random.randomNumber;
    import delay = utils.delay;

    namespace payloads {
        export async function messUpElements() {
            await delay(randomNumber(100, 3000));
            const numberOfTimes = randomNumber(1, 15);
            console.log(numberOfTimes);
            for (let i = 0; i < numberOfTimes; i++) {
                try {
                    randomElement().appendChild(randomElement());
                } catch(e) {}
                await delay(randomNumber(100, 3000));
            }
        }

        export async function showHead() {
            const stylesheet = document.createElement('style');
            stylesheet.textContent = `
            head * {
                display: block !important;
            }
            `;
            document.head.appendChild(stylesheet);
        }
    }

    function randomElement(): Element {
        const elements = document.querySelectorAll("body *");
        return elements[randomNumber(0, elements.length - 1)]
    }

    export async function start() {
        await loadStyle();
        showCheatActivated();
        payloads.messUpElements();
        if (randomNumber(0, 1) == 1) {
            payloads.showHead();
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