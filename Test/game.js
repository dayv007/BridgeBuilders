window.onload = function() {
    var config = {
        width: 400,
        height: 600,
        backgroundColor: 0xFF0000,
        scene: [scene1, scene2],
        physics:{
            default:'arcade',
            arcade:{
                gravity:{y:0}
            }
        }
    }
    var game = new Phaser.Game(config);
}