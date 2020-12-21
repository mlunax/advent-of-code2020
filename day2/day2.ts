class passwordRow {
    min: number;
    max:number;
    char:string; 
    password: string;
    constructor(min: number, max:number, char:string, password: string){
        this.min = min;
        this.max = max;
        this.char = char;
        this.password = password;
    }
}

async function part1(passwordRows: Array<passwordRow>){
    const validPasswords: Array<passwordRow> = [];
    for (let i=0; i<passwordRows.length; ++i){
        const v = passwordRows[i];
        const charOcc = (v.password.match(new RegExp(v.char, "g")) || []).length;
        if ((v.min <= charOcc) && (charOcc <= v.max)) validPasswords.push(v);
    }
    console.log(validPasswords.length);
}

async function part2(passwordRows: Array<passwordRow>){
    const validPasswords: Array<passwordRow> = [];
    for (let i=0; i<passwordRows.length; ++i){
        const v = passwordRows[i];
        if ((v.password[v.min-1] == v.char && v.password[v.max-1] != v.char) || 
        (v.password[v.min-1] != v.char && v.password[v.max-1] == v.char))
            validPasswords.push(v);
    }
    console.log(validPasswords.length);
}

export async function initDay2(inputStream: string){
    const inputStreamSplitted = inputStream.trim().split("\n");
    const inputData: Array<passwordRow> = [];
    for (let i = 0; i<inputStreamSplitted.length; ++i){
        const v = inputStreamSplitted[i];
        const left = v.split(":")[0];
        const right = v.split(":")[1].trim();
        const min = parseInt(left.split("-")[0], 10);
        const max = parseInt(left.split("-")[1], 10);
        const char = left.split(" ")[1];
        const data = new passwordRow(min, max, char, right);
        inputData.push(data);
    }
    await part1(inputData);
    await part2(inputData);
}