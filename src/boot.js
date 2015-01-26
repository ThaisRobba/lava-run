var bootState = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
    },
    preload: function() {
        game.load.image('progressBar', 'assets/ui/progress_bar.png');
    },
    create: function() {
        game.stage.backgroundColor = '#000';
        game.plugins.screenShake = game.plugins.add(Phaser.Plugin.ScreenShake);
        game.state.start('load');
    },
    update: function() {},
};