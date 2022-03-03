type UserName = {
  firstName: string | null;
  lastName: string | null;
};

type Geolocation = {
  lat: string | null;
  long: string | null;
};

type Address = {
  city: string | null;
  street: string | null;
  number: number | null;
  zipcode: string | null;
  geolocation: Geolocation;
};

export class User {
  private _userName: string;
  private _email: string;
  private _name: UserName;
  private _address: Address;
  private _phone: string;

  constructor(
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    this._userName = userName;
    this._email = email;
    this._name = { firstName, lastName };
    this._address = {
      city: null,
      geolocation: { lat: null, long: null },
      number: null,
      street: null,
      zipcode: null,
    };
    this._phone = "";
  }

  public get userName() {
    return this._userName;
  }

  public get email() {
    return this._email;
  }

  public get name() {
    return this._name;
  }

  public get address() {
    return this._address;
  }

  public get phone() {
    return this._phone;
  }
}
