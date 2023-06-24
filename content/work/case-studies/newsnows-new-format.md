---
title: NewsNow's New Format
hero: /img/newlook-hero.jpg
thumb: /img/newlook-thumb.jpg
category: Design & Development
year: 2021
description: Building and scaling a design system, with implementation in
  Vue.js, for NewsNow
meta_description: Building and scaling a design system, with implementation in
  Vue.js, for NewsNow
summary: >-
  My first project upon starting at NewsNow was the largest redesign the product
  had seen in more than 15 years. This was one of the things that attracted me
  to this role, and it gave me a fantastic opportunity to take ownership of a
  large scale design project and attain a deep understanding of the product from
  the outset.


  Over its 20+ year history, NewsNow has been under constant, iterative development. As with any long-term project, especially one that had started life in 1997, sooner or later a refactor becomes necessary. In this case, refactoring the design was equally as important as refactoring the codebase. Additionally, there were plans to develop large improvements to the product’s functionality, which would necessarily disrupt aspects of both the codebase and the design. The existing design was simply not flexible enough to accommodate these new developments, meaning that the product was in need of a fresh coat of paint, and maybe a slight rethink of the walls and foundations underneath, on which these new features could be built.


  My role on this project was as the sole designer, front end developer (working as part of the development team), and to work alongside the COO and CEO on product management.
goals: The new design would need to give the product a much needed aesthetic
  lift, bringing the look and feel in line with contemporary standards. The
  design would also need to adhere to accessibility standards to ensure good
  usability, and while we set no rigid rule on WCAG accessibility standards, we
  aimed for AA accessibility where possible. The design would also need to be
  modular, flexible, and scalable, to accommodate new and complex features later
  on. Finally, due to the diverse nature of the userbase, specifically those in
  English-speaking countries in the developing world, the product would need to
  retain its high level of browser compatibility, offering an improved
  experience to people browsing on feature phones, using Opera Mini with extreme
  data saving enabled.
method: >-
  #### Research


  Embarking on a project of this scale, especially as a new member of the team, was no small feat. I took time to analyse the existing product in detail, speaking with members from all areas of the business, including development, editorial, and senior management, to get a full and comprehensive understanding of the business, the product, and the underlying technology.


  Beyond this, I felt it important to look at the product in the wider context of the industry, to see how we might want to position ourselves relative to other news aggregators, publishers, and social platforms. NewsNow is unique in this sense; it is a news aggregator that performs similar functions to those by the likes of Google, Apple, and Yahoo, but the number of individual topics and the number of headlines on a given page is more akin to the likes of social media platforms, such as Facebook, Twitter or Reddit. 


  Reddit, specifically, shares many parallels with NewsNow. Firstly, the Information Architecture is inherently similar: Long feeds of headlines, for a near-endless variety of topics, algorithmically sorted and able to be reordered by chronology, popularity, or relevance. In addition, Reddit had also recently embarked on a large redesign project, moving away from a dense, text-based layout that had accumulated a dedicated and loyal userbase, just like that of NewsNow. On the basis of these parallels, I embarked on a competitor analysis project of sorts, to understand the ‘what’, ‘why’ and ‘how’ of Reddit’s redesign, charting their roadmap, digging up metrics, some of which were kindly supplied to me by subreddit moderators, and drawing actionable conclusions which we were able to implement in our own redesign process. 


  At this stage, I would have liked to conduct some user research, to build an understanding of user demographics, usage habits, motivations, and pain points, but unfortunately, this was not something that had been done on the product before, and thus a lack of time and resources made this impractical. We did, however, manage to conduct a series of user interviews prior to the initial roll-out, which helped inform some later design decisions.




  #### Roadmap


  Equipped with the learnings from my research phase, I was able to work collaboratively with senior management to specify the scope and deliverables for the design project, and within the development team to create a scope and task backlog for the technical requirements. We used Asana to manage the project, in which I constructed a set of timelines with clear dependencies between design and development, accounting for testing and code cleanup, with a set launch date for our private, opt-in beta. We also took learnings from the Reddit case study to help inform our process, including the implementation of a system to manage user feedback, a public blog post to inform users of upcoming changes, and a staggered rollout to ensure feature-parity prior to the site-wide launch.


  The nature of this project did not necessarily lend itself to a strict goal-setting framework, as it was not intended to drive any specific metric. Rather, the success of the project would be measured in our resulting ability to scale and develop the product in the future, and the retention of our core user base. 




  #### Design


  The design strategy for this project was rather straightforward, conceptually. Firstly, I planned to employ atomic design principles to create a modular, component-based design system in Figma, with standardised tokens for measurements, colours, and typography, and context-agnostic, BEM-style components for all UI elements, templates, and pages. Secondly, the design would be carefully tested against WCAG accessibility guidelines to ensure that colour contrast ratios, font sizes, and interactive elements were sufficiently distinguished and usable.




  #### Branding


  Fundamentally, the design would need to reflect NewsNow as a brand, which was a challenge in itself, since the business had not previously devoted much time to developing a formal brand identity. On this basis, I engaged with senior management over several brainstorming sessions to develop a preliminary brand guidelines document, which included the specification of brand values, identity, and ethos, as well as some visual elements such as typographic rules, a new colour palette, and logo guidelines. Of course, the visual aspects of this document were intended to be under constant evolution throughout the design process, the definition of the core brand values and identity was instrumental in subsequent design decisions.




  #### User Interface


  The NewsNow UI design posed a number of distinct challenges. Firstly, the site was almost entirely text-based; headlines were listed alongside publication names, with metadata such as timestamps and some interactive controls, but with no imagery. In addition, the site used relatively small font sizes and there was a high value attributed to content density. Users who had been using the site for many years had become accustomed to the deep, dense feeds of headlines, through which they could scan for new information on their areas of interest. On this basis, adjustments to headline fonts, font sizes, and overall density were, for the most part, off-limits. Secondly, the existing three-column layout (side-navigation, central content column, sidebar) was to be retained in its entirety. On this basis, modernising the look and feel of the product was to be achieved only in part by this project, and completed later with large-scale changes to the product format.


  My approach to handling the limitations of the project, the richness of the product feature-set, and the need for radical future scalability, was to put together an atomic design system, which could be mirrored within the codebase, using modular components and substituting inheritance with modifiers. After auditing the existing codebase for all font sizes, colours, and other tokens, I developed a stripped-back list of basic building blocks, and gradually worked my way up through each level of the component structure, from buttons and icons up to page templates. From this, I re-created various page templates using the new components, to compare directly with their existing counterparts. Careful attention was paid to font-sizes and colour contrast ratios to ensure the site was accessible and usable. 


  After many rounds of presentation, feedback, iteration, and prototyping, I was given the green light by senior management to rally the development team and begin work on the build.


  ![](https://web.archive.org/web/20210618232610im_/https://emilsmith.pro/uploads/1_6_S_Bpi_Or_H1_Nca_FVMY_Gfm9_w_d7d3ce1000.png)


  #### Development


  Implementation of the new design was a months-long process for the development team at NewsNow. I was responsible for the majority of the front-end build, working closely with a full-stack software developer on templating in NewsNow’s bespoke, in-house, Perl-based templating system, SCSS, and JS. Components were developed to mirror the structure of the design system, using BEM syntax and isolated component templates.


  The nature of the templating system necessitated constant collaboration with all members of the development team, as well as many remote, peer-programming sessions to work through various issues and code reviews. In addition to the new components, we heavily refactored large areas of the codebase to improve page load speeds and overall performance, as well as maintainability. We took time and care to evaluate and audit the existing code, selecting chunks for preservation, removal, or refactoring. Through this process we also identified features that had gone unused for months or years and were able to simplify the site functionality by pruning such features from the product. 


  Beyond the overall implementation and refactor of the codebase, we also tested rigorously to ensure a high level of browser compatibility. The site is fully compatible with Opera Mini on feature phones, bar certain customisation features, and user accounts. Additionally, I devised a new alternative to the existing device-detection system which relied heavily on javascript and resulted in a complex matrix of site versions that required individual support. This system used a combination of media queries and support queries in CSS to accurately identify the devices needing special support, and unified site versions for other devices which previously had to be catered for individually, resulting in a much more easily maintainable system.


  Beyond the development phase, we also devoted significant time to cleaning up the codebase, closing redundant issues, and removing unused code. 




  #### User Engagement


  While user-research wasn’t within the scope of this project, I did endeavor to bring human-centred design thinking into the process as much as possible. Upon completion of our initial beta, I wrote up a Medium piece, outlining our redesign for our users, which we promoted alongside the limited, opt-in beta so that people who were offered the chance to take part in the beta were able to read about the changes being made, the reasoning behind those changes, and the positive impacts those changes were designed to make. In addition, those who took part in the beta were prompted for NPS-style ratings of the new design and offered the opportunity to give in-app feedback, for which we guaranteed a response from the team. Through this feedback mechanic, we were able to assemble a research panel of loyal NewsNow users who agreed to take part in upcoming research, and finally, we engaged with those users, as well as some people who were new to the site, in a round of in-person interviews, where we gathered qualitative information on their impressions and experiences whilst using the new site. 


  Throughout this process, we were able to gather valuable information which we used to iterate and improve on the design prior to our full launch, and it served as a valuable precedent for future research projects. We were also able to develop a previously absent rapport with our users; we responded to each and every piece of feedback we received, engaging directly with the people who used the product, and giving them the opportunity to contribute to the development of the product.
results: >-
  Overall it is no understatement that this project was a resounding success. It
  was well-received by both users and stakeholders and has enabled us to work on
  the NewsNow site more efficiently and effectively than was previously
  possible. Also, we embarked on some very large-scale design and development
  projects which have been facilitated by the new design system and its ability
  to evolve naturally and holistically with each update.


  Additionally, the research and user-engagement measures undertaken within this project have helped to inform various subsequent projects, and paved the way for further rounds of user interviews, the development of user personas, and user demographic initiatives.


  Given the opportunity to do it again, I believe the project could have benefitted from a preliminary user research phase, to gather clear and identifiable pain points in the existing UX, and potentially free up some of the initial restrictions surrounding legacy styles and layout, by way of being able to make informed decisions and improve upon the existing formula. Further to this, I would have liked to have set OKRs from the outset, based on such knowledge, to better evaluate the outcomes of the project. 


  Personally, I feel really satisfied with my contributions to the project. It challenged all areas of my skillset and served as an invaluable learning opportunity. I was able to successfully balance user experience, design, development and business goals in a very holistic way, to unify and steer all aspects of the project toward a common goal.
---
