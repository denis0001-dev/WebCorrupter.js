namespace random {
    export function randomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}

namespace corrupter {
    import randomNumber = random.randomNumber;

    function randomElement() {
        const elements = document.querySelectorAll("body *");
        return elements[randomNumber(0, elements.length - 1)]
    }

    export async function start() {
        await loadStyle();
        showCheatActivated();
    }

    async function loadStyle() {
        const style = await fetch(
            "https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css"
        );
        const stylesheet = document.createElement("style");
        stylesheet.textContent = await style.text();
        document.head.appendChild(stylesheet);
    }

    function showCheatActivated() {
        const cheatActivated = document.createElement('div');
        cheatActivated.id = "cheat_activated";
        randomElement().appendChild(cheatActivated);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    corrupter.start()
});