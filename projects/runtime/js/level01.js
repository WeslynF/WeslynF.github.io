var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            
            var obstacleImage = draw.bitmap("img/sawblade.png");
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);
          }
        
        function createWeen(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var weenBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            weenBladeHitZone.x = x;
            weenBladeHitZone.y = y;
            game.addGameItem(weenBladeHitZone);
            
            var obstacleImage = draw.bitmap("img/joseph_.jpg");
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            weenBladeHitZone.addChild(obstacleImage);
        }

        createSawBlade(300,395)
        createSawBlade(700,300)
        createSawBlade(1000,290)
        createWeen(1350, 400)
        createWeen(1750, 300)
        createWeen(550, 400)
        
        var enemy = game.createGameItem("enemy", 50);
        var redSquare = draw.rect(100, 100, "blue");
        redSquare.x = -50;
        redSquare.y = -50;
        enemy.addChild(redSquare);
        
        enemy.x = 400;
        enemy.y = groundY - 50;
        game.addGameItem(enemy);
        enemy.velocityX = -2;
        enemy.rotationalVelocity = 5;

        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-20)
        };
        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.shrink();
        }
        
        
        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 50);
            var redSquare = draw.bitmap("img/weenie.jpeg");
            redSquare.x = x;
            redSquare.y = y;
            enemy.addChild(redSquare);
            
            enemy.x = 400;
            enemy.y = -200;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
    
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-20)
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.shrink();
            }
          }

        createEnemy(400, groundY - 10);
        createEnemy(800, groundY - 80);
        createEnemy(1200, groundY - 50);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
