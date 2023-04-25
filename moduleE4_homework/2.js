const obj = new Object();
obj.a = 1;
obj.b = 'a';
obj.c = true;

const str1 = 'abc';
const str2 = 'a';
const str3 = 'b';
const str4 = 'c';

function isprop (object, string) {
    return string in object
}

console.log(isprop(obj, str1))
console.log(isprop(obj, str4))