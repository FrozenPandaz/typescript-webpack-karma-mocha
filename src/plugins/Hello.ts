import * as utils from '../utils';

export default class Hello {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    speak() {
        utils.print(`Hello ${this.name}${utils.repeat('!', 2)}`);
    }
}