@file:Suppress("NOTHING_TO_INLINE")
package ru.morozovit.util

import kotlinx.browser.window
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import kotlin.random.Random

inline fun EventTarget.addEventListener(type: String, crossinline listener: (Event) -> Unit) {
    addEventListener(type, { listener(it) }, null)
}

inline fun Random.nextHexColor() =
    "#" +
    (1..6)
    .map {
        "0123456789ABCDEF"[Random.nextInt(16)]
    }
    .joinToString("")

inline fun nextHexColor() = Random.nextHexColor()

fun getBrowserName(): String {
    val userAgent = window.navigator.userAgent.lowercase()
    return when {
        "firefox" in userAgent -> "Firefox"
        "chrome" in userAgent -> "Chrome"
        "safari" in userAgent -> "Safari"
        "opera" in userAgent || "opr" in userAgent -> "Opera"
        "edge" in userAgent -> "Edge"
        "trident" in userAgent || "msie" in userAgent -> "Internet Explorer"
        else -> "Unknown Browser"
    }
}

fun generateHexString(length: Int = 16): String {
    val hexChars = "0123456789abcdef"
    val result = StringBuilder("0x")

    for (i in 0 until length) {
        val randomIndex = Random.nextInt(hexChars.length)
        result.append(hexChars[randomIndex])
    }

    return result.toString()
}