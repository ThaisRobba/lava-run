var playState = {
    create: function() {
        game.world.setBounds(-20, -20, game.width + 20, game.height + 20);
        background = new Background(game);
        background.create();
        player = new Player(game);
        player.create();
        hazards = new Hazards(game);
        hazards.create();
        powerups = new Powerups(game);
        powerups.create();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        ui = new UI(game);
        ui.create();
        this.hasLost = false;
    },

    update: function() {
        background.update();
        player.update();
        ui.update();
        this.checkPulse();
        game.physics.arcade.collide(player.sprite, hazards.group, player.onHit);
        game.physics.arcade.collide(player.sprite, powerups.sprite, player.onHit);
    },

    checkPulse: function() {
        if (player.isDead) {
            this.defeat();
        }
    },

    defeat: function() {
        if (!this.hasLost) {
            game.add.text(game.world.centerX, game.world.centerY + 100, 'Oh my! You exploded!', {
                fontSize: 96,
                fill: '#ffffff'
            }).anchor.setTo(0.5, 0.5);
        }
        this.hasLost = true;
        ui.defeat.alpha = 1;
        player.sprite.kill();
        player.stream.kill();
        player.canMove = false;
        player.speed = 0;
        game.global.score = Math.ceil(ui.distanceCounter);
        game.time.events.add(3000, (function() {
            game.state.start('menu');
        }), this);
    },
};
