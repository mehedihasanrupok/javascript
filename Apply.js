// let ----
//can be changed


// const --- 
//never change , can not declare


// var --- no use

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);