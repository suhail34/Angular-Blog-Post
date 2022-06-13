import { Observable } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  blogPost$: Observable<any> | undefined

  i = 0
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        // console.log(id)
        this.blogPost$ = this.contentfulService.getEntryById(id);
        // console.log(this.blogPost$)
        // console.log(this.blogPost$)
      }
    )
  }
}
