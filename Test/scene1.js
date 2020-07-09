

class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    create ()
    {
        var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });
    
        var points = [
            [new Phaser.Geom.Point(420, 280), 1, 2, 3],
            [new Phaser.Geom.Point(450, 250), 0, 3, 2],
            [new Phaser.Geom.Point(470, 300), 0, 1, 3],
            [new Phaser.Geom.Point(499, 230), 0, 1, 2],
            [new Phaser.Geom.Point(499, 230)]
        ];

        var selected = 1;
    
        this.input.on('pointermove', function (pointer) {

            Phaser.Geom.Point.CopyFrom(pointer, points[points.length - 1][0]);
            
            redraw();
        });
        
        this.input.on('pointerdown', function (pointer) {
            points.push([Phaser.Geom.Point.Clone(points[points.length - 1][0]), selected]);
            selected = closestPoint;
        }); 
        redraw();

        //funktioniert noch nicht
        function closestPoint() {
            var closest;
            var minimumDistance = 10000;
            for (let i = 0; i < points.length - 1; i++) {
                var pointZwischen = points[i][0];
                if (Phaser.Math.Distance.Between(pointZwischen.x, pointZwischen.y, pointer.x, pointer.y) < minimumDistance){
                    return 0;}
                else {
                    return 1;
                }
            }
        }
        //Phaser.Math.Distance.BetweenPoints(pointer, points[i][0])
        
        function redraw()
        {
            graphics.clear();
            points.forEach(verbindungen);

        }
        function verbindungen(item, index) {
            //kann optimiert werden
            graphics.beginPath();
            var pointDraw = points[index][0];
            graphics.moveTo(pointDraw.x, pointDraw.y);
            var zwischenArray = item;
            for (let i = 1; i < zwischenArray.length; i++) {
                var point2 = points[points[index][i]][0];
                graphics.lineTo(point2.x, point2.y);
            }
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
    