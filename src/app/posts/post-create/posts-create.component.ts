import { Component } from '@angular/core';

@Component({
    selector:'app-post-create',
    templateUrl:'posts-create.component.html'
})

export class PostCreateComponent{
    enteredValue = "";
    newPost = "NO CONTENT"

    onAddPost(){
        this.newPost = this.enteredValue;
    }
}