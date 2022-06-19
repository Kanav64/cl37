class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car_1=createSprite(600,500)
    car_1.addImage(car1_img)
    car_1.scale=0.05

    car_2=createSprite(400,500)
    car_2.addImage(car2_img)
    car_2.scale=0.05

    cars=[car_1,car_2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  update(state){
    database.ref('/').update({
      gameState:state
    })
    
  }

  play() {
    this.handleElements()
    Player.getPlayersInfo()
if(allPlayers!==undefined){

  image(track,0,-height*5,width,height*6)
  drawSprites()
}
  }
}
