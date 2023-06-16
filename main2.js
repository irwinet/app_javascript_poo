class Course {
    constructor({
        name,
        classes = []
    }){
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoName) {
        if(nuevoName === "Curso Malito de Programación Básica"){
            console.error("Web... no");
        }
        else{
            this._name = nuevoName;
        }
    }
}

const cursoProgramacionBasica = new Course({
    name: 'Curso de Programacion Basica',
});

const cursoPracticoHtmlCss = new Course({
    name: 'Curso Practico de HTML Y CSS',
});
const cursoDataBusiness = new Course({
    name: 'Curso DataBusiness',
});
const cursoUnity = new Course({
    name: 'Curso Unity',
});

class LearningPath {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name : "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoPracticoHtmlCss
    ]
});
const escuelaData = new LearningPath({
    name : "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
        cursoDataBusiness
    ]
});
const escuelaVgs = new LearningPath({
    name : "Escuela de Videojuegos",
    courses: [
        cursoProgramacionBasica,
        cursoUnity
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };        
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const irwin = new Student({
    name: 'irwin',
    username: 'irwinet',
    email: 'irwin@example.com',
    twitter: 'irwinet',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

const juan = new Student({
    name: 'juan',
    username: 'juanac',
    email: 'juan@example.com',
    instagram: 'juanac',
    learningPaths: [
        escuelaWeb,
        escuelaData,
        escuelaVgs,
    ]
});