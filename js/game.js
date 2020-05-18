const x = null;
const level2 = {
    name: "My first level",
    layout: "horizontal",
    music: "strings.wav",
    collectible: "note",
    tempo: 120,
    notes: [
        // INTRO
        2, 1, 1, x, 2, 1, 1, x,
        2, 1, 1, x, 2, 1, 1, x,
        2, 1, 1, x, 2, 1, 1, x,
        2, 1, 1, x, 2, 1, 1, x,
        // VERSE
        2, x, 2, x, 1, 1, 1, 1,
        2, x, 2, x, 1, 1, 1, 1,
        // INTRO
        2, 1, 1, x, 2, 1, 1, x,
        2, 1, 1, x, 2, 1, 1, x,
        // CHORUS
        2, 2, x, 2, 2, 2, x, 2,
        2, 2, x, 2, 2, 2, x, //
        // INTRO
        2, 1, 1, x, 2, 1, 1, x,
        2, 1, 1, x, 2, 1, 1, x,
    ]
}

const level = {
    name: "Happy Arcade",
    layout: "horizontal",
    music: "happy-arcade.mp3",
    collectible: "note",
    tempo: 180,
    notes: [
        // INTRO
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 1, x, 2, x, 1, x, 2,
        x, 1, x, 2, x, 1, x, 2,
        x, 1, x, 2, x, 1, x, 2,
        x, 1, x, 2, x, 1, x, 2,
        // BREAK
        x, x, x, x, x, x, x, x,
        x, 1, x, 1, x, 2, 2, 2,
        // VERSE
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        x, 2, x, 2, x, 2, x, 2,
        // NEXT BIT
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        x, 2, 1, 2, x, 2, 1, 2,
        // ANOTHER BIT
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        x, 2, x, 2, x, 2, x, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        // BREAK
        x, x, x, x, x, x, x, x,
        x, x, x, x, x, x, x, x,
        x, x, x, x, x, x, x, x,
        x, x, x, x, x, x, x, x,
        x, 1, x, 1, x, 1, x, 1,
        x, 1, x, 1, x, 1, x, 1,
        x, 1, x, 1, x, 1, x, 1,
        x, 1, x, 1, x, 1, x, 1,
        // LAST BIT
        1, 1, 2, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 1, 2, 1, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2,
    ]
}

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const ZONE_Y = CANVAS_HEIGHT * 0.785;
const ZONE_X = CANVAS_WIDTH / 2;
const NOTE_START = -64;
const TARGET = ZONE_Y;
const LEEWAY = 32;
const LAGCOMP = 0;

var config = {
    type: Phaser.AUTO,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    // pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {}
    },
    scene: {
        preload,
        create,
        update,
    }
};

var game = new Phaser.Game(config);

var bpm = level.tempo,
    score = 0,
    scoreText,
    streak = 0,
    streakText,
    multiplier = 1,
    circle;

// TODO: calculate bpm using fft
const INTERVAL = 60000 / bpm;
const COUNT = 4;
const SPEED = INTERVAL * COUNT;

function preload() {
    this.load.audio("music", `assets/music/${level.music}`);

    this.load.audio("whoosh", "assets/sounds/whoosh.wav");
    this.load.audio("streak-1", "assets/sounds/streak-1.mp3");
    this.load.audio("streak-3", "assets/sounds/streak-3.mp3");
    this.load.audio("miss", "assets/sounds/miss.mp3");
    this.load.audio("coin", "assets/sounds/coin.mp3");

    this.load.image('background', 'assets/resize-underwater.jpg');

    this.load.image('note', 'assets/orb_green.png');
    this.load.image('note2', 'assets/orb_purple.png');
}

function create() {
    this.add.image(400, 300, 'background');

    // Audio track setup
    this.song = this.sound.add("music");

    // Scoring
    score = 0;
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFF' });
    streakText = this.add.text(16, 50, 'streak: 0', { fontSize: '32px', fill: '#FFF' });

    // Show scoring zone
    this.graphics = this.add.graphics({ lineStyle: { width: 3, stroke: '#FFF' } });
    circle = new Phaser.Geom.Circle(ZONE_X, ZONE_Y, 20);
    this.graphics.strokeCircleShape(circle);

    // Create notes array
    this.notes = this.add.group()
    const nextNotes = [];

    for (var i = 0; i < level.notes.length; i++) {
        let note = null;

        // TODO: Make this scalable
        if (level.notes[i]) {
            if (level.notes[i] === 1) {
                note = this.notes.create(ZONE_X, NOTE_START, 'note');
            } else {
                note = this.notes.create(ZONE_X, NOTE_START, 'note2');
            }
        }

        nextNotes.push(note)
    }

    // The game loop
    this.step = 0;
    this.time.addEvent({
        delay: INTERVAL,
        repeat: -1,
        paused: false,
        callback: function () {

            if (this.step === COUNT) {
                // Play that funky music white boy
                this.song.play('', {  });
            }

            const note = nextNotes[this.step]

            if (note) {
                note.destination = TARGET;

                note.enterTween = this.tweens.add({
                    targets: note,
                    y: note.destination,
                    // scaleX: 1,
                    // scaleY: 1,
                    duration: SPEED,
                    ease: 'Linear',
                    onComplete: function (tween, target) {
                        // Do something
                    },
                    onCompleteScope: this,
                });

                note.exitTween = this.tweens.add({
                    targets: note,
                    // scaleX: 2,
                    // scaleY: 2,
                    y: '+=' + (note.destination - NOTE_START),
                    delay: SPEED,
                    duration: SPEED,
                    ease: 'Linear',
                    onComplete: function (tween, target) {
                        // Do something
                    },
                    onCompleteScope: this,
                });

                // TODO: if this note reaches the end without being hit, lose score
            }
            this.step++;
        },
        callbackScope: this,
    });

    // Keyboard event listeners
    this.input.keyboard.on('keydown', function (event) {
        if (!event.repeat && (event.key == 'Escape' || event.key == 'p')) {
            // Pause the game
        } else if (!event.repeat && (event.key.match(/^[0-9a-z]+$/) || event.key == 'Enter')) {
            var hit = false;

            // TODO: expand the circle, change color depending on hit type

            // const greatText = this.add.text(16, 128, 'GREAT', { fontSize: '32px', fill: 'green' });
            this.tweens.add({
                targets: circle,
                radius: 200,
                ease: 'Quintic.easeInOut',
                duration: 500,
                yoyo: true,
                // repeat: ,
                onUpdate: function () { }
            });

            // Test if any of the notes have been hit
            for (var i = 0; i < nextNotes.length; i++) {
                if (nextNotes[i] != null && !nextNotes[i].hit && !hit) {

                    if (Math.abs((nextNotes[i].y + LAGCOMP) - nextNotes[i].destination) < LEEWAY) {

                        if (Math.round(Math.abs((nextNotes[i].y + LAGCOMP) - nextNotes[i].destination)) == 0) {
                            // GREAT HIT
                            score += (1000 * multiplier);

                            // Flash great text
                            const text = this.add.text(ZONE_X, ZONE_Y + 50, 'GREAT!', { fontSize: '32px', fill: 'green' });
                            this.tweens.add({
                                targets: text,
                                x: '+=5',
                                alpha: 0,
                                duration: 500,
                                ease: 'Linear',
                                onComplete: function (tween, target) {
                                    target[0].destroy();
                                },
                            });
                            // Great hit FX
                            // eg. fire effect
                this.sound.play('coin', { volume: .45 });


                        } else {
                            // GOOD HIT
                            score += (500 * multiplier)

                this.sound.play('coin', { volume: .45 });


                            // Flash hit text
                            const text = this.add.text(ZONE_X, ZONE_Y + 50, 'HIT!', { fontSize: '32px', fill: 'orange' });
                            this.tweens.add({
                                targets: text,
                                x: '+=5',
                                alpha: 0,
                                duration: 500,
                                ease: 'Linear',
                                onComplete: function (tween, target) {
                                    target[0].destroy();
                                },
                            });
                        }

                        hit = true;
                        streak++

                        if (streak >= 64 && multiplier < 5) {
                            multiplier = 5
                            this.sound.play('streak-3', { volume: .45 });
                        } else if (streak >= 32 && multiplier < 3) {
                            multiplier = 3
                        } else if (streak >= 16 && multiplier < 2) {
                            multiplier = 2
                            this.sound.play('streak-1', { volume: .45 });
                        }

                        var note = nextNotes[i];
                        note.hit = true;
                    }
                }
            }

            if (!hit) {
                // MISSED
                if (score >= 100) {
                    score -= 100
                }

                streak = 0
                multiplier = 1

                // Miss FX
                this.cameras.main.shake(40, .01)
                this.sound.play('miss', { volume: .45 });

                // Flash missed text
                const missText = this.add.text(ZONE_X, ZONE_Y + 50, 'MISS', { fontSize: '32px', fill: 'red' });
                this.tweens.add({
                    targets: missText,
                    x: '+=5',
                    alpha: 0,
                    duration: 500,
                    ease: 'Linear',
                    onComplete: function (tween, target) {
                        target[0].destroy();
                    },
                });
            }

            const multiplierText = multiplier > 1 ? `(${multiplier}x)` : ''

            scoreText.setText('score: ' + score + multiplierText);
            streakText.setText('streak: ' + streak);
        }
    }, this);

}

function update() {
    // this.graphics.clear()
}