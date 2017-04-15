export class Restaurant {
    _id: string;        
    name: string;
    openTime: string;
    closeTime: string;
    contactNumber1: number;
    contactNumber2: number;
    minDelivery:number;
    longDesc:string;
    shortDesc:string;
    lat:string;
    lang:string;
    deliveryFee:string;
    dayOff:boolean;
    pickUp:boolean;
    image:{
            mainImage:string;
            image1:string;
            image2:string;
            image3:string;
            image4:string;
            image5:string;
            image6:string;
            image7:string;
            image8:string;
            image9:string;
            image10:string;
          }
    rating: { 
            userName:String;
            userEmail:string;
          }
    likes: { 
            userName:String;
            userEmail:string;
          }
    published:boolean;
    country: string;
    state: string;
    city: string;
    address1:string;
    address2: string;
    postCode: string;
    created: Date;
    updated: Date;
}