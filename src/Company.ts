import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchFrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'green';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchFrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>Company ${this.companyName}</h1>
   CatchFrase :${this.catchFrase}
            `;
  }
}
