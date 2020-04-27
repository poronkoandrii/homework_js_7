// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
class Circle {
  constructor(_r) {
    this.r = _r; // поле, хранящее радиус окружности;
  }
  get radius() {
    return [this.r]; // get-свойство, возвращающее радиус окружности;
  }
  set radius(newRadius) {
    [this.r] = [...newRadius]; // set-свойство, устанавливающее радиус окружности;
  }
  get diameter() {
    return [this.r * 2]; // get-свойство, возвращающее диаметр окружности;
  }
  areaCircle() {
    return Math.PI * this.r ** 2; // метод, вычисляющий площадь окружности;
  }
  lengthCircle() {
    return Math.PI * this.r * 2; // метод, вычисляющий длину окружности.
  }
}
// Продемонстрировать работу свойств и методов.
let a = new Circle(6);
console.log(a.radius); //6
a.radius = [15];
console.log(a.diameter); //30
console.log(a.areaCircle()); //706
console.log(a.lengthCircle()); //94

// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
// 	 пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
class Marker {
  constructor(_color, _quantity) {
    this.color = _color; // поле, которое хранит цвет маркера;
    this.quantity = _quantity; // поле, которое хранит количество чернил в маркере (в процентах);
  }
  print(text) {
    let result = "";
    for (let k = this.quantity; k > 0; k) {
      for (let i of text) {
        if (i === " ") {
          result += i;
        } else {
          result += i;
          k -= 0.5;
        }
        if (k <= 0) {
          break;
        }
      }
      result += " ";
    }
    document.write(`<p style="color: ${this.color};">${result}</p>`);
  }
}
let orange = new Marker("orange", 3.5);
orange.print("text");

// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
class RepleMarker extends Marker {
  replenish(x) {
    this.quantity += x;
  }
}
let marker = new RepleMarker("green", 50);
marker.replenish(13);
console.log(marker.quantity); //63

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
class Employee {
  constructor(_name, _surname, _age, _skill) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.skill = _skill;
  }
}
let ivanov = new Employee("Ivan", "Ivanov", 25, "Php"),
  petrov = new Employee("Petro", "Petrov", 30, "Js"),
  sidorov = new Employee("Sidr", "Sidorov", 20, "Java");

let worker = [ivanov, petrov, sidorov];
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
//  Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
class EmpTable {
  constructor(_arr) {
    this.arr = _arr;
  }
  getHtml() {
    document.write("<table border='1' cellpadding='5'>");
    document.write("<th>Name</th><th>Surname</th><th>Age</th><th>Skill</th>");
    for (let k of this.arr) {
      document.write(
        `<tr><td>${k.name}</td><td>${k.surname}</td><td>${k.age}</td><td>${k.skill}</td></tr>`
      );
    }
    document.write("</table>");
  }
}
let people = new EmpTable(worker);

console.log(people.getHtml());
