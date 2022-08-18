import readline from "readline-sync";

export default function getInt(prompt, min=undefined, max=undefined){

    console.log(prompt);
    let answer;
    while ((!(Number.isInteger(answer)))
            || ((max != undefined) && (answer > max))
            || ((max != undefined) && (answer < min))){
        try{
            answer = Number(readline.prompt());
            if (!(Number.isInteger(answer))){
                throw "Not an integer";
            }
            if (max != undefined && answer > max){
                throw "Too big";
            }0
            if (min != undefined && answer < min){
                throw "Too small";
            }
        }
        catch (err){
            if (err === "Not an integer"){
                console.log(`${err}, please try again`);
            }
            if (err === "Too big"){
                console.log(`${err}, please enter a number ${max} or less`)
            }
            if (err === "Too small"){
                console.log(`${err}, please enter a number ${min} or greater`)
            }
        }
    }
    return answer
}

