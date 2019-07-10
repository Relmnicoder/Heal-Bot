window.onload = function() 
{

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#2d2d2d',
        parent: 'phaser',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    
    var text;
    var graphics;
    var hsv;
    var timerEvents = [];

    var game = new Phaser.Game(config);

    function preload() 
    {
        game.load.audio('spell', './sounds/spell.mp3');
    }

    function create() 
    {
        // sounds
        finish_spellcast = game.add.audio('spell'); 

        text = this.add.text(32, 32);

        for (var i = 0; i < 32; i++)
        {
            timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(1000, 8000), loop: true }));
        }

        hsv = Phaser.Display.Color.HSVColorWheel();

        graphics = this.add.graphics({ x: 240, y: 36 });

    }

    function update()
    {
        if(1==1)
        {
            finish_spellcast.play();
        }
        
        var output = [];

        graphics.clear();

        for (var i = 0; i < timerEvents.length; i++)
        {
            output.push('Event.progress: ' + timerEvents[i].getProgress().toString().substr(0, 4));

            graphics.fillStyle(hsv[i * 8].color, 1);
            graphics.fillRect(0, i * 16, 500 * timerEvents[i].getProgress(), 8);
        }

        text.setText(output);
        }
}