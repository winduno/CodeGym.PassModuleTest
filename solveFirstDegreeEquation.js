alert(GiaiPhuongTrinhBacNhat(1, 8));

function GiaiPhuongTrinhBacNhat(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        if (num1 == 0){
           if (num2 == 0){
               return "Vô số nghiệm, giải thế nào nữa??";
           }
           else {
               return "Vô nghiệm, chịu rồi!!";
           }
        }
        else {
            return -num2 / num1;
        }
    }
    else {
        return "Đề bài là nhập 2 số nguyên. 2 cái nhập vào không phải số nguyên, không giải!!";
    }
}