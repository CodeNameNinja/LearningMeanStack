import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
@Component({
    selector:'app-post-create',
    templateUrl:'posts-create.component.html',
    styleUrls:['posts-create.component.css']
})

export class PostCreateComponent{
  
   
    constructor(private postsService:PostService){

    }
    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
       
        this.postsService.addPost(form.value.title,form.value.content);
        form.resetForm();
    }
}