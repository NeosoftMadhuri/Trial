class Details{
    name:String;
    profession:string;

    constructor(name:string,profession:string)
    {
        this.name=name;
        this.profession=profession;
    }
}
class Person extends  Details{
    name:string;
    profession:string;
    constructor(name:string,profession:string)
    {
        super(name,profession);
        this.name=name;
        this.profession=profession;
    }
    details():string{
        return this.name + " is "+ this.profession;
    }

}

let obj1=new Person("A","android developer");
let obj2=new Person("B","PHP developer");

console.log(obj1.details());
console.log(obj2.details());

