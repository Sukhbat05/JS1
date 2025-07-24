let students = [
  { name: "boldoo", age: 20, grade: 20, balance: 30000, gender: "male" },
  { name: "dorjoo", age: 31, grade: 30, balance: 20000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 15000, gender: "female" },
  { name: "bataa", age: 10, grade: 50, balance: 10000, gender: "male" },
];

function findTopStudents(arr) {
  let topStudents = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topStudents.grade < arr[i].grade) {
      topStudents = arr[i];
    }
  }
  return topStudents;
}

let Manaiduu = findTopStudents(students);
console.log(Manaiduu);

function findOldStudent(arr) {
  let OldStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (OldStudent.age < arr[i].age) {
      OldStudent = arr[i];
    }
  }
  return OldStudent;
}

let Manaiah = findOldStudent(students);
console.log(Manaiah);

function findTopBalance(arr) {
  let TopBalance = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (TopBalance.balance < arr[i].balance) {
      TopBalance = arr[i];
    }
  }
  return TopBalance;
}
let ManaiEgch = findTopBalance(students);
console.log(ManaiEgch);

function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      return arr[i];
    }
  }
}

let Manaiaav = findStudentByAge(students, 30);
console.log(Manaiaav);

function findAvgAge(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }
  let avg1 = sum / arr.length;
  return avg1;
}
let Manaiah1 = findAvgAge(students);
console.log(Manaiah1);

function findAdultBalanceAvg(arr) {
  let sum = 0;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      sum = sum + arr[i].balance;
      count++;
    }
  }
  let avg2 = sum / count;
  return avg2;
}
console.log(findAdultBalanceAvg(students));

function findMale(arr) {
  let count1 = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      count1++;
    }
  }
  return count1;
}
console.log(findMale(students));

function findFemalePercent(arr) {
  let count2 = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      count2++;
    }
  }
  let percent = (count2 / arr.length) * 100;
  return percent;
}
console.log(findFemalePercent(students), "%");
