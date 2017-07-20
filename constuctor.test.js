'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("Create a new Enum", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(!!Colors, true)
    t.is(Object.keys(Colors).length, 3)
    t.is(Colors.RED == "RED", true)
    t.is(+Colors.RED == 0, true)
    t.is(Colors.GREEN == "GREEN", true)
    t.is(+Colors.GREEN == 1, true)
    t.is(Colors.BLUE == "BLUE", true)
    t.is(+Colors.BLUE == 2, true)
})

test("Enum values with special values", t => {
    const Time = Enum.Time({
        SECOND: 1,
        MINUTE: 60,
        HOUR: 3600
    })
    t.is(!!Time, true)
    t.is(Time.SECOND == "SECOND", true)
    t.is(+Time.SECOND == 1, true)
    t.is(Time.MINUTE == "MINUTE", true)
    t.is(+Time.MINUTE == 60, true)
    t.is(Time.HOUR == "HOUR", true)
    t.is(+Time.HOUR == 3600, true)
})

test("Weird test", t => {
    const Colors = Enum.Colors({
        RED: "#FF0000",
        GREEN: "#00FF00",
        BLUE: "#0000FF"
    })
    t.is(!!Colors, true)
    t.is(Colors.RED == "RED", true)
    t.is(Colors.RED.value == "#FF0000", true)
    t.is(Colors.GREEN == "GREEN", true)
    t.is(Colors.GREEN.value == "#00FF00", true)
    t.is(Colors.BLUE == "BLUE", true)
    t.is(Colors.BLUE.value == "#0000FF", true)
    t.is(Colors.BLUE.toString(), "Colors.BLUE(#0000FF)")
    t.is(Colors.get("#00FF00").longName, "Colors.GREEN")
})
