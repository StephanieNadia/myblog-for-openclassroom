import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


	constructor() { 
		const mydate = new Date ();
		for (var i = this.posts.length - 1; i >= 0; i--) {
			this.posts[i].created_at = mydate;
		}
	}

	posts = [
	{
	  title: 'Mon premier post',
	  content: 'Voici le contenu de mon premier post.',
	  loveIts: 0,
	  created_at: new Date()

	},
	{
	  title: 'Mon deuxième post',
	  content: 'Voici le contenu de mon deuxième post.',
	  loveIts: 0,
	  created_at: new Date()

	},
	{
	  title: 'Mon troisième post',
	  content: 'Voici le contenu de mon troisième post.',
	  loveIts: 0,
	  created_at: new Date()

	}
	];


	ngOnInit() {
	}

}
