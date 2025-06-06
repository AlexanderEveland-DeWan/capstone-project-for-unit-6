// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "crowdRace":
            case "crowdRace1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202030303030303030303030303030303030404040404040404040404040404040405050505050505050505050505050505010101010101010101010101010101010101010606010101010101010101010106060101010101010101010101010101010101010101060601010101010101010101060601010101010101010101010101010101010101010106060601010101010101010101060601010101010101010106060601010101010101010101010101010101010101010101010101010101010101010606010101010101010101010101010101010101010101010101010106060606010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . . 
. . . . . . 2 2 . . . . . . . . 
. 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.builtin.crowd6,sprites.builtin.crowd8,sprites.builtin.crowd0,sprites.builtin.crowd5,sprites.vehicle.roadHorizontal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
