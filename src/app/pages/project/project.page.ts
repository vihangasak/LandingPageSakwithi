import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link'
import { FeatureProject } from '@pages/project/components/feature-project'
import { OtherProject } from '@pages/project/components/other-project'
@Component({
  selector: 'project-page',
  imports: [PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <h1
      class="text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Projects
    </h1>
    <feature-project/>
    <!-- <h1
      class="text-brand-primary text-center text-3xl font-semibold tracking-tight lg:text-2xl lg:leading-snug dark:text-white">
      Other Hobby Projects
    </h1> -->
    <other-project/>
`
})
export class ProjectPage {
  projectService = inject(ProjectService);
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
