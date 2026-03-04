import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    if (id) {
      const result = this.articleService.getArticleById(id);

      if (result) {
        this.contentTitle = result.title;
        this.contentDescription = result.description;
        this.photoCover = result.photoCover;

        this.titleService.setTitle(`${this.contentTitle} | Marvel Blog`);
        this.metaService.updateTag({ name: 'description', content: this.contentDescription });
      }
    }
  }

}
