function getResult(a,b,c){
    "use strict";

    const discriminant = Math.pow(b, 2) - 4 * a * c;
    let x;
    if (discriminant < 0) {
      x = [];
    } else if (discriminant === 0) {
      x = [- b / (2 * a)];
    } else if (discriminant > 0) {
      x = [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
    }
    return x;
}

function getAverageMark(marks){
    let averageMark;
    if (marks.length === 0) {
      return 0;
    } else if (marks.length > 5) {
      marks = marks.slice(0, 5);
      console.log("Всего оценок больше пяти. Учитываются первые пять: " + marks);
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }

    averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let currentDate = new Date();
    let userAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();

    if (userAge >= 18) {
      return `Не желаете ли олд-фэшн, ${name}?`
    } else {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}
