// stack and heap memory 



// =====stack memory

let students =100
let teachers = students
teachers =200
console.log(students);
console.log(teachers);



//  in the above example when  teacher variable = student    here in js a copy of student is provided to teacher varibale not the actual variable thats ehy when we makes any changes in child variable the parent variable remain unefected









// ====heap memory

let student= {
    
id : 1010,
email : "shah12pp@gmail.com",
name :"shahid",


}
let student2 = student

student2.name = "ali"      
// console.log(student2);
console.log(student);




// in the above     exaample we  see that  when we give certain values to student and than we make student 2 variable =to student  and we  just change the value of name in in student 2   but it is also changed in student variable which is called heap memory   [for more details see chai and code "stack and heap memory video"]  

