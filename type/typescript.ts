// boolean
let isCool: boolean = true;

// number
let age: number = 55;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `'I'm not old, i'm only ${age}`;

// array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// object
let wizard: object = {
  a: 'john',
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// ============================

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[1];
let sizeName2: number = Size.Small;

// ========================

// Any - (be careful)
let whatever: any = 'agh';
whatever = 5;
whatever = true;
whatever = basket;

// Void
let sing = (): void => {
  console.log('lalala');
};

// Never
let error = (): never => {
  // return 5
  throw Error('oops');
};

// ========================

// Interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; // optional property with "?"
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('Fight');
};

fightRobotArmy({ count: 1, type: 'dragon' });

let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log('Fight');
};

// ========================

// Type Assertion - (dangerous)
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// ========================

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('Fight');
};

let fightRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log('Fight');
  return 5;
};

// Class
class Animal {
  private sing: string = 'lala';
  constructor(sound: string) {
    this.sing = sound;
  }

  public greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('roar');
lion.greet();
// lion.sing; // - cant access private prop

// ========================

// Union
let confused: string | number = 'hello';
confused = 5;
// confused = true;

