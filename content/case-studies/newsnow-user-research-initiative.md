---
title: "NewsNow: User Research Initiative"
hero: /img/splash_81fae7f330.jpg
category: UX Research
year: 2020
description: A long-running user research initiative, consisting of design,
  prototyping, conducting surveys, analysis, and user interviews
meta_description: A long-running user research initiative, consisting of design,
  prototyping, conducting surveys, analysis, and user interviews
summary: >-
  During my role at NewsNow, I initiated and led a long-running user research
  initiative. Design methodology at NewsNow had traditionally been informed by
  engineering, along with A/B testing paradigms and voluntary user feedback.


  This project was a huge undertaking, consisting of design, prototyping, conducting surveys, analysis, and user interviews, and collating all of our learnings into both actionable tasks, and updated internal processes around the product lifecycle.


  Not only was this an incredibly eye-opening project, from speaking directly with users such as high-flying corporate professionals from the States, and 3G-wielding teenagers on the streets of Nigeria, to stretching the limits of what hi-fi prototyping is capable of, but it resulted in some fantastic learnings for the entire business.
background: >-
  Existing understanding of the makeup of NewsNow’s userbase and their
  motivations had been inferred from A/B test results for features over a span
  of many years, and while this served as a valuable starting point, it was far
  from concrete. 


  There was, however, a large appetite within the team, including senior management, editorial, and development team members, to better understand our users. Given this appetite, and a product roadmap brimming with large-scale design and development projects, it seemed right to make strides towards uncovering our userbase and giving our users a seat at the table. I put together a plan of action and advocated for human-centred design principles as part of a more efficient and effective product design and development process.
goals: >-
  The purpose of this initiative was to introduce complementary, strength-based
  research and testing processes to lay the foundation of human-centred design
  principles and to facilitate a more effective product lifecycle in the future.


  Moreover, with a full product redesign in the works, we had a direct need to fulfil in terms of testing that design with real people, who were representative of our core userbase demographics. The problem was that we had very limited data on who our core userbase actually was, since no previous research had been done in the company's twenty-five-year history. 


  This resulted in a clear set of goals:


  1. Identify core readership demographics

  2. Test our new design with real people to ensure it was rock-solid before release

  3. Implement processes to facilitate further research
method: >-
  The initiative was implemented via my own twist on Design Thinking
  methodology. The reason for not following the *Empathise, Define, Ideate,
  Prototype, Test* process to the letter was that the product was not yet in a
  state where it would have been conducive to iterative product design
  processes. We were mid-redesign, developing a new design system to pave the
  way for a more iterative workflow, but we needed to ensure that the new design
  was going to be well received by our users and that any major potential pain
  points could be worked out prior to release. 


  My resulting methodology went as follows: 


  ## Data-gathering


  This initial phase was primarily a data-gathering effort. I launched a site-wide demographic survey to a randomly selected subset of users, asking broad questions about people’s interests, usage habits, age, gender, location, and general news reading habits, with the goal of identifying both the general demographic makeup of our existing userbase, as well as NewsNow's place within their news diet. The survey was implemented in Hotjar, and thus I was able to gather additional metadata for each submission, such as from which pages users submitted the survey and information about their device. In addition, Hotjar enabled me to collect responses from users who did not complete the full survey, which proved especially useful in looking for selection/response bias.


  In addition to the survey, I also used Hotjar to generate a wide array of heatmaps, to look more specifically at how users on different topic categories might behave differently from one another.


  Finally, I was able to gather quantitative data from Google Analytics to further understand device/browser/OS distribution, usage habits, and behaviour.


  ## Analysis


  The demographic survey generated approximately 6000 responses, which I exported as a CSV and processed in Google Sheets. I spent a long time sifting through all the responses, slicing the data in various ways, and looking for patterns that might help me to uncover segments within the userbase. As part of this process, I weighted the responses by geography, and device category, using the Google Analytics data from the period of time in which the survey was active as a source of truth from which to calculate weights that could be applied in combination to individual responses.


  Upon applying weights to the data and segmenting by country, I discovered a number of very clear segments within our userbase. Focusing on what were by far the three largest segments; UK, US, and Nigeria, I was able to identify vastly different distributions of age, topical interests, and device usage between the three groups. What was particularly interesting about this was that the demographics in each segment appeared somewhat narrow; we were appealing to specific age ranges and categories of interest in each country that were distinct from one another, and that appeared unlikely to be representative of online news readership demographics as a whole. To validate this, I referenced publicly available data regarding online news readership from [Ofcom](https://www.ofcom.org.uk/__data/assets/pdf_file/0024/116529/news-consumption-2018.pdf), [Pew Research](https://www.pewresearch.org/fact-tank/2019/09/11/key-findings-about-the-online-news-landscape-in-america/), [Statista](https://www.statista.com/statistics/381569/leading-news-and-media-sites-usa-by-share-of-visits/), and [SimilarWeb](https://www.similarweb.com/top-websites/united-states/category/sports). 


  By checking our own data against these broader demographic insights, I was not only able to confirm the boundaries of our users’ segmentation but was also able to identify prominent demographics in the wider population, both in the UK and the US, that were underrepresented in the NewsNow userbase. 


  Based on my analysis of the survey results, analytics data, and third-party data, I was able to craft a handful of personas, representative of our core users. In addition, based on the demographics I had found to be under-represented, I created additional personas, representative of our additional target demographics, with the goal in mind of better serving these demographics and subsequently growing and diversifying the NewsNow userbase. I created a full write-up of my findings, including my methodology, data and charts, sources, and a summary of the results, which I presented to the wider team. 


  ## User Interviews


  The next step was to engage with real people, in person, and begin to build a rapport with the people behind our personas. Through our earlier demographic survey, and through dedicated research participant recruitment services such as UserInterviews.com, we were able to work with users that were representative of all our user personas, from a range of backgrounds; from the UK, US, and Nigeria.


  The methodology for the interviews was based on a semi-structured interview format, which offered a relaxed atmosphere and an opportunity to build a rapport with participants, whilst still ensuring that all our talking points were covered. For the purposes of this round of interviews we had considered creating hi-fi Figma prototypes from our existing designs. However, NewsNow being an engineering-led business meant that we could do one better; we had a working staging site with real data, where our new design system had been implemented in Vue.js, and while it was far away from full feature-parity, it was leagues ahead of a Figma prototype.


  Interviews were conducted on Lookback.io, recording video, audio, and notes, and lasting approximately 30 minutes, for which users were incentivised with Amazon vouchers. I lead all the interviews, with a midweight UI designer observing and keeping notes. The process for each interview was to first understand a bit more about the participant; their interests, hobbies, news-reading habits, and a bit about their day-to-day life, to understand how our product might fit into their day. I would then show them the product, and ask for their first impressions and gut-feelings about the overall look, feel, and utility. Beyond that, participants were free to use and explore the product and were asked to try and vocalise their thoughts and actions as much as possible while they did so. I would answer questions, make notes of potential pain points, and occasionally offer some steer, either to ensure participants were able to cover all the talking points, or to help on the occasion that they got stuck with the prototype or the UX. At the end of each interview, I would sit down with our UI designer for a general recap, to discuss any points of interest, collate notes, and tag certain points of note in the recording. 


  Once all the interviews were complete, I worked with the design team to create a summary of our findings, as well as a highlights reel, containing the most interesting and useful clips of our interview recordings, grouped into categories, to offer colleagues and management a quick glimpse into the responses of our participants.
results: "The overall results of this initiative were enlightening, challenging,
  and extremely positive. For the first time, we were able to understand and
  empathise with the NewsNow userbase in a personal way. We were shown which
  parts of our new product were working well and in some cases even better than
  expected, as well as parts of the product that needed improvement. We were
  given a better understanding of how our product fit into the wider industry,
  how our users interpreted the brand against competitors, and how we might
  better serve a more diverse range of people in the future. We also found that
  some of our initial expectations were challenged: There were certain areas of
  the new product which we had been intending to make personalisable, or using
  algorithms to modulate aspects of the UI based on the user segment being
  served, but in fact we found that our users harmonised on certain aspects of
  the design and that by executing certain aspects of the design well, we would
  negate the need for additional complexity. We were also able to re-prioritise
  our product roadmap, iron out some rough plans, and add more specificity to
  design tasks in the backlog based on all the new insight we had attained."
---
