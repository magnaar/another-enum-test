'use strict'

import test from "ava"
import { Enum } from "../another-enum"

test("JSON.stringify EnumValue", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(JSON.stringify(Colors.RED), '"Colors.RED"')
    t.is(JSON.stringify({ color: Colors.RED }), '{"color":"Colors.RED"}')
})

test("JSON.parse EnumValue", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.parse('Colors.RED'), Colors.RED)
    t.is(Colors.parse('"Colors.RED"'), Colors.RED)
})

test("JSON.stringify/parse EnumValue", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    t.is(Colors.parse(JSON.stringify(Colors.RED)), Colors.RED)
    t.is(Colors.parse(JSON.stringify(Colors.GREEN)), Colors.GREEN)
    t.is(Colors.parse(JSON.stringify(Colors.BLUE)), Colors.BLUE)
})

test("JSON.stringify Enum", t => {
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    const DecColors = Enum.DecColors(10, {"RED":0xFF0000, "GREEN":0x00FF00, "BLUE":0x0000FF})
    const HexaColors = Enum.HexaColors(16, {"RED":0xFF0000, "GREEN":0x00FF00, "BLUE":0x0000FF})
    const BinColors = Enum.BinColors(2, {"RED":"100", "GREEN":"010", "BLUE":"001"})
    const CssColors = Enum.CssColors({RED: '#FF0000', GREEN: '#00FF00', BLUE: '#0000FF'})
    t.is(JSON.stringify(Colors), '{"Colors":{"values":["RED","GREEN","BLUE"]}}')
    t.is(JSON.stringify(DecColors), '{"DecColors":{"base":10,"values":{"RED":"16711680","GREEN":"65280","BLUE":"255"}}}')
    t.is(JSON.stringify(HexaColors), '{"HexaColors":{"base":16,"values":{"RED":"FF0000","GREEN":"00FF00","BLUE":"0000FF"}}}')
    t.is(JSON.stringify(BinColors), '{"BinColors":{"base":2,"values":{"RED":"100","GREEN":"010","BLUE":"001"}}}')
    t.is(JSON.stringify(CssColors), '{"CssColors":{"values":{"RED":"#FF0000","GREEN":"#00FF00","BLUE":"#0000FF"}}}')

    t.is(JSON.stringify({colors: Colors}), '{"colors":{"Colors":{"values":["RED","GREEN","BLUE"]}}}')
})

test("JSON.parse Enum", t => {
    t.plan(75)
    const tests = {
        Colors: {
            enumParsed: Enum.parse('{"Colors":{"values":["RED","GREEN","BLUE"]}}'),
            testValues: {"RED":[0, "0"], "GREEN": [1, "1"], "BLUE": [2, "2"]}
        },
        DecColors: {
            enumParsed: Enum.parse('{"DecColors":{"base":10,"values":{"RED":"16711680","GREEN":"65280","BLUE":"255"}}}'),
            testValues: {"RED":[0xFF0000, "16711680"], "GREEN": [0x00FF00, "65280"], "BLUE": [0x0000FF, "255"]}
        },
        HexaColors: {
            enumParsed: Enum.parse('{"HexaColors":{"base":16,"values":{"RED":"FF0000","GREEN":"00FF00","BLUE":"0000FF"}}}'),
            testValues: {"RED":[0xFF0000, "FF0000"], "GREEN": [0x00FF00, "00FF00"], "BLUE": [0x0000FF, "0000FF"]}
        },
        BinColors: {
            enumParsed: Enum.parse('{"BinColors":{"base":2,"values":{"RED":"100","GREEN":"010","BLUE":"001"}}}'),
            testValues: {"RED":[4, "100"], "GREEN": [2, "010"], "BLUE": [1, "001"]}
        },
        CssColors: {
            enumParsed: Enum.parse('{"CssColors":{"values":{"RED":"#FF0000","GREEN":"#00FF00","BLUE":"#0000FF"}}}'),
            testValues: {"RED":["#FF0000", "#FF0000"], "GREEN": ["#00FF00", "#00FF00"], "BLUE": ["#0000FF", "#0000FF"]}
        }
    }
    for (const name of Object.keys(tests))
    {
        const { enumParsed, testValues } = tests[name]
        const keys = Object.keys(testValues)
        for (let i = 0; i < keys.length; ++i)
        {
            const key = keys[i]
            t.is(enumParsed[key].name, key, `${name}.name`)
            t.is(enumParsed[key].longName, name + "." + key, `${name}.longName`)
            t.is(enumParsed[key].index, i, `${name}.index`)
            t.is(enumParsed[key].value, testValues[key][0], `${name}.value`)
            t.is(enumParsed[key].stringValue, testValues[key][1], `${name}.stringValue`)
        }
    }
})

test("JSON stringify/parse Enum", t => {
    t.plan(75)
    const Colors = Enum.Colors("RED", "GREEN", "BLUE")
    const DecColors = Enum.DecColors(10, {"RED":0xFF0000, "GREEN":0x00FF00, "BLUE":0x0000FF})
    const HexaColors = Enum.HexaColors(16, {"RED":0xFF0000, "GREEN":0x00FF00, "BLUE":0x0000FF})
    const BinColors = Enum.BinColors(2, {"RED":"100", "GREEN":"010", "BLUE":"001"})
    const CssColors = Enum.CssColors({RED: '#FF0000', GREEN: '#00FF00', BLUE: '#0000FF'})
    const tests = {
        Colors: {
            enumParsed: Enum.parse(JSON.stringify(Colors)),
            testValues: {"RED":[0, "0"], "GREEN": [1, "1"], "BLUE": [2, "2"]}
        },
        DecColors: {
            enumParsed: Enum.parse(JSON.stringify(DecColors)),
            testValues: {"RED":[0xFF0000, "16711680"], "GREEN": [0x00FF00, "65280"], "BLUE": [0x0000FF, "255"]}
        },
        HexaColors: {
            enumParsed: Enum.parse(JSON.stringify(HexaColors)),
            testValues: {"RED":[0xFF0000, "FF0000"], "GREEN": [0x00FF00, "00FF00"], "BLUE": [0x0000FF, "0000FF"]}
        },
        BinColors: {
            enumParsed: Enum.parse(JSON.stringify(BinColors)),
            testValues: {"RED":[4, "100"], "GREEN": [2, "010"], "BLUE": [1, "001"]}
        },
        CssColors: {
            enumParsed: Enum.parse(JSON.stringify(CssColors)),
            testValues: {"RED":["#FF0000", "#FF0000"], "GREEN": ["#00FF00", "#00FF00"], "BLUE": ["#0000FF", "#0000FF"]}
        }
    }
    for (const name of Object.keys(tests))
    {
        const { enumParsed, testValues } = tests[name]
        const keys = Object.keys(testValues)
        for (let i = 0; i < keys.length; ++i)
        {
            const key = keys[i]
            t.is(enumParsed[key].name, key, `${name}.name`)
            t.is(enumParsed[key].longName, name + "." + key, `${name}.longName`)
            t.is(enumParsed[key].index, i, `${name}.index`)
            t.is(enumParsed[key].value, testValues[key][0], `${name}.value`)
            t.is(enumParsed[key].stringValue, testValues[key][1], `${name}.stringValue`)
        }
    }
})
