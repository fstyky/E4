const son = 'son'
const parent = {
    name: 'baty'
};
const child = Object.create(parent);
child.first = son;
child.second = 'daughter';
child.third = function () {
    console.log('vnuk')
};
function KeyAndValue (object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let result = `Key: ${key}, Value: ${object[key]}`;
            console.log(result)
        }


    }
}
KeyAndValue(child);