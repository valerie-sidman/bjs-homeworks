String.prototype.isPalindrome = function isPalindrome() {
  let strReverse = this.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  if (this.replaceAll(' ', '').toLowerCase() == strReverse) {
    return true;
  } else {
    return false;
  }
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else {
    let total = 0;
    for (i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    let average = total / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
  }
}

function checkBirthday(birthday) {
  let now = (new Date()).getTime();
  let birthdayDate = (new Date(birthday)).getTime();
  let diff = now - birthdayDate;
  let age = diff / (1000 * 60 * 60 * 24 * 365.25);
  return age >= 18;
}
