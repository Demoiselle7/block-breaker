class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var s = Scene(game)
            game.replaceScene(s)
        })
        game.registerAction('e', function(){
            var s = SceneEditor(game)
            game.replaceScene(s)
        })
        this.bg = game.imageByName('bg')
    }
    draw() {
        // draw labels
        this.game.context.drawImage(this.bg.image,0,0)
        this.game.context.fillText('按 k 开始游戏', 100, 190)
        this.game.context.fillText('按 e 编辑关卡', 100, 210)

    }
}
