async function getFlag(a: Array<number>){
    return a.reduce((x,y) => x*y);
}

async function part1(inputData: Array<number>){
    const d = inputData.map(v => 
        inputData.filter(e => e+v==2020)[0]
    ).filter(Number);
    const flag = await getFlag(d);
    console.log(flag);
}

async function part2(inputData: Array<number>){
    const a = inputData.map(v => 
        inputData.map(w => 
            inputData.filter(e => e+v+w==2020)[0]
        ).filter(Number)
    ).filter(x => x.length > 0).reduce((x,z) => x.concat(z))
    const d = a.filter((item, index) => a.indexOf(item) == index);
    const flag = await getFlag(d);
    console.log(flag);
}

async function main() {
    const inputStream = await Deno.readTextFile(await Deno.realPath(Deno.args[0]));
    const inputData: Array<number> = inputStream.trim().split("\n").map((v) => parseInt(v, 10));
    await part1(inputData);   
    await part2(inputData);
}

main();

