function addTwoNums(a,b){
    return a + b;
}

let res = addTwoNums(10,20)
console.log(`Result is ${res}`);


function isLegal(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

if(isLegal(18)){
    console.log("allowed");
}
else{
    console.log("NOOOOOO")
}
const age = 22;
let text  = age > 18  ? "allowed" : "noo"
console.log(text)


for(let i = 0 ; i<=10 ;i = i + 2){
    console.log(i);
}
