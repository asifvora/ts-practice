import { Employee } from "./models/Employee";

const emp = new Employee("asif", 500);
console.log({ emp });

export default class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  static danger(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }
}
