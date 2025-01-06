//console.log('hello world');
//console.log('hello worlddddd');

//prompt('What is your name');

//string,number,boolean,object,array

//string
//let firstname ='John';
//const idcard ='1234'
//console.log(firstname);
//number
//let age = 25;
//let height =5.9;
//boolean
//let isMarried = false;

//console.log('my name is' ,firstname,'and I am',age,'years old.');


/*

+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ

*/

/*
//คำนวณตัวเลข
let number1=5;
let numbet2=10;

let result = number1 + numbet2;
console.log(result); //15  

//บวก string
let number3='4';
let numbet4='8';

let result2 = number3 + numbet4;
console.log('new number is',result2); //48 */

/* 
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
*/

/*
let number5 = '5'
let number6 ='3'
let condition1 = number5 >= number6; //boolean  ค่าที่ได้จะเป็น true หรือ false
console.log('result of condition is',condition1);
*/

/* 
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
*/
/*
let number7 = '5'
let number8 ='5'
//if - else condition
if (number7 != number8){
   console.log('this is if');
}//เป็นจริง
else if (number7 == number8){
    console.log('this is else if')
}
else{
    console.log('this is else');
}//เป็นเท็จ
*/

/*
let score = promp('Enter your score');//60
console.log('your score is'+score);
//if - else if - else condition
if(score >= 80){
    console.log('you are grade A');
}else if(score >=70){
    console.log('you are grade B');
}else if(score >=60){
    console.log('you are grade C');
}else if(score >=50){
    console.log('you are grade D');
}else{
    console.log('you are grade F');            
}
 */

// && และ    
// || หรือ    
// ! not หริอ ไม้

/*
let number9 = 5;
let number10 = 8;
//true && false = false 
let condition2 = number9 >= 3 || number9 >= number10;  
console.log('result of condition is',condition2);

let age = 25;
let gender = 'male';    
// true && true = true  
if(age >= 20 && gender == 'male'){
    console.log('you are male adult');
}

let number11 = 5;
let number12 = 8;
//!not true = false 
let condition3 = !(number9 >= 3 || number9 >= number10);  
console.log('result of condition is',condition3);

//เลขคี่-คู่
let number13 = 25;
if (!(number13 % 2 == 0)){
    console.log('you are odd number'); //เลขคี่
}
*/

/*
while loop
for 
*/
/*
 let counter = 0;
 console.log('while loop');

 while(counter < 10){ //true 
     console.log('while loop');
     counter = counter + 1;
 }

 for (let counter = 0; counter < 10; counter+1){
     console.log('for loop');
 }
 */

 /* 
 array
 */
/*
 let age1 = 20;
 let age2 = 30;
 let age3 = 40;
 let age4 = 50;

 console.log('age1,age2,age3,age4');
 let ages = [30,35,40,45,50];
 console.log(ages)
 //เรียงลำดับ array
 ages.sort();
 console.log(ages);

 if(!ages.includes(40)){
     console.log('you have to be 40');
 }
 console.log('new age',ages[2]);
 console.log('age list',ages);

 //1.แทนที่ค่าใน array
 ages = [40,50];
 console.log('new age',ages);

 //2.ต่อ array
 ages.push(55);
 console.log('new age',ages);
 
/*
 let names_list = ['john','bob','alice','mary'];    
 names_list.push('mike');
 console.log(names_list.length);
 console.log(names_list[0]);
 console.log(names_list[1]);
 console.log(names_list[2]);

 for (let index = 0; index < names_list.length; index+1){
    console.log('name list',names_list[index]);
 }
*/
 /*object*/

 /*
let student=[{
   age_1 : 100,
   name1 :'wes',
  grade1 : 'A'
},{
    age_2 : 90,
    name2 : 'zz',
    grade2 : 'B'
}];

//เพิ่มข้อมูลใน array
student.push = ({
    name3 : 'QQ' ,
    age_3 : 80,
    grade3 : 'C'    
})

//ลบข้อมูลใน array
student.pop()

console.log('name',student.name1);
console.log('age',student.age_1);

 for (let index = 0; index < student.length; index++){
    console.log('Student number',(index+1));
    console.log('name',student[index].name1);
    console.log('age',student[index].age_1);
    console.log('grade',student[index].grade1);
 }

*/

/*object + array*/
/*
let scores1 = 50
let scores2 = 90
let grade = ''

//ประกาศ function ชื่อ calculateGrade ที่มี parameter ชื่อ scores
function calculateGrade (scores){
if(scores >= 80){
    grade = 'A'; 
}else if(scores >= 70){
    grade = 'B';
}else if(scores >= 60){
    grade = 'C';
}else if(scores >= 50){
    grade = 'D';
}else{
    grade = 'F';
}  
return grade
}


let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grade:',student1,student2);

let scores = [10,20,30,40,50];
for (let index = 0; index < scores.length; index++){
    console.log(scores[index]);
}

/*
scores[0] =  score[0] * 2;
scores[1] =  score[1] * 2;
scores[2] =  score[2] * 2;
scores[3] =  score[3] * 2;
scores[4] =  score[4] * 2;
*/
/*
score =score.map((s) => {
    return s * 2;
}); 
*/

/*
//Allow function เอาทุกค่าใน array มาคำนวณ
scores.forEach((s) => {
    console.log('score:',s);
})

let scores_10= [10,20,30,40,50];
let newScore = []

for (let index = 0; index < score.length; index++){
    newScore.push(score[index]);
    if (scores_10[index] >= 30){
        newScoretes.push(scores[index]);
    }
}

let newScoretes = scores_10.filter((s) => {
    if(s>=30){
        return true;
    }else{
        return false;
    }
})

newScoretes.forEach((ns) => {
    console.log('New Score:',ns);
})
*/

//object function

let students = [{
    name: "John",
    score: 90,
    grade: 'A'
},
{
    name: "Jane",
    score: 75,
    grade: 'B'
},
{
    name: "Jim",
    score: 60,
    grade: 'C'
}
]

//.find หาข้อมูลใน array
let student = students.find((s) =>{
    if(s.name == 'Jane'){
        return true;
}
})

let dublescore_student = students.map((s) =>{
    s.score = s.score * 2
    })

let highscore_student = students.filter((s) =>{
    if(s.score >= 80){
        return true;
    }
}) 
console.log('student:',student);
console.log('student:',highscore_student);
