tiles.setTilemap(tiles.createTilemap(hex`10001000040808080808080808080808080808030701010a0a0a010101010101010101090701010a010a01010101010a0a0a0a090701010a010a0a0a01010a0a010101090701010a0101010101010101010101090701010a010a010a010a0a010101010907010101010a010a01010a01010101090701010a010a010a01010a010a0a0a090701010a010a010101010a010a010a090701010a010a010a01010a0a0a010a090701010a0101010a0101010101010a09070a0a0a0a010a0a0101010101010a09070a01010a010a010101010101010109070a01010a010a010101010101010109070101010a010a0a0a0a0a0a0a0a0a09020606060a0606060606060606060605`, img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 . . . . . . . . . . 
    . . . 2 . 2 . . . . . 2 2 2 2 . 
    . . . 2 . 2 2 2 . . 2 2 . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . . 2 . 2 . 2 . 2 2 . . . . . 
    . . . . . 2 . 2 . . 2 . . . . . 
    . . . 2 . 2 . 2 . . 2 . 2 2 2 . 
    . . . 2 . 2 . . . . 2 . 2 . 2 . 
    . . . 2 . 2 . 2 . . 2 2 2 . 2 . 
    . . . 2 . . . 2 . . . . . . 2 . 
    . 2 2 2 2 . 2 2 . . . . . . 2 . 
    . 2 . . 2 . 2 . . . . . . . . . 
    . 2 . . 2 . 2 . . . . . . . . . 
    . . . . 2 . 2 2 2 2 2 2 2 2 2 . 
    . . . . 2 . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.builtin.forestTiles0], TileScale.Sixteen))
let Player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f a a a a f . . . . . 
    . . . . f a a a a a a f . . . . 
    . . . . f a . a a . a f . . . . 
    . . . . f a a a a a a f . . . . 
    . . . . . f a a a a f . . . 8 . 
    . . . . . . f f f f . . . 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 . 8 8 8 8 . . . . . . 
    . . . 8 8 . . 8 8 8 . . . . . . 
    . . . 8 . . 8 8 . 8 8 . . . . . 
    . . . . . 8 8 . . . 8 8 . . . . 
    . . . . . 8 8 . . . 8 8 . . . . 
    . . . . 8 8 8 . . . 8 8 8 . . . 
    `, SpriteKind.Player)
Player1.setFlag(SpriteFlag.StayInScreen, true)
Player1.setFlag(SpriteFlag.BounceOnWall, true)
Player1.setPosition(8, 8)
controller.moveSprite(Player1)
scene.cameraFollowSprite(Player1)
