// Задача №1. Печатное издание
class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача №2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

// Задача №3. Школьный журнал

class StudentLog {
  constructor(studentName) {
    this.studentName = studentName;
    this.subjects = {};
  }

  getName() {
    return this.studentName;
  }

  addGrade(grade, subject) {
    if (this.subjects[subject] === undefined) {
      this.subjects[subject] = [];
    }
    if (grade < 1 || grade > 5 || typeof grade == 'string') {
      console.log('Вы пытались поставить оценку ' + grade + ' по предмету ' + subject + ' . Допускаются только числа от 1 до 5.');
    } else {
      this.subjects[subject].push(grade);
    }
    return this.subjects[subject].length;
  }

  getAverageBySubject(subject) {
    if (this.subjects[subject] === undefined) {
      return 0;
    }
    let sum = 0;
    for (let rating of this.subjects[subject]) {
      sum += rating;
    }
    return sum / this.subjects[subject].length;
  }

  getTotalAverage() {
    let sum = 0;
    let count = 0;
    for (let subject in this.subjects) {
        sum += this.getAverageBySubject(subject);
        count += 1;
    }
    if (count === 0) {
      return 0;
    }
    return sum / count;
  }
}
