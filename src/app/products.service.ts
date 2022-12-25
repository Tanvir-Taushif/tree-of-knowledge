import { Injectable } from '@angular/core';
import { product } from './MyComponent/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:product[]=[
    {
      ProductName:"The Art of Thinking Clearly",
      ProductShortCode: "think1",
      Category: "Non Fiction",
      Price: 750,
      Description: "Cognitive Errors and How they can be trained",
      ImageUrl: "https://static-01.daraz.com.bd/p/96e9ba93b6e1025e4a71273250542e65.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Amazon" 
    },
    {
      ProductName:"One Piece",
      ProductShortCode: "OP1",
      Category: "Fiction",
      Price: 1050,
      Description: "Written by Eichiro Oda. A fictional story about pirate adventure.",
      ImageUrl: "https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/1b0f0c7b-7b0c-412a-8de3-f131c1e07f94/One+Piece+100.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Shounen Jump" 
    },
    {
      ProductName:"Rich Dad Poor Dad",
      ProductShortCode: "RDPD1",
      Category: "Non Fiction",
      Price: 650,
      Description: "Money Management",
      ImageUrl: "https://static-01.daraz.com.bd/p/1c1f8e3394ffb3b22f5af8d2c9ee7580.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Daraz" 
    },
    {
      ProductName:"Tin Goyenda",
      ProductShortCode: "TG1",
      Category: "Fiction",
      Price: 200,
      Description: "Story about 3 boys and their solving mysteries.",
      ImageUrl: "https://www.amarbooks.org/thumbs/1572149689.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Sheba Prokashoni" 
    },
    {
      ProductName:"Cracking The Coding Interview",
      ProductShortCode: "CTCI1",
      Category: "Non Fiction",
      Price: 550,
      Description: "Computer Programming Book for Interviews",
      ImageUrl: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/be099abf9_127699.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Rokomari" 
    },
    {
      ProductName:"How to Win Friend and Influence Prople",
      ProductShortCode: "WFIP1",
      Category: "Non Fiction",
      Price: 1250,
      Description: "Effective ways to connect with people",
      ImageUrl: "https://static-01.daraz.com.bd/p/874d587b91a6b7696305fb5d1eeb2188.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Daraz" 
    },
    {
      ProductName:"7 Habits of Highly Effective People",
      ProductShortCode: "7HHEP1",
      Category: "Non Fiction",
      Price: 800,
      Description: "How Succesful People climbed their way up",
      ImageUrl: "https://static-01.daraz.com.bd/p/fee940080bb953f6348e9bcfd8b8e79d.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Daraz" 
    },
    {
      ProductName:"Himu Shomogro",
      ProductShortCode: "HS1",
      Category: "Fiction",
      Price: 1750,
      Description: "A story of Himu.",
      ImageUrl: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/2fd336d10394_142147.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Rokomari" 
    },
    {
      ProductName:"Harry Potter",
      ProductShortCode: "HP1",
      Category: "Fiction",
      Price: 900,
      Description: "Story of a young wizard",
      ImageUrl: "https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Amazon" 
    },
    {
      ProductName:"Guide to Competitive Programming",
      ProductShortCode: "G2CP",
      Category: "Non Fiction",
      Price: 750,
      Description: "A Book for efficiently approaching in Competitive Programming",
      ImageUrl: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-319-72547-5",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Springer" 
    },
    {
      ProductName:"University Physics with Modern Physics",
      ProductShortCode: "think1",
      Category: "Non Fiction",
      Price: 1700,
      Description: "Book for theoretical physics",
      ImageUrl: "https://rukminim1.flixcart.com/image/850/1000/kupuljk0/book/g/1/o/university-physics-with-modern-physics-fifteenth-edition-by-original-imag7syz9ee8hzpq.jpeg?q=90",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Amazon" 
    },
    {
      ProductName:"Naruto",
      ProductShortCode: "NT",
      Category: "Fiction",
      Price: 350,
      Description: "A story about a young ninja",
      ImageUrl: "http://prodimage.images-bn.com/pimages/9781591161783_p0_v1_s1200x630.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Shounen Jump" 
    },
    {
      ProductName:"Hands on Machine Learning",
      ProductShortCode: "ML",
      Category: "Non Fiction",
      Price: 1050,
      Description: "Cognitive Errors and How they can be trained",
      ImageUrl: "https://images-na.ssl-images-amazon.com/images/I/81kv0vHJ0QL.jpg",
      IsBestAchieved: true,
      CreatedDate: "21/12/2022",
      Origin: "Amazon" 
    }
  ];
  constructor() { }
  getProducts(){
    return this.products; 
  }
}
