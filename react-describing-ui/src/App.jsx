// ix. Why understanding your UI as trees is useful (Root Module)
import { greetA } from './ModuleA.js';
import { greetB } from './ModuleB.js';
import { greetC } from './ModuleC.js';

export function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}

export default rootGreet;





