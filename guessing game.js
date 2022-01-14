let max = parseInt(prompt("Enter the maximum number"));
while(!max){
    max =  parseInt(prompt("Enter the maximum number"));
}
const tNum = Math.floor(Math.random() * max) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter the first guess"));
while(parseInt(guess) !== tNum){
    if ( guess === 'q') break;
    attempts++;
    if(guess > tNum){
       guess =  prompt("too large")
    }
    else{
       guess = prompt("too less ")
    }
}
if( guess === 'q'){
    console.log("i am done with this shit")
}
else{
    console.log("CONGO")
    console.log(`it took you ${attempts} guesses`)

}

 