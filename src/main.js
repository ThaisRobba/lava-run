var game = new Phaser.Game(576, 1024, Phaser.AUTO, 'gameDiv');

//global variables go below
game.global = {
    mute: false,
    score: 0,
    music: false
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('credits', creditsState);
game.state.start('boot');