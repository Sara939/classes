// // 1:
// class Student{
//     fullname;
//     grade;
//     idnum;
//     constructor(fullname, grade, idnum){
//     this.fullname= fullname;
//     this.grade= grade;
//     this.idnum= idnum;
//     }
// }

// // 2:
// const student1= new Student("sara", 5, 475869797);
// console.log(student1);
// let student2= new Student("blbl", 7, 49586);
// console.log(student2);

// // 3:

// class User{
//     constructor(firstname, lastname, age, email){
//         this.firstname= firstname;
//         this.lastname= lastname;
//         this.age= age;
//         this.email= email;
//     }
// }

// // 4:
// let myuser1= new User("s", "l", 30, "fsfs@jfjf");
// let myuser2= new User("a", "l", 70, "jgkg@jgjg");
// let myuser3= new User("jgg", "kgg", 60, "jggj@jgjg");

// for(let mykey in myuser1) {
//   document.getElementById("mydiv").innerHTML+=` ${myuser1[mykey]}`
// }
// for(let mykey in myuser2) {
//     document.getElementById("mydiv").innerHTML+=` ${myuser2[mykey]}`
//   }
// for(let mykey in myuser3) {
//     document.getElementById("mydiv").innerHTML+=` ${myuser3[mykey]}`
//   }
    

// // 5:

// class Fromuser {
//     constructor(firstname,age){
//         this.firstname= firstname;
//         this.age= age;
//     }
// }

//  function details(){
// let namefromuser= document.getElementById("myinput").value;
// let agefromuser= document.getElementById("myinput2").value;
// // 6:
// let myuserinput= new Fromuser(namefromuser, agefromuser);

// console.log(myuserinput);

// document.getElementById("myT").innerHTML= `<tr id="mytr"></tr> `;
// document.getElementById("mytr").innerHTML= `<td>${myuserinput.firstname}</td><td>${myuserinput.age}</td>`;
// }

// 7:

// class Dog {
//     constructor(name, kind, birthdate){
//         this.name= name;
//         this.kind= kind;
//         this.birthdate= birthdate;
//     }
// }

// //  8:
// let dog1=  new Dog ("brawon", "belgin", "2012");
// let dog2=  new Dog ("kely", "mixed", "2017");
// let dog3=  new Dog ("wendy", "chines", "2013");
// let dog4=  new Dog ("lala", "belgin", "2016");
// let dog5=  new Dog ("blbl", "belgin", "2017");

// const dogarray= [dog1,dog2,dog3,dog4,dog5];

// dogarray.forEach(dog => {
//     console.log(dog)
// });
// 9:

// class Teacher{
//     constructor(firsname, lastname, grade, email){
//         this.firsname= firsname;
//         this.lastname= lastname;
//         this.grade= grade;
//         this.email= email;
//     }
// }
// // 10:

// function objectToTable(){
// let inputvalu1= document.getElementById("myinputs1").value;
// let inputvalu2= document.getElementById("myinputs2").value;
// let inputvalu3= document.getElementById("myinputs3").value;
// let inputvalu4= document.getElementById("myinputs4").value;

// let teacher1= new Teacher(inputvalu1, inputvalu2, inputvalu3, inputvalu4); 
//     document.getElementById("myT").innerHTML+= `<tr id="mytr"><tr/>`;
// for (const mykey in teacher1) {
    
//     document.getElementById("mytr").innerHTML+= `<td>${teacher1[mykey]}<td/>`;  
// }

// }

// 11:
class Course{
    constructor(name, teacher, gradeslist, studentlist){
        this.name= name;
        this.teacher= teacher;
        this.gradeslist= gradeslist;
        this.studentlist= studentlist;
    }
}
// 12:
// let ouercourse= new Course ("classn", "jacob",[100,98,99], ["sara", "bsara", "bsara", "tsara", "msara"]);
// for (const mykey in ouercourse) {
//    document.body.innerHTML+= `<div>${ouercourse[mykey]}</div>`; 
// }
// 13:

// let ouercourse= new Course ("classn", "jacob",[99,98,97,100], ["sara", "bsara", "bsara", "tsara", "msara"].sort());
// for (const mykey in ouercourse) {
//    document.body.innerHTML+= `<div>${ouercourse[mykey]}</div>`; 
// }
// // 14:
// let ouercourse= new Course ("classn", "jacob",[99,98,97,100].sort((a,b)=>b-a), ["sara", "bsara", "bsara", "tsara", "msara"]);
// for (const mykey in ouercourse) {
//    document.body.innerHTML+= `<div>${ouercourse[mykey]}</div>`; 
// }


