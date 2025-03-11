package ru.morozovit.webcorrupter

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.*
import kotlinx.dom.addClass
import kotlinx.html.dom.append
import kotlinx.html.js.div
import kotlinx.html.js.style
import org.w3c.dom.*
import kotlin.js.Promise
import kotlin.random.Random
import kotlin.random.Random.Default.nextInt

object RandomUtils {
    fun randomNumber(min: Int, max: Int): Int = nextInt(min, max + 1)

    fun randomColor(): String {
        val letters = "0123456789ABCDEF"
        return "#" + (1..6).map { letters[nextInt(16)] }.joinToString("")
    }
}

object Corrupter {
    object Payloads {
        private fun max(): Int = when {
            document.body!!.innerHTML.length > 100000 -> 400
            document.body!!.innerHTML.length > 50000 -> 300
            document.body!!.innerHTML.length > 10000 -> 200
            document.body!!.innerHTML.length > 5000 -> 100
            else -> 1000
        }

        suspend fun messUpElements() {
            delay(nextInt(100, 3000).toLong())
            console.log("Messing up elements...")
            val numberOfTimes = RandomUtils.randomNumber(10, max())
            console.log("Number of times: ", numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    randomElement().appendChild(randomElement(true))
                } catch (_: Exception) {}
                delay(nextInt(100, 500).toLong())
            }
        }

        suspend fun addRandomText() {
            delay(nextInt(100, max()).toLong())
            console.log("Adding random text...")
            val numberOfTimes = RandomUtils.randomNumber(10, max())
            console.log("Number of times: ", numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    randomElement().textContent += "error"
                } catch (_: Exception) {}
                delay(nextInt(100, 1000).toLong())
            }
        }

        suspend fun addRandomStyles() {
            delay(nextInt(100, 3000).toLong())
            console.log("Adding random styles...")
            val numberOfTimes = RandomUtils.randomNumber(10, max())
            console.log(numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    val element = randomElement() as HTMLElement
                    when (RandomUtils.randomNumber(0, 2)) {
                        0 -> element.style.color = RandomUtils.randomColor()
                        1 -> element.style.backgroundColor = RandomUtils.randomColor()
                        2 -> element.style.transform = "blur(${RandomUtils.randomNumber(1, 100)}px)"
                    }
                } catch (_: Exception) {}
                delay(nextInt(100, 1000).toLong())
            }
        }

        fun showHead() {
            document.head?.addClass("show")
        }

        suspend fun randomScroll() {
            while (true) {
                window.scrollTo(0.0, RandomUtils.randomNumber(0, window.innerHeight).toDouble())
                delay(nextInt(100, 10000).toLong())
            }
        }
    }

    private fun randomElement(fromBody: Boolean = false): Element {
        val elements = if (fromBody) {
            document.querySelectorAll("body *")
        } else {
            document.querySelectorAll("*")
        }
        return elements[RandomUtils.randomNumber(0, elements.length - 1)] as Element
    }

    @OptIn(DelicateCoroutinesApi::class)
    suspend fun start() {
        loadStyle()
        showCheatActivated()
        Payloads.messUpElements()
        if (RandomUtils.randomNumber(0, 1) == 1) {
            Payloads.showHead()
        }
        if (RandomUtils.randomNumber(0, 1) == 1) {
            GlobalScope.launch { Payloads.randomScroll() }
        }
        if (RandomUtils.randomNumber(0, 1) == 1) {
            Payloads.addRandomText()
        }
        if (RandomUtils.randomNumber(0, 1) == 1) {
            Payloads.addRandomStyles()
        }
    }

    private suspend fun loadStyle() {
        val style = window.fetch("https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css").await()
        val stylesheet = document.createElement("style") as HTMLStyleElement
        stylesheet.textContent = style.text().await()
        document.head?.appendChild(stylesheet)
    }

    private suspend fun showCheatActivated() {
        try {
            val cheatActivated = document.createElement("div") as HTMLDivElement
            cheatActivated.id = "cheat_activated"
            cheatActivated.textContent = "Cheat Activated"
            val element = randomElement()
            element.appendChild(cheatActivated)
            console.log("Cheat activated")
            delay(nextInt(100, 5000).toLong())
            element.removeChild(cheatActivated)
        } catch (e: Exception) {
            console.warn(e)
        }
    }
}

@OptIn(DelicateCoroutinesApi::class)
fun main() {
    if (document.readyState == DocumentReadyState.COMPLETE) {
        GlobalScope.launch { Corrupter.start() }
    } else {
        document.addEventListener("DOMContentLoaded", { GlobalScope.launch { Corrupter.start() } })
    }
}