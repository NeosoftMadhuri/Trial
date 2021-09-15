class Student
{
 Stud_id:number;
  Stud_name:string;

  constructor(code:number,name:string)
  {
     this.Stud_id=code;
      this.Stud_name=name;
     console.log("id :"+code);
      console.log("Name: "+name);
  }
  getGrade():string{
      return "A+";
  }
}
const  obj1=new Student(120,"Madhuri");

  
  


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