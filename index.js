// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// npc.walkEast(500,()=>{
//     npc.walkNorth()
// })
// The above code was used before giving a stop command to the other directions!!!

// The codes below r used to test out nonplay character
// npc.walkNorth(500,()=>{
//     npc.walkEast(500)
// })

// npc.walkSouth(500,()=>{
//     npc.walkEast(500)
// })



// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)