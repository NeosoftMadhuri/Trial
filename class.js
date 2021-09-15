var Student = /** @class */ (function () {
    function Student(code, name) {
        this.Stud_id = code;
        this.Stud_name = name;
        console.log("id :" + code);
        console.log("Name: " + name);
    }
    Student.prototype.getGrade = function () {
        return "A+";
    };
    return Student;
}());
var obj1 = new Student(120, "Madhuri");
// class Student {
//     studCode: number;
//     studName: string;
//     constructor(code: number, name: string) {
//         this.studName = name;
//         this.studCode = code;
//     }
//     getGrade() : string {
//         return "A+" ;
//      }
// } 
