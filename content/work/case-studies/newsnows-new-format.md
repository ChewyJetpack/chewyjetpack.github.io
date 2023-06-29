---
title: NewsNow's New Format
hero: /img/nnnf.png
thumb: /img/newsnowlogo.jpg
category: Design & Development
year: 2020
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


  My role on this project was as the sole designer (later to hire a UI designer to join me), front end developer (working as part of the development team), and to work alongside the COO and CEO on product management.


  NewsNow's New Format consisted of the following stages:


  1. Initial, straight-to-code reskin of the existing design using the in-house containerised development platform (which has since had an open source release as [Dockside](https://dockside.io/))

  2. A round of data gathering, developing user satisfaction metrics, and [user research](/work/case-studies/newsnow-user-research-initiative)

  3. Full redesign (the New Format), including the creation of a ground-up atomic design system

  4. Front end rebuild in server-side rendered Vue.js with state management via VueX


  The project was full of new challenges, from honoring the features that loyal users relied on while balancing the introduction of new functionality, to developing the brand identity of the business, to developing our entirely new front end infrastructure.


  Overall, it was a brilliant product to work on.  I learned tons, and took great satisfaction in a quality piece of work that I devoted over two years to delivering, and that was by all measures a success.
summaryImages:
  - src: /img/1-z_7uafpbcxd-6i5g7tl49q.webp
    caption: The original NewsNow website from 1995
  - src: /img/www-screenshots.staging.newsnow.co-1.png
    caption: NewsNow's website as it was when I began work
  - src: /img/reskin.png
    caption: My initial, straight-to-code reskin of the NewsNow website
  - src: /img/screenshot-2023-06-23-at-22-01-38-newsnow-the-independent-news-discovery-platform.png
    caption: The New Format, top stories, on desktop
  - src: /img/screenshot-2023-06-23-at-22-02-28-world-news-latest-world-news-newsnow.png
    caption: The New Format, latest news, on desktop
  - src: /img/screenshot-2023-06-23-at-22-02-54-world-news-latest-world-news-newsnow.jpg
    caption: The New Format, top stories, on mobile
  - src: /img/screenshot-2023-06-23-at-22-03-07-world-news-latest-world-news-newsnow.jpg
    caption: The New Format, latest news, on mobile
background: >-
  Over its 20+ year history, NewsNow has been under constant, iterative
  development. As with any long-term project, especially one that had started
  life in 1997, sooner or later a refactor becomes necessary. In this case,
  refactoring the design was equally as important as refactoring the codebase.
  Additionally, there were plans to develop large improvements to the product’s
  functionality, which would necessarily disrupt aspects of both the codebase
  and the design. The existing design was simply not flexible enough to
  accommodate these new developments, meaning that the product was in need of a
  fresh coat of paint, and maybe a slight rethink of the walls and foundations
  underneath, on which these new features could be built.


  Beyond this, there was scope for a larger redesign, using the initial reskin as a foundational starting-point. The New Format, as we called it, would be a large undertaking, with many stages of iteration and research.
goals: >-
  The new design would need to give the product a much needed aesthetic lift,
  bringing the look and feel in line with contemporary standards. The design
  would also need to adhere to accessibility standards to ensure good usability,
  and while we set no rigid rule on WCAG accessibility standards, we aimed for
  AA accessibility where possible. The design would also need to be modular,
  flexible, and scalable, to accommodate new and complex features later on. 


  Finally, due to the diverse nature of the userbase, specifically those in English-speaking countries in the developing world, the product would need to retain its high level of browser compatibility, offering an improved experience to people browsing on feature phones, using Opera Mini with extreme data saving enabled.


  Of course throughout this process it was vitally important to ensure that our updates were beneficial to NewsNow's extremely large, loyal, and long-standing user base.
goalsImages:
  - src: /img/NNnewFormat.jpg
    caption: NewsNow's New Format
method: >-
  ### Reskin


  Beyond the overall implementation and refactor of the codebase, we also tested rigorously to ensure a high level of browser compatibility. The site is fully compatible with Opera Mini on feature phones, bar certain customisation features, and user accounts. Additionally, I devised a new alternative to the existing device-detection system which relied heavily on javascript and resulted in a complex matrix of site versions that required individual support. This system used a combination of media queries and support queries in CSS to accurately identify the devices needing special support, and unified site versions for other devices which previously had to be catered for individually, resulting in a much more easily maintainable system.


  ![NewsNow's brand palette](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*GA0hYK7JtIrDuk1F1IaUkQ.png)


  ### Research


  Embarking on a project of this scale, especially as a new member of the team, was no small feat. I took time to analyse the existing product in detail, speaking with members from all areas of the business, including development, editorial, and senior management, to get a full and comprehensive understanding of the business, the product, and the underlying technology.


  I felt it important to look at the product in the wider context of the industry, to see how we might want to position ourselves relative to other news aggregators, publishers, and social platforms. NewsNow is unique in this sense; it is a news aggregator that performs similar functions to those by the likes of Google, Apple, and Yahoo, but the number of individual topics and the number of headlines on a given page is more akin to the likes of social media platforms, such as Facebook, Twitter or Reddit. 


  Reddit, specifically, shares many parallels with NewsNow. Firstly, the Information Architecture is inherently similar: Long feeds of headlines, for a near-endless variety of topics, algorithmically sorted and able to be reordered by chronology, popularity, or relevance. In addition, Reddit had also recently embarked on a large redesign project, moving away from a dense, text-based layout that had accumulated a dedicated and loyal userbase, just like that of NewsNow. On the basis of these parallels, I embarked on a [competitor analysis project](/articles/posts/2019-11-21-analysis-reddits-2018-redesign) of sorts, to understand the ‘what’, ‘why’ and ‘how’ of Reddit’s redesign, charting their roadmap, digging up metrics, some of which were kindly supplied to me by subreddit moderators, and drawing actionable conclusions which we were able to implement in our own redesign process. 


  Once the initial reskin was complete, I embarked on a proper [user research initative](https://emilsmith.pro/work/case-studies/newsnow-user-research-initiative) to inform our larger redesign as part of the New Format. This helped to guide our product development process throughout the remainder of my time at NewsNow, and changed our position on crucial decisions, such as how to introduce imagery, whcih aspects of the existing layout were most important to our users, and what kinds of navigational tools were fundamental to the experience. In most cases, our assumptions were challenged, or outright disproved!


  ### Roadmap


  Equipped with the learnings from my research phase, I was able to work collaboratively with senior management to specify the scope and deliverables for the New Format, and within the development team to create a scope and task backlog for the technical requirements. We used Asana to manage the project, in which I constructed a set of timelines with clear dependencies between design and development, accounting for testing and refactoring, with a set launch date for our private, opt-in beta. We also took learnings from the Reddit case study to help inform our process, including the implementation of a system to manage user feedback, a public blog post to inform users of upcoming changes, and a staggered rollout to ensure feature-parity prior to the site-wide launch.


  The nature of this project did not necessarily lend itself to a strict goal-setting framework, as it was not intended to drive any specific metric, though we did employ rigorous in-app feedback tools so that we could check user satisfaction metrics throughout the rollout. The success of the project would be measured in our resulting ability to scale and develop the product in the future, and the satisfaction of our dedicated core user base.


  ### Design


  The design strategy for this project employed the use of atomic design principles to create a modular, component-based design system in Figma, with standardised tokens for measurements, colours, and typography, and context-agnostic, BEM-style components for all UI elements, templates, and pages. The design would be carefully tested against WCAG accessibility guidelines to ensure that colour contrast ratios, font sizes, and interactive elements were sufficiently distinguished and usable.


  I opted to work extremely closely with developers on the structure of the design system, since I would also be responsible for building a large proportion of the front end. We discussed stacks, tooling, and coding practices, and used those decisions to inform the kind of functionality we could include in the design. This cohesion between design and development is something I strive for in my work, and the result of this holistic approach is always hugely beneficial.


  The most significant visual update to the site was the introduction of imagery. NewsNow had never hosted images before in all its decades of life, and this was a huge update to the overall user experience, especially considering the perspective of users who had been devotedly scouring through lists of plain text headlines for years. Interestingly, the results of our user research suggested that most users would be very satisfied with an image-heavy, grid-based layout. However, there was a clear segment who absolutely preferred the old list style. This led us to introduce a layout mode toggle, enabling users to customise the experience for themselves.


  Fundamentally, the design would need to reflect NewsNow as a brand, which was a challenge in itself, since the business had not previously devoted much time to developing a formal brand identity. On this basis, I engaged with senior management over several brainstorming sessions to develop a preliminary brand guidelines document, which included the specification of brand values, identity, and ethos, as well as some visual elements such as typographic rules, a new colour palette, and logo guidelines. Of course, the visual aspects of this document were intended to be under constant evolution throughout the design process, the definition of the core brand values and identity was instrumental in subsequent design decisions.


  ### Development


  Implementation of the new design was a months-long process for the development team at NewsNow. I was responsible for the majority of the front-end build, working closely with a full-stack software developer on migrating from NewsNow’s bespoke, in-house, Perl-based templating system to our new stack, consisting of Perl on the back end, with server-side rendered Vue.js, complete with state management, on the front end. This was a fantastic system to work with; SSR allowed us to preserve our SEO juice, and VueX enabled us to create a seamless experience, client-side. 


  Components were developed to mirror the structure of the design system, using BEM syntax and isolated component templates. We took time and care to evaluate and audit the existing code, selecting chunks for preservation, removal, or refactoring. Through this process we also identified features that had gone unused for months or years and were able to simplify the site functionality by pruning such features from the product. 


  ### User Engagement


  In addition to the user research project bringing human-centred design into the operational process at NewsNow, we also made sure to engage users regularly throughout the rollout process.


  Upon completion of our initial reskin beta, I wrote up a [Medium piece, outlining our redesign](https://medium.com/newsnow/welcome-to-the-newsnow-redesign-925ccdf008f8) for our users. People who were offered the chance to take part in the beta were directed to this piece to read about the changes being made, the reasoning behind those changes, and the positive impacts those changes were designed to make. In addition, those who took part in the beta were prompted for NPS-style ratings of the new design and offered the opportunity to give in-app feedback, for which we guaranteed a response from the team. Through this feedback mechanic, we were able to assemble a research panel of loyal NewsNow users who agreed to take part in the upcoming research project ahead of the New Format.


  Throughout this process, we were able to gather valuable information which we used to iterate and improve on the design prior to our full launch, and it served as a valuable precedent for future research projects. We were also able to develop a previously absent rapport with our users; we responded to each and every piece of feedback we received, engaging directly with the people who used the product, and giving them the opportunity to contribute to the development of the product.
methodImages: []
results: >-
  Overall it is no understatement that this project was a resounding success. It
  was well-received by both users and stakeholders and has enabled us to work on
  the NewsNow site more efficiently and effectively than was previously
  possible. Also, we embarked on some very large-scale design and development
  projects which have been facilitated by the new design system and its ability
  to evolve naturally and holistically with each update.


  Additionally, the research and user-engagement measures undertaken within this project have helped to inform various subsequent projects, and paved the way for further rounds of user interviews, the development of user personas, and user demographic initiatives. User satisfaction metrics climbed steadily during my time at NewsNow.


  Given the opportunity to do it again, I believe the project could have benefitted from a more thorough preliminary user research phase, to gather clear and identifiable pain points in the existing UX, and potentially free up some of the initial restrictions surrounding legacy styles and layout, by way of being able to make informed decisions and improve upon the existing formula. Further to this, I would have liked to have set OKRs from the outset, based on such knowledge, to better evaluate the outcomes of the project. 


  That said, NewsNow's New Format is by far the largest, most complex, and highest quality piece of work I've accomplished to date. It was a fantastic opportunity to rapidly and thoroughly expand my skills in UX, design, product management, and javascript development all at once, over the course of an intensive two years. 


  The New Format is still currently in private beta, but I hope it will launch soon.
---
