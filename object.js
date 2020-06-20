var student = { id:121, phone:1745, name:"Abir"};
var student2 = { id: 131, phone:457, name:"Mahi"};
var phoneProName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phoneProName];
//update phone number
student2.phone = 547854;
student2["phone"] = 666888;
student2[phoneProName] = 99991111;
student2.cinema = "Ogni22";
student2["cinema"] = "Smart girl";

console.log(phoneNo1);

//console.log(student);
console.log(student2);
