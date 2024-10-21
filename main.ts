let roll = 0
basic.forever(function () {
    basic.showString("Hold A to Roll")
    if (input.buttonIsPressed(Button.A)) {
        roll = randint(1, 20)
        basic.showString(".....")
        basic.showString("You rolled a " + roll)
        basic.showString(".....")
    }
})
