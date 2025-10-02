---
title: NewsNow's New Format
hero: /img/nncover.png
thumb: /img/untitled-4.png
category: Design & Development
year: 2020
description: Redesigning a 24-year-old news platform serving millions whilst keeping loyal users happy
meta_description: Redesigning a 24-year-old news platform serving millions whilst keeping loyal users happy
impact: >-
  Transformed a 24-year-old platform from "dystopian Craigslist" into a modern, accessible news aggregator whilst improving user satisfaction. Established design as a strategic function, shifting NewsNow from engineering-led assumptions to evidence-based, user-informed decisions.
summary: >-
  I inherited a 24-year-old news platform that looked like it was built in 1997. Because it was. The challenge: make it contemporary without breaking workflows that millions of users relied on daily.

  
  **My role:** Sole designer initially (later hired and managed a UI designer), front-end developer building the Vue.js implementation, [user researcher](https://emilsmith.pro/work/case-studies/newsnow-user-research-initiative), and product strategist working directly with CEO/COO.


  **The impact:** I transformed NewsNow from engineering-led decisions to user-informed design, from assumptions to evidence, from reactive changes to strategic planning.
summaryImages:
  - src: /img/www-screenshots.staging.newsnow.co-1.png
    caption: NewsNow's website when I inherited it - functional but dated
  - src: /img/screenshot-2023-06-23-at-22-01-38-newsnow-the-independent-news-discovery-platform.png
    caption: The New Format - final result on desktop
background: >-
  Over 20+ years of constant iteration, NewsNow had accumulated technical debt and design decisions that made sense in 1997 but not in 2019. The existing design wasn't flexible enough to accommodate planned improvements to functionality. We needed both a fresh coat of paint and a rethink of the foundations underneath.
backgroundImages:
  - src: /img/1-z_7uafpbcxd-6i5g7tl49q.webp
    caption: The original NewsNow website from 1995 - where it all began
goals: >-
  The new design needed to:


  - Give the product an aesthetic lift, bringing it in line with contemporary standards
  - Adhere to WCAG AA accessibility standards where possible
  - Be modular, flexible, and scalable to accommodate complex future features
  - Retain high browser compatibility for diverse users in developing countries
  - Work on feature phones using Opera Mini with extreme data saving enabled
  - Most critically: improve the experience without alienating millions of loyal, long-standing users
goalsImages: []
method: >-
  ### Initial Reskin and Research Foundation
  
  I started with a straight-to-code reskin of the existing design using NewsNow's in-house containerised development platform. This gave us a stable foundation whilst I conducted the company's [first user research initiative in 25 years](https://emilsmith.pro/work/case-studies/newsnow-user-research-initiative).
methodImages:
  - src: /img/reskin.png
    caption: My initial straight-to-code reskin - modernising whilst preserving familiarity

method2: >-
  The research was more revealing than expected. Over 6000+ survey responses across the UK, US, and Nigeria, plus moderated interviews, uncovered something crucial: **NewsNow wasn't one global platform—it was three distinct regional products.**


  - **UK users:** Predominantly older, obsessed with football, wanted dense headline lists for granular coverage
  - **US users:** Mixed demographics, broader interests across politics, business, and entertainment  
  - **Nigerian users:** Younger, mobile-only on feature phones via Opera Mini, following Premier League football and Nigerian politics


  This fundamentally informed every design decision that followed.

  
  ### Competitor Analysis: Learning from Reddit's Mistakes
  
  NewsNow shared many parallels with Reddit: long feeds of headlines across endless topics, algorithmically sorted, with a dedicated userbase attached to specific workflows. Reddit had recently undergone a major redesign that generated massive backlash, so I conducted a thorough analysis of their process, outcomes, and user reactions.

  
  > **The key lesson: users weren't resistant to change—they were terrified of losing functionality.**

  
  Reddit had forced a single new design on everyone. I took a different approach: instead of choosing between modern and classic designs, I built both—plus a third option.


  **Three layout modes:**

  - **Card View:** Modern, image-heavy for newcomers comfortable with social media patterns

  - **Classic View:** Original list density for power users with established workflows  

  - **Compact View:** Ultra-high density for users who wanted to scan maximum headlines quickly

  
  This was NewsNow's first time hosting images after decades of text-only headlines. The research showed most users would embrace this—as long as we preserved access to their preferred workflows.
method2Images:
  - src: /img/screenshot-2023-06-23-at-22-02-28-world-news-latest-world-news-newsnow.png
    caption: Latest news view on desktop - maintaining information density for power users
  - src: /img/screenshot-2023-06-23-at-22-03-07-world-news-latest-world-news-newsnow.jpg
    caption: Compact view on mobile - ultra-high density for headline scanning

method3: >-
  ### Design System: Atomic Principles

  
  I employed atomic design principles to create a modular, component-based system in Figma with standardised tokens for measurements, colours, and typography. Components used BEM-style naming conventions for all UI elements, templates, and pages. The design was carefully tested against WCAG accessibility guidelines to ensure sufficient colour contrast ratios, font sizes, and interactive element distinction.


  Working closely with the senior front-end developer on the system structure was crucial since I'd also be building much of the implementation. We collaborated as equals on discussions around stacks, tooling, and coding practices, using those decisions to inform the functionality we could include in the design.

  
  ### Technical Implementation: Vue.js on Legacy Infrastructure

  
  I rebuilt the entire front-end in server-side rendered Vue.js with VueX state management whilst maintaining the existing Perl backend. This wasn't a simple framework conversion—the technical constraints were significant:


  - Maintain SEO performance for millions of indexed pages

  - Ensure compatibility with Opera Mini on feature phones (for Nigerian users on limited data)

  - Create a component system that developers would actually want to use

  - Support browsers and devices from a decade ago

  
  **My solution:** Progressive enhancement with CSS feature queries to serve appropriate experiences without breaking anything. I also devised a new device-detection system using media queries and support queries in CSS, replacing the complex JavaScript-heavy matrix that previously required individual support for each device type. This dramatically simplified maintenance.
method3Images:
  - src: /img/screenshot-2023-06-23-at-22-02-54-world-news-latest-world-news-newsnow.jpg
    caption: Mobile experience - NewsNow's first proper mobile design in 24 years

method4: >-
  ### Brand Development

  
  Since NewsNow had never devoted time to formal brand identity, I worked with senior management through multiple brainstorming sessions to develop preliminary brand guidelines. This included defining brand values, identity, and ethos, plus visual elements like typographic rules, a new colour palette, and logo guidelines. The visual aspects were intended to evolve throughout the design process, but defining core brand values was instrumental in subsequent design decisions.

  
  ### Rollout Strategy

  
  Learning from Reddit's mistakes, I developed a transparent rollout approach:


  - Published a [Medium post explaining the changes and reasoning](https://medium.com/newsnow/welcome-to-the-newsnow-redesign-925ccdf008f8)

  - Implemented in-app feedback mechanisms with Hotjar, with responses guaranteed from myself and the Editor in Chief

  - Staggered rollout ensuring feature parity before site-wide launch

  - Maintained the old design as a fallback option (old.reddit.com style)


  The feedback inbox was shared between myself and editorial, since much of what we received concerned content rather than design. This collaborative approach helped us respond quickly and appropriately to user concerns.
method4Images: []
results: >-
  The redesign succeeded by every measure we could track. User satisfaction metrics improved steadily throughout rollout via our in-app feedback mechanisms. We received positive feedback from both new users (who found it more approachable) and power users (who retained access to their preferred workflows).

  
  > **We'd built a foundation that could evolve.** The design system enabled rapid iteration on new features. The Vue.js architecture made development faster and more predictable. The research programme became an ongoing capability informing all subsequent product decisions.

  
  Most importantly, I transformed NewsNow from engineering-led decisions to user-informed design, from assumptions to evidence, from reactive changes to strategic planning. Design became a strategic function rather than an afterthought.

  
  **Looking back:** I'd have conducted user research even earlier to challenge more legacy assumptions from the start. But given the constraints—redesigning a 24-year-old platform serving millions whilst maintaining backwards compatibility with feature phones—this was the largest, most complex, and highest quality piece of work I'd delivered at that point in my career.
resultsImages:
  - src: /img/screenshot-2023-06-23-at-22-01-38-newsnow-the-independent-news-discovery-platform.png
    caption: The final result - modern, accessible, and user-informed
  - src: /img/screenshot-2023-06-23-at-22-02-28-world-news-latest-world-news-newsnow.png
    caption: Latest news view maintaining the information density users relied on
  - src: /img/screenshot-2023-06-23-at-22-02-54-world-news-latest-world-news-newsnow.jpg
    caption: Mobile experience working on feature phones and modern devices alike
  - src: /img/screenshot-2023-06-23-at-22-03-07-world-news-latest-world-news-newsnow.jpg
    caption: Compact view for users who wanted maximum headline density
---