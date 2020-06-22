// Задача № 1. Корни квадратного уравнения

function getSolutions(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let x1;
  let x2;
  let result = {
    D: d
  };

  if (d < 0) {
    result.roots = [];
  } else if (d === 0) {
    x1 = - b / (2 * a);
    result.roots = [x1];
  } else {
    x1 = (- b + Math.sqrt(d)) / (2 * a);
    x2 = (- b - Math.sqrt(d)) / (2 * a);
    result.roots = [x1 , x2];
  }
  return result;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log("Значение дискриминанта: " + result.D);

  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D === 0) {
    console.log("Уравнение имеет один корень X₁ = " + result.roots[0]);
  } else {
    console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
  }
}

// Задача № 2. Журнал успеваемости

function getAverageScore(data) {
  let totalAverage = [];

  for (let nameSubject in data) {
    let marks = data[nameSubject];
    totalAverage.push(data[nameSubject] = getAverageMark(marks));
  }

  data.average = getAverageMark(totalAverage);
  return data;
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total / marks.length;
}

// Задача № 3. Расшифровка данных

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  };
}

function getDecodedValue(secret) {
  let pirateName;
  if (secret === 0) {
    pirateName = 'Родриго';
  } else if (secret === 1) {
    pirateName = 'Эмильо';
  }
  return pirateName;
}
