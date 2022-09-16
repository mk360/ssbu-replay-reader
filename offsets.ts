const space = 0x2;
const player1Name = 0x8CE;
let playerNameOffsets: number[] = [];
for (let i = 0; i < 8; i++) {
    const namesOffsets = 0x260;
    playerNameOffsets.push(0x8CE + 0x260 * i);
}
const player2Name = 0xB2E;
const player3Name = 0xB2E + (0xB2E - 0x8CE);