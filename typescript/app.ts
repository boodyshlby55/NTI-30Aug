// let js: number = 10;
// let arr: string[] = ['ahmed']
// string, number, boolean, undefined, null, array,object,any
// let arr2: any[] = [324, true, [], {}]

let user: User = {
  id: '1',
  name: 'Abd',
  age: 25,
  gender: 'male',
  email: '',
}
let user2: User = {
  id: '2',
  name: 'Abd',
  age: 25,
  gender: 'male',
}
let user3: Users = {
  // id: '3',
  name: 'Abd',
  age: 25,
  gender: 'male',
}

// user.id = '10'
console.log(user.id);

type User = {
  readonly id: string,
  name: string,
  age: number,
  gender: Gender,
  email?: string,
}

type Gender = 'male' | 'female'
type mix = number | undefined

const sum = (n1: number = 10, n2: number): number => {
  return n1 + n2;
};

console.log(sum(15, 15));

interface Users {
  name: string;
  age: number;
  gender: Gender;
}

// type User ={}

interface Profile extends Users { }

const hello = <messageType = number>(message: messageType): messageType => {
  return message;
}
const hello2 = <messageType = number>(n1: messageType, n2: messageType): string => {
  return n1 + '' + n2;
}

console.log(hello<string>('Hello func'));

class Car {
  // private message: string;
  constructor(protected message: string) {
    console.log(this.message);
  }
}

@color('Black')
class Octavia extends Car {
  constructor(protected message: string, private model: string) {
    super(message);
    console.log(this.model);
  }
}

// const car1: Car = new Car('BMW')
// const car2: Octavia = new Octavia('Octavia A8', '2018')

function color(value: string) {
  console.log(value);
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target: any) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}