import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Post {
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsoplaceholdeServiceService {
  posts: any[] = [];
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post:Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

}
