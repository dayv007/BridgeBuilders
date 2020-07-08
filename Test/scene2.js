var input;
var mouse;
var boden;
var knoten;
class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
preload() {
    this.load.image("kreis", "assets/temp.png");
}
create() {

}
/*    preload() {
        this.load.image("boden", "assets/logo.png")
        this.load.image("kreis", "assets/temp.png")
    }
    create() {
        var text = this.add.text(20, 20, "spielen", {font: "25px Arial", fill: "yellow"});
        this.boden1 = this.add.sprite(100,200, "boden").setInteractive();
        input = this.input;
        mouse = this.input.mousePointer;
        knoten = this.add.sprite(300,300, "kreis").setScale(0.1).setInteractive();
        knoten.on('pointerdown', function () {
            text.setText("knoten1");
        });
        
        boden.on("pointerover", function (event) {
            this.setTint(0xff0000);
        });

    }
    update() {
       //Knoten erschaffen
        if (mouse.isDown) {
            boden = this.physics.add.sprite(input.x,input.y,"kreis").setScale(0.1);
            //evtl rotation
            //let angle = Phaser.Math.Angle.Between(100,100,input.x,input.y);
            //boden.setRotation(angle);
       }
    }*/
}