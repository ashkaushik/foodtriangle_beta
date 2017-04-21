export interface Menu {
    _id: string;        
    name: string;
    restaurant_id: string;
    fullprice: string;
    halfprice:string;
    longDesc:string;
    shortDesc:string;
    lat:string;
    long:string;
    type:string;
    category:string;    
    image?: {
            mainImage?:string;
            image1?:string;
            image2?:string;
            image3?:string;
            image4?:string;
            image5?:string;
          }
    rating?: { 
            userName?:String;
            userEmail?:string;
          }
    likes?: { 
            userName?:String;
            userEmail?:string;
          }
    published:boolean;
    created: Date;
    updated: Date;
}
