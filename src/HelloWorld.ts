export class HelloWorld {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  sayHello(): void {
    console.log(`Hello World, and ${this.msg}`);
  }
}

export default HelloWorld;
