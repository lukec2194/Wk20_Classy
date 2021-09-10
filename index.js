'use strict';

/////////////////////////// 1. Person Class
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

describe() {
    return `${this.name}, ${this.age} years old`
}
}

const me = new Person ('Luke', 26);
console.log(me)
console.log(me.describe())


/////////////////////////// 2. TV Class
class TV {
    constructor (brand, channel = 1, volume = 50) {
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

status () {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
}

increaseVolume() {
    if (this.volume < 99) return `Volume ${++this.volume}`
    else return `Max Volume`
   
}

decreaseVolume() {
    if (this.volume > 1) return `Volume ${--this.volume}`
    else return `x`
}

randomChannel() {
    return this.channel = Math.floor(Math.random() * 50) + 1
}

}

let myTV = new TV('Panasonic', 8, 99);
console.log(myTV.increaseVolume())
console.log(myTV.increaseVolume())
console.log(myTV.randomChannel())
console.log(myTV.status())