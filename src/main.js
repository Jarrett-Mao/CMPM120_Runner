/*
BIG BUG RUN
Rishi Prasanna, Jarrett Mao, Felix Tham - Group B4

This game was our first undertaking of such scale in Phaser.js, and all of us took a very long time to learn Phaser. But in the end we got a game that we are pretty proud of.

Firstly, we are very happy about the result of the art direction. The backgrounds were created with lots of hard work in Photoshop--I had to learn more about the brushes in Photoshop in order to find the grass brush, and even import a custom grass brush to make the grass feel like...grass.
Rishi drew every single frame of the ant's animation--applying the run cycle he had learned from CMPM 26. He made the ant look as buglike as possible, not trying to anthropomorphize the ant, even though it runs its two hind legs. The music and sounds were also composed by Rishi using a little bit of FL Studio 20. We wanted to create an art style similar to Red Bugs Puzzle on Miniclip--a puzzle game which is unrelated to this endless runner requirement.

Technically, this was our first dabble into Arcade Physics. There were many challenges--such as the ant's jump mechanic, modifying it to make it a double jump, getting the animations for the ant to trigger properly, etc.
For the jump mechanic, we ended up switching our entire program to arcade physics. We experimented quite a bit with the jump mechanic until we finally got the double jump we wanted, by adjusting the vertical velocity of the ant sprite and triggering a jumping animation when the user clicks space.
There was also another issue that cost a lot of time--the fruit collectibles were slowing down the ant when the ant touched it from the side, causing the ant to go off screen to the left. Even the TA didn't know what it was, until the instructor suggested to change our:

this.physics.add.collider(this.antP1, this.fruitGroup, null, this.touchedFruit, this);

--to:

this.physics.add.overlap(this.antP1, this.fruitGroup, null, this.touchedFruit, this);

We had to spend a lot of time outside of class to figure out how the intricacies of certain arcade physics methods worked. To highlight one example, we tried to find a getter for velocity for the ant, but unfortunately there's only a setVelocity(), and not a getVelocity(). Oh, dear.
Also, the jump mechanic for the ant adds a sort of greed element to the game. You can't possibly get all the fruits--certain fruits are actually positioned as traps that will cause you to fall off the stage or onto a spider if you go for them!!

To get to the instructions, there is a question mark box at the top left of the Menu screen. If you ever need to restart from the beginning, there is a pause menu in the Play screen. Enjoy!
*/

let config = {
    type: Phaser.CANVAS,
    width: 780,
    height: 440,
    scene: [Intro, Menu, Instructions, Play, Pause, GameOver], // Real version of game
    // scene: [Instructions], // Debug
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keySPACE;

var score = 0;
var highScore = 0;
var distance = 0;
var beatHighScore = false;
var loadedMusic = false;