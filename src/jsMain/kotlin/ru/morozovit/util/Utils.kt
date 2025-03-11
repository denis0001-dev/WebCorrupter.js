@file:Suppress("NOTHING_TO_INLINE")
package ru.morozovit.util

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