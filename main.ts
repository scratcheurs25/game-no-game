let PlayerPos = [1,3]
let lvlend = [4,3]
let jump = 0
let d = 1
let lvl = 1
let numberofplank = 0
basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . # .
# # # # #
`)
basic.forever(function(){
    console.log(numberofplank)
    led.plot(PlayerPos[0],PlayerPos[1])
    if(led.point(PlayerPos[0],PlayerPos[1] + 1) == false && jump == 0 && PlayerPos[1] != 4){
MoveY(-1)
    }
    if(PlayerPos[0] == lvlend[0] && PlayerPos[1] == lvlend[1]){
        console.log("yes")
        if(lvl == 1){
            lvl = 2
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . . . .
            `)
            PlayerPos = [0,3]
            lvlend = [3,2]
        }else if(lvl == 2){
            lvl = 3
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
            # . . # #
            # # # # #
            `)
            PlayerPos = [2,3]
            lvlend = [4,1]
        }else if(lvl == 3){
            lvl = 4
            basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . # . . .
            # # # . .
            `)
            PlayerPos = [0,3]
            lvlend = [4,0]
        }else{
            basic.showString("end")
        }
    }
})

input.onButtonPressed(Button.B,function(){
    d = 1
    if(PlayerPos[0] != 4 && led.point(PlayerPos[0] + 1,PlayerPos[1]) == false){
MoveX(1)

    }

})
input.onButtonPressed(Button.A,function(){
    d = 0
    if (PlayerPos[0] != 0 && led.point(PlayerPos[0] - 1,PlayerPos[1]) == false){
MoveX(-1)
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    if(d == 1 && numberofplank > 0){
        if(led.point(PlayerPos[0]+1,PlayerPos[1]) == false){
            numberofplank -= 1
        }
        led.plot(PlayerPos[0]+1,PlayerPos[1])
    }else if(numberofplank > 0){
        if(led.point(PlayerPos[0]-1,PlayerPos[1])){
            numberofplank - 1
        }
        led.plot(PlayerPos[0]-1,PlayerPos[1])
    }
})

    input.onButtonPressed(Button.AB,function(){
   if(led.point(PlayerPos[0],PlayerPos[1] - 1) == false && led.point(PlayerPos[0],PlayerPos[1] + 1) == true){
        jump = 1
        MoveY(1)
basic.pause(500)
jump = 0
   }
    })
input.onGesture(Gesture.Shake, function() {
    if(d == 0){
        if(led.point(PlayerPos[0]-1,PlayerPos[1]) == true){
            numberofplank += 1
        }
        led.unplot(PlayerPos[0]-1,PlayerPos[1])
    }else{
        
  if(led.point(PlayerPos[0]+1,PlayerPos[1]) == true){
      numberofplank +=1
  }
  led.unplot(PlayerPos[0]+1,PlayerPos[1])
    }

})
function MoveX(x: number){
    led.unplot(PlayerPos[0],PlayerPos[1])
    PlayerPos[0] += x
}
function MoveY(y: number){
    led.unplot(PlayerPos[0],PlayerPos[1])
    PlayerPos[1] -= y
}
