

class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    create ()
    {
        var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });
    
        var points = [
            new Phaser.Geom.Point(420, 280),
            new Phaser.Geom.Point(450, 250),
            new Phaser.Geom.Point(470, 300)
        ];
        var connections = [
            [1,2]
            [0,1]
        ];
    
        this.input.on('pointermove', function (pointer) {

            Phaser.Geom.Point.CopyFrom(pointer, points[points.length - 1]);
            
            fusePoints();
            redraw();
        });
    
        this.input.on('pointerdown', function (pointer) {
    
            points.push(Phaser.Geom.Point.Clone(points[points.length - 1]));
    
        });
        redraw();

        function fusePoints() {
            for (var i = 0; i < points.length - 2; i++) {
                if (Phaser.Math.Distance(points[i], points[points.length - 1])){
                    points.pop();
                    connections[i].push(points.length-1);
                }
            }
        }   

        function redraw()
        {
            graphics.clear();
            graphics.beginPath();
            var pointI;
            pointI = points[0];
            graphics.moveTo(pointI.x, pointI.y);
            graphics.lineTo(100,100);
            graphics.closePath();
            graphics.strokePath();

        }
    }
    /*{
        var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });
    
        var points = [
            new Phaser.Geom.Point(420, 280),
            new Phaser.Geom.Point(450, 250),
            new Phaser.Geom.Point(470, 300)
        ];
    
        this.input.on('pointermove', function (pointer) {
    
            Phaser.Geom.Point.CopyFrom(pointer, points[points.length - 1]);
    
            redraw();
        });
    
        this.input.on('pointerdown', function (pointer) {
    
            points.push(Phaser.Geom.Point.Clone(points[points.length - 1]));
    
        });
    
        redraw();
    
        function redraw()
        {
            graphics.clear();
            graphics.beginPath();
            var pointI;
            pointI = points[0];
            graphics.moveTo(pointI.x, pointI.y);
            graphics.lineTo(100,100);
            graphics.closePath();
            graphics.strokePath();

        }
    }*/
}
    