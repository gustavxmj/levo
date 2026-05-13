function make_level () {
    if (level == 1) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level == 2) {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    level += 1
    make_level()
})
let level = 0
level = 1
make_level()
