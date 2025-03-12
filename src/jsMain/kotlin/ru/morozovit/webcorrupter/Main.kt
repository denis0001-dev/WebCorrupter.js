package ru.morozovit.webcorrupter

import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.*
import kotlinx.dom.addClass
import org.w3c.dom.*
import ru.morozovit.util.addEventListener
import ru.morozovit.util.generateHexString
import ru.morozovit.util.getBrowserName
import ru.morozovit.util.nextHexColor
import kotlin.random.Random.Default.nextInt
import kotlin.random.Random.Default.nextLong

object Virus {
    private var speedFactor = 1.0
    private const val SPEED_INCREASE_RATE = 0.008
    private const val MAX_SPEED_FACTOR = 10.0
    private val max: Int get() {
        val elementCount = document.documentElement!!.querySelectorAll("*").length
        return (elementCount / 20).coerceAtLeast(10)
    }
    private lateinit var prevPage: String
    private var isActive = true

    fun stop() {
        isActive = false // Set the flag to false to stop the virus
    }

    private suspend inline fun randomDelay(mul: Float = 1f) {
        delay((getAdjustedDelay(nextLong(50, 1000)) * mul).toLong())
        updateSpeedFactor()
        console.log("Speed factor: ", speedFactor)
    }

    private fun updateSpeedFactor() {
        speedFactor = (speedFactor + SPEED_INCREASE_RATE).coerceAtMost(MAX_SPEED_FACTOR)
    }

    private fun getAdjustedDelay(delay: Long): Long {
        return (delay / speedFactor).toLong().coerceAtLeast(10)
    }

    private fun randomNumberOfTimes() = nextInt(10, max)

    object Payloads {
        suspend fun messUpElements() {
            console.log("Messing up elements...")
            val numberOfTimes = randomNumberOfTimes()
            console.log("Number of times: ", numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    randomElement(true).appendChild(randomElement(true))
                } catch (_: Exception) {}
                delay(nextInt(100, 500).toLong())
            }
        }

        suspend fun addRandomText() {
            console.log("Adding random text...")
            val numberOfTimes = randomNumberOfTimes()
            console.log("Number of times: ", numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    randomElement().textContent += "error"
                } catch (_: Exception) {}
                randomDelay()
            }
        }

        suspend fun addRandomStyles() {
            console.log("Adding random styles...")
            val numberOfTimes = randomNumberOfTimes()
            console.log(numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    val element = randomElement() as HTMLElement
                    when (nextInt(0, 2)) {
                        0 -> element.style.color = nextHexColor()
                        1 -> element.style.backgroundColor = nextHexColor()
                        2 -> element.style.transform = "blur(${nextInt(1, 100)}px)"
                    }
                } catch (_: Exception) {}
                randomDelay()
            }
        }

        @Suppress("RedundantSuspendModifier")
        suspend fun showHead() {
            document.head?.addClass("show")
        }

        suspend fun randomScroll() {
            while (true) {
                window.scrollTo(0.0, nextInt(0, window.innerHeight).toDouble())
                delay(nextInt(100, 10000).toLong())
            }
        }

        suspend fun invertColors() {
            console.log("Inverting colors...")
            val numberOfTimes = randomNumberOfTimes()
            console.log(numberOfTimes)
            repeat(numberOfTimes) {
                try {
                    val element = randomElement() as HTMLElement
                    element.style.filter = "invert(100%)"
                } catch (_: Exception) {}
                randomDelay()
            }
        }

        suspend fun shakeElements() {
            console.log("Shaking elements...")
            val numberOfTimes = randomNumberOfTimes()
            repeat(numberOfTimes) {
                try {
                    val element = randomElement() as HTMLElement
                    element.style.animation = "shake 0.5s"
                    element.style.animationIterationCount = "infinite"
                } catch (_: Exception) {}
                randomDelay()
            }
        }

        suspend fun rotateElements() {
            console.log("Rotating elements...")
            val numberOfTimes = randomNumberOfTimes()
            repeat(numberOfTimes) {
                try {
                    val element = randomElement() as HTMLElement
                    element.style.transform = "rotate(${nextInt(0, 360)}deg)"
                } catch (_: Exception) {}
                randomDelay()
            }
        }

        suspend fun showBSOD() {
            console.log("Showing BSOD...")
            val browserName = getBrowserName()
            val randomHexNumbers = List(5) { generateHexString(8) }
            document.documentElement!!.innerHTML = """
                |<head>
                |</head>
                |<body>
                |<pre id="bsod">
                |A problem has been detected and $browserName has been shut down to prevent damage 
                |to your computer.
                |    
                |BUGCODE_USB_DRIVE
                |    
                |If this is the first time you've seen this Stop error screen, 
                |restart your computer. If this screen appears again, follow these steps:
                |
                |Throw your computer out of the window, go outside, touch grass, and the problem
                |will fix itself.
                |
                |If problems continue, you have nothing to do. Just throw it out of the window.
                |
                |Technical Information:
                |
                |*** STOP: ${randomHexNumbers[0]} (${randomHexNumbers[1]}, ${randomHexNumbers[2]}, ${randomHexNumbers[3]}, ${randomHexNumbers[4]})
                |</pre>
                |</body>
                """.trimMargin()
            runCatching {
                document.documentElement!!.requestFullscreen()
            }
            loadStyle()
            stop()
            throw RuntimeException("Showed BSOD")
        }
    }

    private fun randomElement(fromBody: Boolean = false): Element {
        val elements = if (fromBody) {
            document.querySelectorAll("body *")
        } else {
            document.querySelectorAll("*")
        }
        return elements[nextInt(0, elements.length)] as Element
    }

    @OptIn(DelicateCoroutinesApi::class)
    fun start() {
        GlobalScope.launch {
            while (true) {
                try {
                    run()
                    break
                } catch (e: Exception) {
                    console.error(e)
                    Payloads.showBSOD()
                }
            }
        }
    }

    @OptIn(DelicateCoroutinesApi::class)
    suspend fun run() {
        loadStyle()
        showCheatActivated()
        prevPage = document.documentElement!!.innerHTML
        GlobalScope.launch { restorePage() }
        val payloads = listOf(
            Payloads::messUpElements,
            Payloads::addRandomText,
            Payloads::addRandomStyles,
            Payloads::invertColors,
            Payloads::shakeElements,
            Payloads::rotateElements,
            Payloads::showHead
        ).shuffled()

        for (payload in payloads) {
            if (isActive) { // Check the flag before executing each payload
                payload()
            } else {
                break // Stop executing payloads if the virus is not active
            }
        }

        if (nextInt(0, 1) == 1) {
            Payloads.showHead()
        }
        if (nextInt(0, 1) == 1) {
            GlobalScope.launch { Payloads.randomScroll() }
        }

        // Show BSOD at the end
        Payloads.showBSOD()
    }

    private suspend fun loadStyle() {
        val style = window.fetch("https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/dist/style.css").await()
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

    private suspend fun restorePage() {
        while (true) {
            randomDelay(6f)
            console.log("Restoring page...")
            if (!isActive) break
            document.documentElement!!.innerHTML = prevPage
        }
    }
}

fun main() {
    if (document.readyState == DocumentReadyState.COMPLETE) {
        Virus.start()
    } else {
        document.addEventListener("DOMContentLoaded") {
            Virus.start()
        }
    }
}
