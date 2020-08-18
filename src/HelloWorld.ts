import { saySomethingNice } from '@/common/helpers';

export class HelloWorld {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  sayHello(): void {
    console.log(`Hello World, and ${this.msg}`);
    saySomethingNice();
  }
}

export default HelloWorld;
