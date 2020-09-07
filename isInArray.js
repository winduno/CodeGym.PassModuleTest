let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];
let num = parseFloat(prompt("Nhập vào 1 số nguyên!!"));

if (Number.isInteger(num)){
    alert(isInArray(num, arr))
}
else{
    alert("Đề bài là nhập vào số nguyên, không nhập vào số nguyên không giải đâu!!");
}


function isInArray(number, array) {
    let result = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number){
            result = true;
            break;
        }
    }
    return result;
}