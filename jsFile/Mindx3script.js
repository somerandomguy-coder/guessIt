const questions = {"Gà có trước hay trứng có trước ": "KHONG BIET",
                "Ai phát minh ra dòng điện xoay chiều ": "TESLA",
                "Thủ đô nước Nhật nằm ở đâu ": "KHONG CO",
                "Đàn piano (full) có bao nhiêu phím ": "88"}


// for (const question in questions) {
//     console.log(question + questions[question]);
// }
const randomNum = Math.random();
const question = Object.keys(questions)[Math.floor(randomNum*Object.keys(questions).length)];
const answer = questions[question];


