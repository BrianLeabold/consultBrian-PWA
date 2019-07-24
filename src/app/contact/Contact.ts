export class Contact {
  constructor(
    public name: string,
    // public street: string,
    public city: string,
    // public state: string,
    // public postalCode: string,
    public email: string,
    public phone: string,
    public topic: string,
    public comment: string,
    public timePreference: string,
    public subscribe: boolean,
  ) {}
}
