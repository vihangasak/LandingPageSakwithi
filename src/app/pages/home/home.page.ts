import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { InWork } from '@pages/home/components/in-work/in-work';
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro, LanguageTools, InWork],
  template: `
    @defer(on immediate){
      <intro/>
      <expertise-area/>
      <language-tools/>
      <in-work/>
    }@placeholder {
    }
  `
})
export class HomePage {
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Sri Lanka. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'nimsara vihanga sakwithi',
        'vihanga sakwithi',
        'nimsaravihangasakwithi',
        'software engineer',
        'srilanka',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
}
