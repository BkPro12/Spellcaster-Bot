"""

List key:

hp

fire immunity

ice immunity

paralysed

"""
"""

Gesture Code:

F=1

P=2

S=3

W=4

D=5

C=6

"""
"""

This is not a waste of time :)

-Me

(Motivational quote)

"""
"""

Spells:

C-D-P-W          Dispel magic

C-S-W-W-S        Summon elemental     

C-(w             Magic mirror  

D-F-P-W          Cure heavy wounds   

D-F-W            Cure light wounds  

D-F-F-D-D        Lightning bolt     

F-F-F            Paralysis  

F-P-S-F-W        Summon troll     

F-S-S-D-D        Fireball    

P                Shield         

P-D-W-P          Remove enchantment   

P-S-D-D          Charm monster (Brainwash)

P-W-P-F-S-S-S-D    Finger of death

S-D             Missile

S-F-W           Summon goblin

S-P-F           Anti-spell

S-S-F-P         Resist cold

S-W-W-C         Firestorm

W-F-P           Cause light wounds

W-P-F-D         Cause heavy wounds

W-P-P           Counter-spell

W-S-S-C         Ice storm

W-W-F-P         Resist heat

"""
def Spell_Check():
    global Spellchecker
    basic.clear_screen()
    index = 0
    while index <= len(Player_History_1):
        Spellchecker = "" + str(Player_History_1[index]) + Spellchecker
        index2 = 0
        while index2 <= len(Spellbook):
            if Spellbook[index2] == Spellchecker:
                Translator()
                basic.show_string("Use " + TEXT + "?")
                while True:
                    if input.button_is_pressed(Button.A):
                        pass
                    if input.button_is_pressed(Button.B):
                        break
            index2 += 1
        index += 1
def Player_Choose_Move():
    global index6
    index6 = 0
    basic.show_string("L")
    basic.pause(500)
    while True:
        if input.button_is_pressed(Button.A):
            if index6 < 6:
                index6 += 1
            else:
                index6 = 0
            basic.clear_screen()
            basic.pause(100)
        if input.button_is_pressed(Button.B):
            Player_History_1.unshift(index6 + 1)
            break
        if index6 == 0:
            basic.show_string("F")
        elif index6 == 1:
            basic.show_string("P")
        elif index6 == 2:
            basic.show_string("S")
        elif index6 == 3:
            basic.show_string("W")
        elif index6 == 4:
            basic.show_string("D")
        elif index6 == 5:
            basic.show_string("C")
    index6 = 0
    basic.show_string("R")
    basic.pause(500)
    while True:
        if input.button_is_pressed(Button.A):
            if index6 < 6:
                index6 += 1
            else:
                index6 = 0
            basic.clear_screen()
            basic.pause(100)
        if input.button_is_pressed(Button.B):
            Player_History_2.unshift(index6 + 1)
            break
        if index6 == 0:
            basic.show_string("F")
        elif index6 == 1:
            basic.show_string("P")
        elif index6 == 2:
            basic.show_string("S")
        elif index6 == 3:
            basic.show_string("W")
        elif index6 == 4:
            basic.show_string("D")
        elif index6 == 5:
            basic.show_string("C")
    Spell_Check()
def Show_Display():
    led.plot_brightness(1, 2, 230)
    led.plot_brightness(3, 2, 230)
    for index3 in range(5):
        if Player[0] >= (index3 + 1) * 3:
            led.plot_brightness(index3, 4, 255)
        elif Player[0] >= (index3 + 1) * 3 - 1:
            led.plot_brightness(index3, 4, 181)
        elif Player[0] >= (index3 + 1) * 3 - 2:
            led.plot_brightness(index3, 4, 99)
        else:
            led.plot_brightness(index3, 4, 0)
    # plot bot hp
    for index4 in range(5):
        if Player[0] >= (index4 + 1) * 3:
            led.plot_brightness(index4, 0, 255)
        elif Player[0] >= (index4 + 1) * 3 - 1:
            led.plot_brightness(index4, 0, 181)
        elif Player[0] >= (index4 + 1) * 3 - 2:
            led.plot_brightness(index4, 0, 99)
        else:
            led.plot_brightness(index4, 0, 0)
    # Plot Player hp
    while not (input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B)):
        pass
    Player_Choose_Move()
def Translator():
    global TEXT
    TEXT = ""
    index5 = 0
    while index5 <= len(Spellchecker):
        if Spellchecker == "6524":
            TEXT = "Dispel Magic"
        elif Spellchecker == "63443":
            TEXT = "Summon Elemental"
        elif Spellchecker == "64":
            TEXT = "Magic Mirror"
        elif Spellchecker == "5124":
            TEXT = "Cure heavy wounds"
        elif Spellchecker == "514":
            TEXT = "Cure light wounds"
        elif Spellchecker == "51155":
            TEXT = "Lightning"
        elif Spellchecker == "111":
            TEXT = "Paralyze"
        elif Spellchecker == "12314":
            TEXT = "Summon Troll"
        elif Spellchecker == "13355":
            TEXT = "Fireball"
        elif Spellchecker == "2":
            TEXT = "Shield"
        elif Spellchecker == "2542":
            TEXT = "Remove Enchantment"
        elif Spellchecker == "2355":
            TEXT = "Brainwash monster"
        elif Spellchecker == "24213335":
            TEXT = "FINGER OF DEATH"
        elif Spellchecker == "35":
            TEXT = "Magic Missile"
        elif Spellchecker == "314":
            TEXT = "Summon Goblin"
        elif Spellchecker == "321":
            TEXT = "Anti-Spell"
        elif Spellchecker == "3312":
            TEXT = "Resist Cold"
        elif Spellchecker == "3446":
            TEXT = "Fire Storm"
        elif Spellchecker == "412":
            TEXT = "Wound"
        elif Spellchecker == "4215":
            TEXT = "Big Wound"
        elif Spellchecker == "422":
            TEXT = "Counter-Spell"
        elif Spellchecker == "4336":
            TEXT = "Ice Storm"
        elif Spellchecker == "4412":
            TEXT = "Resist Heat"
        index5 += 1
Spellchecker = ""
Player_History_2: List[number] = []
Player_History_1: List[number] = []
Spellbook: List[str] = []
Player: List[number] = []
TEXT = ""
index6 = 0
index6 = 0
TEXT = ""
Player = [15, 0, 0, 0]
Bot = [15, 0, 0, 0]
Spellbook = ["6524",
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
    "4412"]
Player_History_1 = []
Player_History_2 = []
Bot_History_1: List[number] = []
Bot_History_2: List[number] = []
Show_Display()