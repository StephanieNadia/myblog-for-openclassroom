import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle : string;
	@Input() postContent : string;
	@Input() postLoveIts: number;
	@Input() postCreated_at: Date; 

	constructor() { }

	ngOnInit() {
	}

	getColor() {
		if(this.postLoveIts > 0) {
		  return 'green';
		} else if(this.postLoveIts < 0) {
		  return 'red';
		} else if(this.postLoveIts === 0) {
		  return 'black';
		}
	}

	onLoveIts(){
		this.postLoveIts =  this.postLoveIts + 1;
		
	}

	onDontLoveIts(){
		this.postLoveIts =  this.postLoveIts - 1;
		
	}
}
