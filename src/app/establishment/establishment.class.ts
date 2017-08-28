export class Establishment {
    id: number;
    name: string;
    description: string;
    img: string;
    adress: {
        city: string,
        streetName: string
        zipCode: string
    };
    latitude: number;
    longitude: number;
    price: number;
}
