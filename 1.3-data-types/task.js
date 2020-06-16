function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    const milliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const hours = 24;
    const days = 31;

    function numberCheck(param, nameParam) {
      param = Number(param);
      if (Number.isNaN(param)) {
        return `Параметр ${nameParam} содержит неправильное значение ${param}`;
      }
    }

    numberCheck(percent, 'percent');
    numberCheck(contribution, 'contribution');
    numberCheck(amount, 'amount');
    numberCheck(date, 'date');

    let credit = amount - contribution;
    let monthsOfPayment = Math.ceil((date.getTime() - new Date().getTime()) / (milliseconds * seconds * minutes * hours * days));
    let percentageRate = (percent / 100) / 12;
    let monthlyFee = credit * (percentageRate + percentageRate / ((Math.pow((1 + percentageRate), monthsOfPayment)) - 1));
    let totalAmount = Number((monthsOfPayment * monthlyFee).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    if (!name) {
      name = "Аноним";
    }
    return `Привет, мир! Меня зовут ${name}`;
}
