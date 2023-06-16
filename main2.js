class Comment {
    constructor({
        content,
        studentName,
        studentRole = "studiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecreta = "https://example/"+ id;
    console.log("Se esta reproduciendo desde la url "+ urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://example/"+ id;
    console.log("Pausamos la url "+ urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pasuar() {
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
});

const cursoPracticoHtmlCss = new Course({
    name: 'Curso Practico de HTML Y CSS',
    lang: 'english',
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);            
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);            
    }

    approvedCourse(newCourse) {
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }
        else {
            console.warn("Lo sentimos, "+ this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);            
    }

    approvedCourse(newCourse) {
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }
        else {
            console.warn("Lo sentimos, "+ this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);            
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const irwin = new FreeStudent({
    name: 'irwin',
    username: 'irwinet',
    email: 'irwin@example.com',
    twitter: 'irwinet',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

const juan = new BasicStudent({
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

const pedro = new TeacherStudent({
    name: 'pedro',
    username: 'pedrowe',
    email: 'pedro@example.com',
    instagram: 'pedrowe',    
});