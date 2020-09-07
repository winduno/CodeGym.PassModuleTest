alert(GiaiPhuongTrinhBacNhat(1, 8));

function GiaiPhuongTrinhBacNhat(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        if (num1 == 0 && num2 != 0){
            return "Vô nghiệm rồi!";
        }
        else if (num1 == 0 && num2 == 0){
            return "Vô số nghiệm, khỏi cần giải!!"
        }
        else {
            return -num2 / num1;
        }
    }
    else {
        return "Đề bài là nhập 2 số nguyên. 2 số này không nguyên, không giải!!";
    }
}