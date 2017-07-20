'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("Check Enum string values", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.RED == "RED", true)
    t.is(Colors.GREEN == "GREEN", true)
    t.is(Colors.BLUE == "BLUE", true)
})

test("Check Enum number values", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(+Colors.RED == 0, true)
    t.is(+Colors.GREEN == 1, true)
    t.is(+Colors.BLUE == 2, true)
})

test("List all Enum values (of)", t => {
    t.plan(3)
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    const colors = { "RED": 0, "GREEN": 1, "BLUE": 3 }
    for (const color of Colors)
    {
        t.is(colors[color] !== undefined, true)
        delete colors[color]
    }
})

test("List all Enum values (in)", t => {
    t.plan(3)
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    const colors = { "RED": 0, "GREEN": 1, "BLUE": 3 }
    for (const color in Colors)
    {
        t.is(colors[color] !== undefined, true)
        delete colors[color]
    }
})

test("Get an Enum value", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(!!Colors.BLUE, true)
    t.is(!!Colors.RED, true)
})

test("Two Enum values from different Enums are differents", t => {
    const Colors1 = Enum.Colors("RED", "GREEN", "BLUE")
    const Colors2 = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors1.RED == Colors2.RED, false)
})

test("Two Enum values from the same Enum are equals", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.GREEN === Colors.GREEN, true)
})

test("Switch case", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.plan(3)
    let i = 0
    for (const color of Colors)
        switch (color)
        {
            case Colors.RED:
                t.is(i++, 0)
                break
            case Colors.GREEN:
                t.is(i++, 1)
                break
            case Colors.BLUE:
                t.is(i++, 2)
                break
            default:
                t.fail()
        }
})
