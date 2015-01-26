Powerups = function(game) {
    this.game = game;
    this.nextSpawnAt = 0;
};

Powerups.prototype = {
    create: function() {
        this.sprite = game.add.sprite(0, -240, 'powerup');
        game.physics.arcade.enable(this.sprite);
        this.sprite.kill();
        game.time.events.loop(18000 - (player.speed * 200), this.spawn, this);
        game.time.events.loop(5000, this.recycle, this);
    },

    update: function() {},

    spawn: function() {
        if (this.nextSpawnAt > game.time.now) {
            return;
        }
        this.nextSpawnAt = game.time.now + 15000 - player.speed * 100;
        if (!this.sprite.alive) {
            var random = game.rnd.integerInRange(45, 485);
            this.sprite.reset(random, -240);
            this.sprite.body.gravity.y = 200;
        }
    },

    recycle: function() {
        if (this.sprite.y > game.world.height) {
            this.sprite.kill();
        }
    }
};