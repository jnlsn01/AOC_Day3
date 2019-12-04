const fs = require('fs');
const _ = require('lodash');
const raw = fs.readFileSync('input.txt', 'utf8');
const [line1, line2] = raw.split('\n');

function myFunction(myLine, theCords, distances){
    let x=0;
    let y=0;
    let distance = 1;
    for(inst of myLine.split(',')){
        const dir = inst.charAt(0);
        const len = Number(inst.substr(1));
        if(dir=='R'){
            for(let i=0; i<len; i++){
                x++;
                theCords.push(`${x}_${y}`);
                distances[`${x}_${y}`] = distance;
                distance++;
            }
        }
        if(dir=='L'){
            for(let i=0; i<len; i++){
                x--;
                theCords.push(`${x}_${y}`);
                distances[`${x}_${y}`] = distance;
                distance++;
            }
        }
        if(dir=='U'){
            for(let i=0; i<len; i++){
                y++;
                theCords.push(`${x}_${y}`);
                distances[`${x}_${y}`] = distance;
                distance++;
            }
        }
        if(dir=='D'){
            for(let i=0; i<len; i++){
                y--;
                theCords.push(`${x}_${y}`);
                distances[`${x}_${y}`] = distance;
                distance++;
            }
        }
    }
}

const line1Cords = [];
const line2Cords = [];
const distances1 = {};
const distances2 = {};

myFunction(line1, line1Cords, distances1);
myFunction(line2, line2Cords, distances2);

var anumber;
var Mannumber;
const dists = [];
intersec = _.intersectionWith(line1Cords, line2Cords);

for(point of intersec){
	anumber = (point.split('_'));
	Mannumber = Math.abs(anumber[0]) + Math.abs(anumber[1])
	dists.push(Mannumber);
}

let longest = 999999;

for(elem of intersec){
    let dist1 = distances1[elem];
    let dist2 = distances2[elem];
    if((dist1 + dist2) < longest)
        longest = dist1 + dist2;
	}
console.log("Shortest:" , _.min(dists));
console.log("Longest:", longest);
