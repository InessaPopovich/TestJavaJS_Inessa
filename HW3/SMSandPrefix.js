
// Дано: 
// 1 смс = 60 символів 
// текст = 300 символів 
// Задача: скільки треба смс для тексту 

//SMS
function sendSMS(smsText){
let smsCount = Math.ceil(smsText.length/60);
const message = `you need ${smsCount} sms to send text - ${smsText}`;
console.log(message);
}
sendSMS("Керівники часто, оголошуючи про проведення педради чи наради, звертають увагу, як підлеглі або ховають незадоволений");



//Prefix 
function findPrefix(mass) {
    if (mass.length === 0) {
        return "";
    }

    let firstString = mass[0];
    let generalPrefix = mass.reduce((prefix, currentString) => {
        let i = 0;
        while (i < prefix.length && i < currentString.length && prefix[i] === currentString[i]) {
            i++;
        }
        return prefix.substring(0, i);
    }, firstString);

    return generalPrefix;
}

console.log(findPrefix(["flower", "flow", "flight"])); 