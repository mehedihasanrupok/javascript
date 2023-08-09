
function sortMaker(arr){
    let temp = arr[0];
    for(let i =0 ; i< arr.length; i++){
        if(arr[i]< 0){
            return 'Invalid Input';
        }
    }
    if(arr[0] === arr[1]){
        return 'Same';
    }
    else{
        if(arr[0] > arr[1]){
             arr[0] = arr[1];
             arr[1] = temp;
             return arr;
     }
     else{
        return 'Array Already Sorted';
     }
    }

}

const number = [4,3];
const result = sortMaker(number);
console.log(result)
