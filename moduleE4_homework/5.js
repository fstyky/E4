class App {
    App(selfName, power) {
        this.switch = 'off';
        this.selfName = selfName;
        this.power = power;
    }
    doSwitch(action) {
        this.switch = action
    }
}

class WorkApp extends App {
    App(selfName, power) {
        super(selfName, power);
    }
}

class LightApp extends App{
    App(selfName, power, brightness) {
        super(selfName, power);
        this.brightness = brightness ? brightness : '50';
    }
}
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

const nightLight = new LightApp('night light', 10);
garland.doSwitch('on');

const garland = new LightApp('garland', 100, 100
);
garland.doSwitch('on');

const solderingIron = new WorkApp('solderingIron', 700);
console.log(solderingIron.switch);

const sumPower = getSumPower(nightLight, garland, solderingIron);

console.log(sumPower);
console.log(nightLight, garland, solderingIron)