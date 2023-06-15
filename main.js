// TODO Objetos Literales
const irwin = {
  name: "",
  age: 29,
  cursosAprobados: ["Curso Html y Css", "Curso PHP"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// TODO Prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso) {
  //     this.cursosAprobados.push(nuevoCurso);
  // }
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const pedro = new Student("Pedro", 20, ["Unity 3D"]);

// TODO Protopitos con la sontaxis de clases
class Student2 {
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const juan = new Student2({
  email: "example@gmail.com",
  name: "Juan",
  age: 25,
  cursosAprobados: ["PHP"],
});
