scene.onOverlapTile(SpriteKind.Projectile, assets.tile`tile9`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile10`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile9`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
game.splash("Get to the end! Good luck!")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 9 9 9 9 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 1 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . f f . . . . . f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`niveau1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`tile10`)
info.setLife(3)
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 9 9 9 4 4 9 4 9 4 . . 
        . . . 5 4 4 4 4 4 4 4 4 4 4 2 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 5 4 4 4 4 4 4 4 4 4 4 4 4 2 . 
        . 4 4 f f f 4 4 4 4 f f f 4 . . 
        . . . f f f . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, assets.tile`tile12`)
    mySprite2.setVelocity(-185, 0)
})
game.onUpdateInterval(200, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 9 8 9 8 9 8 9 9 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . f f f . . . f f f . . . . 
        . . . f f f . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite3, assets.tile`tile11`)
    mySprite3.setVelocity(207, 0)
})
