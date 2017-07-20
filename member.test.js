'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("Get Enum length", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.length, 3)
})

test("Get an Enum value long name", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.GREEN.longName, "Colors.GREEN")
})

test("Get an Enum index", t => {
    const Time = Enum.Time({
        SECOND: 1,
        MINUTE: 60,
        HOUR: 3600
    })
    t.is(Time.HOUR.index, 2)
})

test("Get an Enum value with its value", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.get(1).name, "GREEN")
})

test("Get an Enum value with its index", t => {
    const Time = Enum.Time({
        SECOND: 1,
        MINUTE: 60,
        HOUR: 3600
    })
    t.is(Time.getAt(2).name, "HOUR")
})

test("Enum value to int", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(+Colors.BLUE, 2)
    t.is(Colors.BLUE.value, 2)
})

test("Stringify Enum value", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.RED.toString(), "Colors.RED(0)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(1)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(2)")
})