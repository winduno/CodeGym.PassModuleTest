function countLetters(array) {
    let compareArray = ["u", "e", "o", "a", "i", "y"];
    let count = 0;
    for (let i = 0 ; i < array.length; i++){
        for (let j = 0; j < compareArray.length; j++){
            if (array[i].toLowerCase() == compareArray[j]){
                count++;
                break;
            }
        }
    }

    if (count > 0){
        return count;
    }
    else{
        return false;
    }
}

let inputString = prompt("Nhập vào chuỗi bất kì đi anh zai!!");
alert(countLetters(inputString));