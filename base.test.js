'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("Base 16 Enum values toString", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000,
        GREEN: 0x00FF00,
        BLUE: 0x0000FF
    })
    t.is(Colors.RED.toString(), "Colors.RED(16:FF0000)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(16:00FF00)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(16:0000FF)")
})

test("Base 16 string Enum values toString", t => {
    const Colors = Enum.Colors(16, {
        RED: 'FF0000',
        GREEN: '0x00FF00',
        BLUE: '0000FF'
    })
    t.is(Colors.RED.toString(), "Colors.RED(16:FF0000)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(16:00FF00)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(16:0000FF)")
})

test("Base 2 Enum values toString", t => {
    const Colors = Enum.Colors(2, {
        RED: '100',
        GREEN: '010',
        BLUE: '001'
    })
    t.is(Colors.RED.toString(), "Colors.RED(2:100)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(2:010)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(2:001)")
})

test("Base 16 Enum values toString full int", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000FF,
        GREEN: 0x00FF00FF,
        BLUE: 0x0000FFFF
    })
    t.is(Colors.RED.toString(), "Colors.RED(16:FF0000FF)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(16:00FF00FF)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(16:0000FFFF)")
})

test("Base 16 Enum values toString full int", t => {
    const Colors = Enum.Colors(16, {
        RED: 0xFF0000FF,
        GREEN: 0x00FF00FF,
        BLUE: 0x0000FFFF
    })
    t.is(Colors.RED.toString(), "Colors.RED(16:FF0000FF)")
    t.is(Colors.GREEN.toString(), "Colors.GREEN(16:00FF00FF)")
    t.is(Colors.BLUE.toString(), "Colors.BLUE(16:0000FFFF)")
})
