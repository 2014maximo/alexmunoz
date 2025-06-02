import { Component, ModuleWithProviders } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgCircleProgressModule],
  providers: [
    (NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }) as ModuleWithProviders<NgCircleProgressModule>).providers!,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
