export interface SearchOption {
  //id: string;
  //name: string;
  //description: string;
  //price: string;
  //imageUrl: string;
  //quantity: number;
  //unversity: string;
  id: string;
  street_address: string;
  city: string; 
  province: string; 
  country: string;
  image: string;
  university: string;
  available_date: Date;
  price: number;
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  kitchen: Boolean;
  parking: Boolean;
}
