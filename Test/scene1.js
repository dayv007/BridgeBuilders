var joints = [
    new Phaser.Geom.Point(100, 300),
    new Phaser.Geom.Point(800, 300),
];

var edges = [
]

var selected = null;
var state = 0;
var tmpPoint = null;
var isPointValid = false;

class scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }
    create ()
    {
        var graphics = this.add.graphics({ lineStyle: { width: 10, color: 0x00ff00 } });



        this.input.on('pointermove', function (pointer) {
            if (state === 1) {
                let near = nearJoint(pointer.x, pointer.y);
                if (near == null) {
                    tmpPoint = Phaser.Geom.Point.Clone(pointer);
                } else {
                    tmpPoint = Phaser.Geom.Point.Clone(joints[near]);
                }
                let distance = distanceTo(tmpPoint.x, tmpPoint.y, joints[selected]);
                if (distance > 100) {
                    isPointValid = false;
                } else {
                    isPointValid = true;
                }

                redraw();
            }
        });

        this.input.on('pointerdown', function (pointer) {
            let near = nearJoint(pointer.x, pointer.y);

            if (state === 0) {
                if (near == null) {
                    return;
                }
                selected = near;
                state = 1;
                tmpPoint = Phaser.Geom.Point.Clone(pointer);
            } else if (state == 1 && isPointValid) {
                if (near == null) {
                    joints.push(Phaser.Geom.Point.Clone(pointer));
                    edges.push([selected, joints.length - 1]);
                } else {
                    edges.push([selected, near]);
                }
                selected = null;
                state = 0;
                tmpPoint = null;
                isPointValid = false;
            }

            redraw();
        });

        function edgeLength(edge) {
            return distanceTo(joints[edge[0]].x, joints[edge[0]].y, joints[edge[1]]);
        }

        function distanceTo(x, y, joint) {
            return Phaser.Math.Distance.Between(x, y, joint.x, joint.y);
        }

        function closestJoint(x, y) { // returns touple [jointIndex, distance]
            var closest = 0;
            var closestDistance = 100000;
            joints.forEach(function (item, index) {
                let distance = distanceTo(x, y, item);
                if (distance < closestDistance) {
                    closest = index;
                    closestDistance = distance;
                }
            });
            return [closest, closestDistance];
        }

        function nearJoint(x, y) {
            var threshold = 10;
            let closest = closestJoint(x, y);

            if (closest[1] < threshold) {
                return closest[0];
            }
            return null;
        }


        function redraw()
        {
            graphics.clear();
            graphics.beginPath();
            joints.forEach(function (item) {
                graphics.strokeCircle(item.x, item.y, 10);
            });
            edges.forEach(function (item) {
                graphics.moveTo(joints[item[0]].x, joints[item[0]].y);
                graphics.lineTo(joints[item[1]].x, joints[item[1]].y);
            });
            if (state == 1 && isPointValid) {
                graphics.moveTo(joints[selected].x, joints[selected].y);
                graphics.lineTo(tmpPoint.x, tmpPoint.y);
            }
            graphics.closePath();
            graphics.strokePath();
        }

        redraw();
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
    