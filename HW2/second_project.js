// конструкція IfElse
let age = 18
let result = canSmoke3(age)
console.log(result)

function canSmoke(age){
    if(age > 9){
       return "virno"
    }
    if(age < 9){
        return "ne virno"
    } 
    else{
        return "ne"
    }


}



// Cтрілочна функція
let add = (a, b) => a + b; 
console.log(add(4, 6))
function add2(a, b){
    return a + b;
}
console.log(add2(4, 6))


//Звичайна функція
function canSmoke2(age){
if(age >= 18){
return "лупись"
}
if(age <= 18){
return "шпиндик"
}else{
    return "okey"
}
}


let canSmoke3 = (age) => {
    if(age >= 18){
       console.log("лупись");
    }else if(age <= 18){
       console.log("шпиндик"); 
    }else{
       console.log("okey");
    }

}
console.log(canSmoke3("h"))


//Функція перепустка
let allowedTOIn = (name, age, departament) => { 
    let budg = {
name: name, 
age: age,
departament: departament
    }  
return budg;
}
let simplebudg = allowedTOIn("vitya", 6, "plohoy");
console.log(simplebudg)
