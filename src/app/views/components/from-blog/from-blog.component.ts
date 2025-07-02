import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IFromBlog } from './models/from-blog.model';
import { FROM_BLOG } from './constants/from-blog.constant';

@Component({
	selector: 'app-from-blog',
	standalone: true,
	imports: [TranslateModule, CommonModule],
	templateUrl: './from-blog.component.html',
	styleUrl: './from-blog.component.scss'
})
export class FromBlogComponent {

	FROM_BLOG: IFromBlog[] = FROM_BLOG;

	constructor(public translate: TranslateService,) {
		this.translate.addLangs(['fr', 'en', 'es']);
		this.translate.setDefaultLang('es');
		this.translate.use('es');
	}

}
