import readline from "readline-sync";

export default function getInt(prompt: string, min: number, max: number): number {

    console.log(prompt);
    let answer;
    while ((!(Number.isInteger(answer)))
            || (answer && (max != undefined) && (answer > max))
            || (answer && (min != undefined) && (answer < min))){
        try{
            answer = readline.prompt();
            if (answer === ""){
                throw "Not an integer"
            }
            answer = Number(answer)
            if (!(Number.isInteger(answer))){
                throw "Not an integer";
            }
            if (answer && max != undefined && answer > max){
                throw "Too big";
            }0
            if (answer && min != undefined && answer < min){
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
    return 0;
}

