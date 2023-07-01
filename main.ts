/**
 * List key:
 * 
 * hp
 * 
 * fire immunity
 * 
 * ice immunity
 * 
 * paralysed
 */
/**
 * Gesture Code:
 * 
 * F=1
 * 
 * P=2
 * 
 * S=3
 * 
 * W=4
 * 
 * D=5
 * 
 * C=6
 */
/**
 * This is not a waste of time :)
 * 
 * -Me
 * 
 * (Motivational quote)
 */
/**
 * Spells:
 * 
 * C-D-P-W          Dispel magic
 * 
 * C-S-W-W-S        Summon elemental     
 * 
 * C-(w             Magic mirror  
 * 
 * D-F-P-W          Cure heavy wounds   
 * 
 * D-F-W            Cure light wounds  
 * 
 * D-F-F-D-D        Lightning bolt     
 * 
 * F-F-F            Paralysis  
 * 
 * F-P-S-F-W        Summon troll     
 * 
 * F-S-S-D-D        Fireball    
 * 
 * P                Shield         
 * 
 * P-D-W-P          Remove enchantment   
 * 
 * P-S-D-D          Charm monster (Brainwash)
 * 
 * P-W-P-F-S-S-S-D    Finger of death
 * 
 *    S-D             Missile
 * 
 *  S-F-W           Summon goblin
 * 
 * S-P-F           Anti-spell
 * 
 *  S-S-F-P         Resist cold
 * 
 *  S-W-W-C         Firestorm
 * 
 *  W-F-P           Cause light wounds
 * 
 * W-P-F-D         Cause heavy wounds
 * 
 *  W-P-P           Counter-spell
 * 
 *  W-S-S-C         Ice storm
 * 
 * W-W-F-P         Resist heat
 */
function Spell_Check (Left_hand_array: string, Right_hand_array: string) {
    basic.clearScreen()
    for (let index = 0; index <= Left_hand_array.length; index++) {
        Spellchecker = "" + Left_hand_array[index] + Spellchecker
        for (let index = 0; index <= Spellbook.length; index++) {
            if (Spellbook[index] == Spellchecker) {
                Translator()
                if (Left_hand_array == "Player History 1" && Right_hand_array == "Player History 2") {
                    basic.showString("Use " + TEXT + "?")
                    while (true) {
                        basic.showString("?")
                        if (input.buttonIsPressed(Button.A)) {
                        	
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            break;
                        }
                    }
                }
            }
        }
    }
    for (let index = 0; index <= Player_History_2.length; index++) {
        Spellchecker = "" + Player_History_1[index] + Spellchecker
        for (let index = 0; index <= Spellbook.length; index++) {
            if (Spellbook[index] == Spellchecker) {
                Translator()
                if (Left_hand_array == "Player History 1" && Right_hand_array == "Player History 2") {
                    basic.showString("Use " + TEXT + "?")
                    while (true) {
                        basic.showString("?")
                        if (input.buttonIsPressed(Button.A)) {
                        	
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            break;
                        }
                    }
                }
            }
        }
    }
}
function Player_Choose_Move () {
    let list: number[] = []
    index = 0
    basic.showString("L")
    basic.pause(500)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (index < 6) {
                index += 1
            } else {
                index = 0
            }
            basic.clearScreen()
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            Player_History_1.unshift(index + 1)
            break;
        }
        if (index == 0) {
            basic.showString("F")
        } else if (index == 1) {
            basic.showString("P")
        } else if (index == 2) {
            basic.showString("S")
        } else if (index == 3) {
            basic.showString("W")
        } else if (index == 4) {
            basic.showString("D")
        } else if (index == 5) {
            basic.showString("C")
        }
    }
    index = 0
    basic.showString("R")
    basic.pause(500)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            if (index < 6) {
                index += 1
            } else {
                index = 0
            }
            basic.clearScreen()
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            Player_History_2.unshift(index + 1)
            break;
        }
        if (index == 0) {
            basic.showString("F")
        } else if (index == 1) {
            basic.showString("P")
        } else if (index == 2) {
            basic.showString("S")
        } else if (index == 3) {
            basic.showString("W")
        } else if (index == 4) {
            basic.showString("D")
        } else if (index == 5) {
            basic.showString("C")
        }
    }
    Spell_Check(list, list)
}
function Show_Display () {
    led.plotBrightness(1, 2, 230)
    led.plotBrightness(3, 2, 230)
    for (let index = 0; index <= 4; index++) {
        if (Player[0] >= (index + 1) * 3) {
            led.plotBrightness(index, 4, 255)
        } else if (Player[0] >= (index + 1) * 3 - 1) {
            led.plotBrightness(index, 4, 181)
        } else if (Player[0] >= (index + 1) * 3 - 2) {
            led.plotBrightness(index, 4, 99)
        } else {
            led.plotBrightness(index, 4, 0)
        }
    }
    // plot bot hp
    for (let index = 0; index <= 4; index++) {
        if (Player[0] >= (index + 1) * 3) {
            led.plotBrightness(index, 0, 255)
        } else if (Player[0] >= (index + 1) * 3 - 1) {
            led.plotBrightness(index, 0, 181)
        } else if (Player[0] >= (index + 1) * 3 - 2) {
            led.plotBrightness(index, 0, 99)
        } else {
            led.plotBrightness(index, 0, 0)
        }
    }
    // Plot Player hp
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    	
    }
    Player_Choose_Move()
}
function Translator () {
    TEXT = ""
    for (let index = 0; index <= Spellchecker.length; index++) {
        if (Spellchecker == "6524") {
            TEXT = "Dispel Magic"
        } else if (Spellchecker == "63443") {
            TEXT = "Summon Elemental"
        } else if (Spellchecker == "64") {
            TEXT = "Magic Mirror"
        } else if (Spellchecker == "5124") {
            TEXT = "Cure heavy wounds"
        } else if (Spellchecker == "514") {
            TEXT = "Cure light wounds"
        } else if (Spellchecker == "51155") {
            TEXT = "Lightning"
        } else if (Spellchecker == "111") {
            TEXT = "Paralyze"
        } else if (Spellchecker == "12314") {
            TEXT = "Summon Troll"
        } else if (Spellchecker == "13355") {
            TEXT = "Fireball"
        } else if (Spellchecker == "2") {
            TEXT = "Shield"
        } else if (Spellchecker == "2542") {
            TEXT = "Remove Enchantment"
        } else if (Spellchecker == "2355") {
            TEXT = "Brainwash monster"
        } else if (Spellchecker == "24213335") {
            TEXT = "FINGER OF DEATH"
        } else if (Spellchecker == "35") {
            TEXT = "Magic Missile"
        } else if (Spellchecker == "314") {
            TEXT = "Summon Goblin"
        } else if (Spellchecker == "321") {
            TEXT = "Anti-Spell"
        } else if (Spellchecker == "3312") {
            TEXT = "Resist Cold"
        } else if (Spellchecker == "3446") {
            TEXT = "Fire Storm"
        } else if (Spellchecker == "412") {
            TEXT = "Wound"
        } else if (Spellchecker == "4215") {
            TEXT = "Big Wound"
        } else if (Spellchecker == "422") {
            TEXT = "Counter-Spell"
        } else if (Spellchecker == "4336") {
            TEXT = "Ice Storm"
        } else if (Spellchecker == "4412") {
            TEXT = "Resist Heat"
        }
    }
}
let Spellchecker = ""
let Player_History_2: number[] = []
let Player_History_1: number[] = []
let Spellbook: string[] = []
let Player: number[] = []
let TEXT = ""
let index = 0
index = 0
TEXT = ""
Player = [
15,
0,
0,
0
]
let Bot = [
15,
0,
0,
0
]
Spellbook = [
"6524",
"63443",
"64",
"5124",
"514",
"51155",
"111",
"12314",
"13355",
"2",
"2542",
"2355",
"24213335",
"35",
"314",
"321",
"3312",
"3446",
"412",
"4215",
"422",
"4336",
"4412"
]
Player_History_1 = []
Player_History_2 = []
let Bot_History_1: number[] = []
let Bot_History_2: number[] = []
Show_Display()
