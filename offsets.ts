import * as fs from 'fs';
const data1 = fs.readFileSync("byleth 1 mac 1.bin", 'ascii');
const data2 = fs.readFileSync("byleth 1 mac 2.bin", 'ascii');

function readFileData(file: string): Promise<string> {
    return new Promise((resolve) => {
        let data = '';
        const stream = fs.createReadStream(file);
        stream.on('data', (chunk) => {
            data += chunk;
        });

        stream.on('end', () => {
            resolve(data);
        });
    });
};

function commonStr(str1: string, str2:string, log = false) {
    let common = '';
    let sequences: string[] = [];

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            common += str1[i];
        }
        else {
            sequences.push(common);
            common = '';
        }
    }

    return sequences.map(x => x.replace(/\0/ug, '').trim()).filter(i => i.length);
}

(async function boot() {
    const x = await readFileData('byleth 1 mac 1.bin');
    const y = await readFileData("byleth 1 mac 2.bin");
    const z = await readFileData("byleth_skin_1_steve_skin_1_wily_castle_battlefield_air_man_stage.bin");
    const u = await readFileData("byleth_skin_1_steve_skin_1_wily_castle_normal_quick_man_stage.bin");
    const v = await readFileData("byleth_skin_1_steve_skin_1_wily_castle_fd_quick_man_stage.bin");
    const m = await readFileData("byleth_skin_1_joker_skin_1_wily_castle_battlefield_quick_man_stage.bin");
    let seq1 = commonStr(x, y);
    let seq2 = commonStr(z, u);
    let seq4 = commonStr(v, m);
    let seq3 = commonStr(seq1.join(' '), seq2.join(' '));
    let seq5 = commonStr(seq4.join(''), seq3.join(''));
    console.log(seq5);
})();

// const space = 0x2;
// const player1Name = 0x8CE;
// let playerNameOffsets: number[] = [];
// for (let i = 0; i < 8; i++) {
//     const namesOffsets = 0x260;
//     playerNameOffsets.push(0x8CE + 0x260 * i);
// }
// const player2Name = 0xB2E;
// const player3Name = 0xB2E + (0xB2E - 0x8CE);

// function readCharacterName(content: string, address: number) {
//     let name = '';
//     let pointer = address;

//     while (content[pointer] !== "\x00") {
//         name += content[pointer];
//         pointer += space;
//     }

//     return name;
// };



