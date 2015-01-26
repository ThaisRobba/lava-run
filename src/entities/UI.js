UI = function(game) {
    this.game = game;
};
UI.prototype = {
    create: function() {
        this.distanceCounter = 0;
        this.distanceTraveled = game.add.text(30, 30, this.distanceCounter + 'm', {
            fontSize: 48,
            fill: '#ffffff'
        });
        this.emptyHearts = game.add.tileSprite(30, 60, 96, 27, 'empty_heart');
        this.hearts = game.add.tileSprite(30, 60, 96, 27, 'full_heart');
        this.defeat = game.add.image(game.world.centerX + 20, game.world.centerY - 100, 'defeat');
        this.defeat.alpha = 0;
        this.defeat.anchor.setTo(0.5, 0.5);

    },
    update: function() {
        this.distanceCounter += player.speed / 200;
        this.distanceTraveled.text = Math.ceil(this.distanceCounter) + 'm';
        this.hearts.width = player.lives * 32;
    }
};