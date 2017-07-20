'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("Bitmask composing", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    t.is(Colors.RED | Colors.GREEN, 0xFFFF00)
})

test("Bitmask decomposing", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    t.is((0xFFFF00 & Colors.RED) === +Colors.RED, true)
})

test("Bitmask checking one component", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    t.is(Colors.RED.isIn(value), true)
    t.is(Colors.BLUE.isIn(value), false)
})

test("Bitmask checking multiple components (EnumValue)", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    t.is(Colors.hasIn(value, Colors.RED, Colors.GREEN), true)
    t.is(Colors.hasIn(value, Colors.RED, Colors.BLUE), false)
})

test("Bitmask checking multiple components (number)", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    t.is(Colors.hasIn(value, 0xFF0000, 0x00FF00), true)
})

test("Bitmask checking multiple components (string)", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    t.is(Colors.hasIn(value, "RED", "GREEN"), true)
})

test("Bitmask checking multiple components (mixed)", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    t.is(Colors.hasIn(value, Colors.RED, "GREEN"), true)
    t.is(Colors.hasIn(value, "RED", 0x0000FF), false)
    t.is(Colors.hasIn(value, Colors.RED, 0x0000FF), false)
})

test("Bitmask getting components", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    const value = 0xFFFF00
    const expected = [Colors.RED, Colors.GREEN]
    t.plan(2)
    for (const color of Colors.in(value))
    {
        t.is(expected.includes(color), true)
        delete expected[color]
    }
})
