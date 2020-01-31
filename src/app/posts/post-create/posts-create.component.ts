import { Component } from '@angular/core';

@Component({
    selector:'app-post-create',
    templateUrl:'posts-create.component.html',
    styleUrls:['posts-create.component.css']
})

export class PostCreateComponent{
    enteredValue = "";
    newPost = "NO CONTENT"

    onAddPost(){
        this.newPost = this.enteredValue;
    }
}