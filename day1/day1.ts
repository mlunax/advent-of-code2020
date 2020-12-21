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

async function part1a(a: Array<number>){
    for (let i=0; i<a.length; ++i){
        for (let j=0; j<a.length; ++j){
            if (a[i] + a[j]==2020) return getFlag([a[i], a[j]]);
        }
    }
}

async function part2a(a: Array<number>){
    for (let i=0; i<a.length; ++i){
        for (let j=0; j<a.length; ++j){
            for (let k=0; k<a.length; ++k){
            if (a[i] + a[j] + a[k] == 2020) return getFlag([a[i], a[j], a[k]]);

            }
        }
    }
}

export async function initDay1(filename: string) {
    const inputStream = await Deno.readTextFile(await Deno.realPath(filename));
    const inputData: Array<number> = inputStream.trim().split("\n").map((v) => parseInt(v, 10));
    await part1(inputData);   
    await part2(inputData);
}

export async function initDay1a(filename: string) {
    const inputStream = await Deno.readTextFile(await Deno.realPath(filename));
    const inputData: Array<number> = inputStream.trim().split("\n").map((v) => parseInt(v, 10));
    console.log(await part1a(inputData));   
    console.log(await part2a(inputData)); 
}