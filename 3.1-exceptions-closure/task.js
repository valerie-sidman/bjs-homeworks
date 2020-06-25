// Задача №1. Форматтер чисел
function parseCount(needToParsed) {
  const result = Number.parseInt(needToParsed, 10);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(needToParsed) {
  try {
    return parseCount(needToParsed);
  } catch (e) {
    return e;
  }
}

// Задача №2. Треугольник
class Triangle {
  constructor(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea () {
    const p = this.getPerimeter() / 2;
    return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}
