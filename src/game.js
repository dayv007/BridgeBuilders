window.onload = function() {
    var config = {
        width: 1000,
        height: 600,
        backgroundColor: 0x00000,
        scene: [scene1, scene2, scene3],
        physics:{
            default:'arcade',
            arcade:{
                gravity:{y:0,
                debug: false}
            }
        }
    }
    var game = new Phaser.Game(config);
}