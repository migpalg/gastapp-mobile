export default class {
  name: string = '';
  payDate: number = 0;
  amount: number = 0;
  image: string = '';
  initalDate?: Date;
  dueDate?: Date;

  getImage = () => `${this.image}`;
}
