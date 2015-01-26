Background = function(game) {
    this.game = game;
};

Background.prototype = {
    create: function() {
        this.background = game.add.tileSprite(0, 0, game.world.width, 1363, 'background');
        this.lavaGlow = game.add.tileSprite(0, game.world.height - 256, game.world.width, game.world.height, 'lava_glow');
        this.lava = game.add.tileSprite(0, game.world.height - 96, game.world.width, game.world.height, 'lava');
        this.walls = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'rock_walls');

        game.add.tween(this.lava)
            .to({
                y: game.world.height - 118
            }, 600, Phaser.Easing.Sinusoidal.InOut)
            .to({
                y: game.world.height - 74
            }, 600, Phaser.Easing.Sinusoidal.InOut)
            .loop()
            .start();

        game.add.tween(this.lavaGlow)
            .to({
                alpha: 0
            }, 1000)
            .to({
                alpha: 0.5
            }, 1000)
            .loop()
            .start();

    },

    update: function() {
        this.background.tilePosition.y += player.speed / 5;
        this.walls.tilePosition.y += player.speed;
        this.lava.tilePosition.x += 2;
    },
};