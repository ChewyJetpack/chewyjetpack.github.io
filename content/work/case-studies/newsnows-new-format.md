---
title: NewsNow's New Format
hero: /img/nncover.png
thumb: /img/untitled-4.png
category: Design & Development
year: 2020
description: Redesigning a 24-year-old news platform serving millions whilst keeping loyal users happy
meta_description: Redesigning a 24-year-old news platform serving millions whilst keeping loyal users happy
summary: >-
  I inherited a 24-year-old news platform that looked like it was built in 1997. Because it was. The challenge both to make it look contemporary, as well as to ensure it was doing so without breaking workflows that millions of users relied on daily.

  
  My role: sole designer initially, front-end developer building the Vue.js implementation, [user researcher](https://emilsmith.pro/work/case-studies/newsnow-user-research-initiative), and product strategist working directly with CEO/COO.
summaryImages:
  - src: /img/1-z_7uafpbcxd-6i5g7tl49q.webp
    caption: The original NewsNow website from 1995
  - src: /img/www-screenshots.staging.newsnow.co-1.png
    caption: NewsNow's website when I inherited it
  - src: /img/reskin.png
    caption: My initial straight-to-code reskin
  - src: /img/screenshot-2023-06-23-at-22-01-38-newsnow-the-independent-news-discovery-platform.png
    caption: The New Format - final result on desktop
  - src: /img/screenshot-2023-06-23-at-22-02-28-world-news-latest-world-news-newsnow.png
    caption: Latest news view - maintaining information density
  - src: /img/screenshot-2023-06-23-at-22-02-54-world-news-latest-world-news-newsnow.jpg
    caption: Mobile experience - first time ever
  - src: /img/screenshot-2023-06-23-at-22-03-07-world-news-latest-world-news-newsnow.jpg
    caption: Compact view for power users
background: >-
  Beyond the visual lift, there was scope for a complete redesign using an initial reskin as the starting point. The New Format would be a large undertaking with multiple stages of iteration and research.
goals: >-
  The new design needed to give the product an aesthetic lift whilst bringing it in line with contemporary standards. It also needed to adhere to accessibility standards (we aimed for WCAG AA where possible) and be modular, flexible, and scalable for future features.
  Crucially, due to the diverse nature of the userbase, particularly users in English-speaking countries in the developing world, the product needed to retain high browser compatibility, offering improved experiences for people browsing on feature phones using Opera Mini with extreme data saving enabled.
goalsImages:
  - src: /img/NNnewFormat.jpg
    caption: NewsNow's New Format
method: >-
  ### Initial Reskin and Research
  
  I started with a straight-to-code reskin of the existing design using the in-house containerised development platform. This gave us a foundation whilst I conducted the company's first user research in 25 years which I have detailed in [another post](https://emilsmith.pro/work/case-studies/newsnow-user-research-initiative).
  
  The research revealed key insights about our three distinct user communities and their different motivations, which fundamentally informed the full redesign approach.

  
  ### Competitor Analysis: Learning from Reddit's Mistakes
  
  NewsNow shared many parallels with Reddit - long feeds of headlines across endless topics, algorithmically sorted. Reddit had recently undergone a major redesign, so I conducted a thorough analysis of their process, outcomes, and user backlash to inform our approach.
  
  The key lesson was that users weren't resistant to change - they were terrified of losing functionality.

  
  Instead of forcing one design on everyone, I created multiple layout modes:

  - **Card View:** Modern, image-heavy for newcomers

  - **Classic View:** Original list density for power users  

  - **Compact View:** Ultra-high density for headline scanning

  
  This was NewsNow's first time hosting images after decades of text-only headlines. The research showed most users would embrace this—as long as they could access their preferred workflows.

  
  ### Design System: Atomic Principles

  
  I employed atomic design principles to create a modular, component-based system in Figma with standardised tokens for measurements, colours, and typography. Components used BEM-style naming for all UI elements, templates, and pages.

  
  Working closely with developers on the system structure was crucial since I'd also be building much of the front-end. We discussed stacks, tooling, and coding practices, using those decisions to inform the functionality we could include.

  ### Technical Implementation: Vue.js on Legacy Infrastructure

  I rebuilt the entire front-end in server-side rendered Vue.js whilst maintaining the existing Perl backend. This wasn't a simple framework conversion—I had to:

  - Maintain SEO performance for millions of indexed pages

  - Ensure compatibility with Opera Mini on feature phones

  - Create a component system developers would actually want to use

  - Support browsers and devices from a decade ago

  
  Solution: Progressive enhancement and CSS feature queries to serve appropriate experiences without breaking anything. I also devised a new device-detection system using media queries and support queries, replacing the complex JavaScript-heavy matrix that previously required individual support for each device type.

  ### Brand Development

  
  Since NewsNow had never devoted much time to formal brand identity, I worked with senior management through brainstorming sessions to develop preliminary brand guidelines. This included brand values, identity, ethos, plus visual elements like typographic rules, colour palette, and logo guidelines.

  
  ### Rollout Strategy

  
  Learning from Reddit's mistakes, we implemented:

  - Transparent communication including a public [Medium post explaining changes](https://medium.com/newsnow/welcome-to-the-newsnow-redesign-925ccdf008f8)

  - Built-in feedback mechanisms with guaranteed team responses

  - Staggered rollout ensuring feature parity before site-wide launch

  - Maintaining old design as fallback option

methodImages: []
results: >-
  The redesign was successful by every measure. User satisfaction metrics improved steadily throughout rollout. We received positive feedback from both new users (who found it more approachable) and power users (who retained access to their preferred workflows).
  
  The design system enabled rapid iteration on new features. The Vue.js architecture made development faster and more predictable. The research programme became an ongoing capability informing all subsequent product decisions.
  
  Most importantly, we'd built a foundation that could evolve. We transformed NewsNow from engineering-led decisions to user-informed design, from assumptions to evidence, from reactive changes to strategic planning.
  
  Looking back, I'd have conducted user research even earlier to challenge more legacy assumptions from the start. But given the constraints, this was the largest, most complex, and most successful project I'd delivered at that point.
---
