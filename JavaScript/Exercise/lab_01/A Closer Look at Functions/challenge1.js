// Date: 31/08/2024
// Name: Phan Nguyễn Khôi Nguyên
// MSSV: 21068021
// Description: A Closer Look at Functions - Coding Challenge #1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0), //[0,0,0,0]

    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        //join: nối các phần tử trong mảng bằng dấu xuống dòng
        if(answer >= 0 && answer <= 3){
            this.answers[answer]++;
        }
        this.displayResults("string");
    },
    
    displayResults(type = 'array'){ //default parameter
        if(type === 'array'){
            console.log(this.answers);
        } else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }

};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
//bind(poll) để gán this cho poll, nếu không sẽ là button

poll.displayResults.call({ answers: [5, 2, 3] }, "array");
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

/*
call() là một phương thức đặc biệt trong JavaScript dùng để gọi một hàm với this được thiết lập thành một đối tượng cụ thể mà bạn chọn.
{ answers: [5, 2, 3] }: Đây là đối tượng mà bạn muốn this trong phương thức displayResults trỏ đến. Đối tượng này có thuộc tính answers với giá trị [5, 2, 3].
*/