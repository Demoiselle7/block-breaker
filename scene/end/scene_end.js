class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
        this.end = game.imageByName('end')
    }
    draw() {
        // draw labels
        this.game.context.drawImage(this.end.image,0,0)
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 130, 290)
    }
}
