// memory are of two types basically

//  1. STACK MEMORY => stores PRIMITIVE typesof data
// CALL BY VALUE type where a copy of actual data is send and any changes maded will reflect in copy of the data not to the actual data.
 let myName = "chandan"
 let anotherName = myName
 console.log(myName);
 console.log(anotherName);
 anotherName = "ray"
 console.log(myName);
 console.log(anotherName);   //here changes are reflected in the copy of data, the actual datavalue does not get affected.


//  2. HEAP MEMORY => stores NON-PRIMITIVE types of data.
// CALL BY REFERENCE type where the actual data is send as reference and any changes made will reflect in the the actual data

let user = {
    email : "amiray@gmail.com",
    pasword : "saymyname"
}
let anotherUser = user
console.log(user);
console.log(anotherUser);
anotherUser.email = "chandan@gmail.com"
console.log(user);
console.log(anotherUser);  
// now here we can see the actual data is changed 
