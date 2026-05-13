function level () {
    if (level2 == 1) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level2 == 2) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    level2 += 1
    level()
})
let level2 = 0
level2 = 1
level()
