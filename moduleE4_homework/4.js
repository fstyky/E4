function App(selfName, power) {
    this.connection = 'off';
    this.name = selfName;
    this.power = power;
}

App.prototype.doSwitch = function (action) {
        this.connection = action
}

function WorkApp(selfName, power) {
    this.name = selfName;
    this.power = power;
}

WorkApp.prototype = new App();

const solderingIron = new WorkApp('lamp', 100);
solderingIron.doSwitch('off');

function lightApp(selfName, power) {
    this.name = selfName;
    this.power = power;
    this.brightness = '50';
}

lightApp.prototype = new App();

const nightLight = new lightApp('night light', 10);
nightLight.doSwitch('on');

const garland = new lightApp('garland', 100);
garland.doSwitch('on');

function getSumPower(...rest) {
    let power = rest.map(function (element){
        if (element.switch === 'on') {
            return element.power
        } else {
            return 0
        }
    });
    let result = power.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    })

    return result
}
const sumPower = getSumPower(solderingIron, nightLight, garland);
console.log(sumPower)
console.log(solderingIron, nightLight, garland)