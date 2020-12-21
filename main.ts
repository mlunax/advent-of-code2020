// day1 you have to pass path to input file
// every next day you have to pass file as input stream

import { initDay2 } from './day2/day2.ts';

const stdin = new TextDecoder().decode(await Deno.readAll(Deno.stdin));

initDay2(stdin);