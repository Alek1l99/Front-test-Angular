import { Component, OnInit  } from '@angular/core';
import { JsoplaceholdeServiceService } from '../services/jsoplaceholde-service.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent {
  posts: any[] = [];
  newPost = {
    title: '',
    body: ''
  };


  constructor(private service: JsoplaceholdeServiceService) {}
  ngOnInit() {
    this.getPosts();
  }

  // Llamar al método getPosts() cuando necesites obtener posts
  getPosts() {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts as any[];;
    });
  }

  // Llamar al método addPost() cuando necesites agregar un post
  addPost() {
    this.service.addPost(this.newPost).subscribe(result => {
      // Limpia los campos del formulario
      this.newPost.title = '';
      this.newPost.body = '';

      // Obtiene los posts actualizados
      this.getPosts();
    });
  }
}
