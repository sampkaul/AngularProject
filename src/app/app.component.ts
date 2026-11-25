import {Component,computed,signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
interface Book {id:number;title:string;author:string;category:string;price:number;rating:number;cover:string;tag?:string;}
@Component({selector:'app-root',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./app.component.html'})
export class AppComponent {
 books:Book[]=[
 {id:1,title:'The Midnight Library',author:'Matt Haig',category:'Fiction',price:399,rating:4.8,tag:'Bestseller',cover:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=85'},
 {id:2,title:'Atomic Habits',author:'James Clear',category:'Self-help',price:449,rating:4.9,tag:'Popular',cover:'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=85'},
 {id:3,title:'Educated',author:'Tara Westover',category:'Memoir',price:529,rating:4.7,cover:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=85'},
 {id:4,title:'The Psychology of Money',author:'Morgan Housel',category:'Business',price:379,rating:4.8,tag:'Staff pick',cover:'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=85'},
 {id:5,title:'Where the Crawdads Sing',author:'Delia Owens',category:'Fiction',price:425,rating:4.6,cover:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&q=85'},
 {id:6,title:'Deep Work',author:'Cal Newport',category:'Productivity',price:399,rating:4.7,cover:'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=85'},
 {id:7,title:'Ikigai',author:'Héctor García',category:'Self-help',price:299,rating:4.5,cover:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=85'},
 {id:8,title:'The Lean Startup',author:'Eric Ries',category:'Business',price:499,rating:4.4,cover:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=85'}];
 categories=['All books','Fiction','Self-help','Business','Memoir','Productivity'];
 search=''; category=signal('All books'); sort=signal('featured'); cartOpen=signal(false);
 cart=signal<{book:Book,qty:number}[]>([]); wishes=signal<number[]>([]); notice=signal('');
 count=computed(()=>this.cart().reduce((n,x)=>n+x.qty,0));
 total=computed(()=>this.cart().reduce((n,x)=>n+x.book.price*x.qty,0));
 filtered=computed(()=>{let q=this.search.trim().toLowerCase();let a=this.books.filter(b=>(this.category()==='All books'||b.category===this.category())&&(!q||`${b.title} ${b.author} ${b.category}`.toLowerCase().includes(q)));if(this.sort()==='low')a=[...a].sort((x,y)=>x.price-y.price);if(this.sort()==='high')a=[...a].sort((x,y)=>y.price-x.price);if(this.sort()==='rating')a=[...a].sort((x,y)=>y.rating-x.rating);return a;});
 add(b:Book){this.cart.update(a=>{let old=a.find(x=>x.book.id===b.id);return old?a.map(x=>x.book.id===b.id?{...x,qty:x.qty+1}:x):[...a,{book:b,qty:1}];});this.cartOpen.set(true);this.notice.set('');}
 qty(id:number,d:number){this.cart.update(a=>a.map(x=>x.book.id===id?{...x,qty:x.qty+d}:x).filter(x=>x.qty>0));}
 remove(id:number){this.cart.update(a=>a.filter(x=>x.book.id!==id));}
 wish(id:number){this.wishes.update(a=>a.includes(id)?a.filter(x=>x!==id):[...a,id]);}
 hasWish(id:number){return this.wishes().includes(id);}
 checkout(){this.notice.set('Demo checkout: connect a payment provider and backend to accept real orders.');}
 scroll(){document.getElementById('books')?.scrollIntoView({behavior:'smooth'});}
}