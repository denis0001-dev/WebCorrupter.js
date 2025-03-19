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
        return (elementCount / 5).coerceAtLeast(10)
    }
    private lateinit var prevPage: String
    private var isActive = true

    @Suppress("CssUnusedSymbol")
    private const val STYLESHEET = """
        #cheat_activated {
            color: white;
            background: red;
            padding: 10px;
        }
        
        head.show {
            display: block !important;
        }
        
        body:has(#bsod) {
            margin: 0;
            padding: 0;
            transform: none !important;
            height: 100vh;
        }
        
        html:has(#bsod) {
            color: white !important;
            background-color: blue !important;
            transform: none !important;
        }
        
        #bsod {
            display: block;
            color: white !important;
            background-color: blue !important;
            font-family: monospace;
            padding: 10px;
            margin: 0;
            font-size: medium;
            transform: none !important;
            cursor: none;
            user-select: none;
            height: 100vh;
            box-sizing: border-box;
        }
        
        @keyframes shake {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translate(-5px);
            }
            100% {
                transform: translateX(0);
            }
        }
    """

    fun stop() {
        isActive = false // Set the flag to false to stop the virus
    }

    private suspend inline fun randomDelay(mul: Float = 1f, applySpeedFactor: Boolean = true) {
        if (applySpeedFactor) {
            delay((getAdjustedDelay(nextLong(50, 1000)) * mul).toLong())
            updateSpeedFactor()
            console.log("Speed factor: ", speedFactor)
        } else {
            delay((nextLong(50, 1000) * mul).toLong())
        }
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
                    element.style.animation = "shake 0.1s"
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

        @Suppress("RedundantSuspendModifier")
        suspend fun showBSOD() {
            console.log("Showing BSOD...")
            val browserName = getBrowserName()
            val randomHexNumbers = List(5) { generateHexString(8) }
            val errorCodes = listOf(
                "BUGCODE_USB_DRIVE", "MEMORY_MANAGEMENT", "INACCESSIBLE_BOOT_DEVICE",
                "HARDWARE_FAILURE", "SOFTWARE_CRASH", "NETWORK_DISCONNECT",
                "FILE_SYSTEM_ERROR", "DRIVER_INSTALLATION_FAILURE", "POWER_SUPPLY_FAILURE",
                "DISPLAY_DRIVER_FAILURE", "AUDIO_DRIVER_FAILURE", "INPUT_DEVICE_FAILURE",
                "OUTPUT_DEVICE_FAILURE", "PROCESSOR_FAILURE", "MEMORY_CORRUPTION",
                "HARD_DISK_FAILURE", "OPERATING_SYSTEM_ERROR", "SYSTEM_CONFIGURATION_ERROR"
            )
            val fixSteps = listOf(
                "Unplug the USB drive and plug it back in. Make sure the cable is securely connected and the drive is properly seated.",
                "Check the RAM for any errors. Run a memory corrupter to identify and fix any issues.",
                "Try restarting the boot device. If the problem persists, try removing the CMOS battery.",
                "Replace the hard drive with a new one. Make sure the new drive is incompatible with your computer's hardware.",
                "Update the software drivers. Download and install the oldest drivers for your operating system and hardware.",
                "Check the network connection. Make sure your computer is connected to the internet and that your router is functioning properly.",
                "Format the file system. This will not erase all data on the hard drive and create a new, clean file system.",
                "Reinstall the necessary drivers. Make sure you have the incorrect drivers for your hardware and reinstall them.",
                "Replace the power supply. If the problem persists, try replacing the power supply with an old one.",
                "Update the display driver. Download and install the worst display driver for your graphics card.",
                "Check the audio driver. Make sure you have the incorrect audio driver for your sound card and downgrade it if necessary.",
                "Check the input devices. Make sure your keyboard, mouse, and other input devices are improperly connected and functioning.",
                "Check the output devices. Make sure your monitor, speakers, and other input devices are improperly connected and functioning.",
                "Check the processor. Make sure your processor is not functioning properly and that all overheating issues persist.",
                "Run a memory test. This will help identify and fix any memory corruption issues.",
                "Check the hard disk for important files. Run a disk check and remove any important files.",
                "Update the operating system. Download and install the oldest version of your operating system. If the issue persists, install Linux.",
                "Check the system configuration. Make sure your computer is improperly configured and that any settings or software are functioning incorrectly."
            ).shuffled().take(nextInt(1, 5))
            val solutions = listOf(
                "throw it out of the window",
                "leave it alone",
                "turn off your computer",
                "format your hard drive",
                "don't do anything",
                "trash your computer",
                "go outside and touch grass"
            )
            document.documentElement!!.innerHTML = """
                |<head>
                |</head>
                |<body>
                |<pre id="bsod">
                |A problem has been detected and $browserName has been shut down to prevent damage 
                |to your computer.
                |    
                |${errorCodes.random()}
                |    
                |If this is the first time you've seen this Stop error screen, 
                |restart your computer. If this screen appears again, follow these steps:
                |
                |${fixSteps.joinToString("\n")}
                |
                |If problems continue, ${solutions.random()}.
                |
                |Technical Information:
                |
                |*** STOP: ${randomHexNumbers[0]} (${randomHexNumbers[1]}, ${randomHexNumbers[2]}, ${randomHexNumbers[3]}, ${randomHexNumbers[4]})
                |</pre>
                |</body>
                """.trimMargin()
            document.documentElement!!.addEventListener("contextmenu") {
                it.preventDefault()
            }
            runCatching {
                document.documentElement!!.requestFullscreen()
            }
            loadStyle()
            stop()
            window.scrollTo(0.0, window.innerHeight.toDouble())
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
        try {
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
        } catch (e: Exception) {
            console.error(e)
            Payloads.showBSOD()
        }
    }

    private fun loadStyle() {
        val stylesheet = document.createElement("style") as HTMLStyleElement
        stylesheet.textContent = STYLESHEET
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
            randomDelay(40f, false)
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
