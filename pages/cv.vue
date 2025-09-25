<template>
  <div :class="`cv cv--${currentMode}`">
    <!-- Sticky header with actions -->
    <div class="cv__sticky-header">
      <div class="cv__sticky-content">
        <Button 
          @clicked="downloadPDF" 
          label="Download PDF"
          icon="download"
          transition-direction="down"
        />
        <ModeSwitch :currentMode="currentMode" />
      </div>
    </div>

    <div class="cv__container cv__container--bg-2">
      <div class="cv__wrapper cv__wrapper-intro">
        <header class="cv__header">
          <div class="cv__header-content">
            <div class="cv__header-text">
              <h1>Emil Smith</h1>
              <div class="cv__contact">
                <p><font-awesome icon="envelope" />hi@emilsmith.pro</p>
                <p><font-awesome :icon="['fab', 'linkedin-in']" /><a href="https://linkedin.com/in/emil-smith/" target="_blank" rel="noopener noreferrer">linkedin.com/in/emil-smith/</a></p>
              </div>
            </div>
            <div class="cv__avatar">
              <nuxt-img preset="avatar" src="/img/selfie.png" alt="Portrait photo of Emil Smith"/>
            </div>
          </div>
        </header>

        <section class="cv__intro">
          <p>I'm a senior design leader passionate about creating products that genuinely solve real problems for users. Over fifteen years, I've delivered projects for brands like Google, eBay, Sony, Nokia, Virgin, and Tinder, combining deep user understanding with technical expertise to build solutions that work beautifully at scale.</p>
          <p>My approach focuses on making things work as well as they can for users, while creating systems that scale and evolve over time. I lead both creative and technical decisions, with expertise spanning design systems, user research, front-end development, and team leadership.</p>
        </section>
      </div>
    </div>
    <div class="cv__container cv__container--bg-1">
      <div class="cv__wrapper cv__wrapper-xp">

        <section class="cv__section">
          <h2>Experience</h2>
          
          <div class="cv__job">
            <div class="cv__job-header">
              <h3>Newsquest | Head of Digital Design</h3>
              <span class="cv__dates">March 2021 - Present</span>
            </div>
            <p class="cv__promotion"><em>Promoted from Lead Product Designer to Head of Digital Design (2022)</em></p>
            <ul>
              <li>Grew and led design team from 1 to 5 designers with 100% retention</li>
              <li>Built and managed a family of design systems across 200+ local news brands</li>
              <li>Led product design for a multimillion-pound digital tribute platform integrating online memorials with print obituary booking system</li>
              <li>Led user research projects that informed product strategy and development priorities</li>
              <li>Implemented new processes for communication and collaboration between design and development teams, improving productivity</li>
              <li>Established design operations, tooling, and workflows that enabled efficient scaling across multiple product areas</li>
            </ul>
          </div>

          <div class="cv__job">
            <div class="cv__job-header">
              <h3>NewsNow | Creative Tech Lead</h3>
              <span class="cv__dates">Feb 2019 - Feb 2021</span>
            </div>
            <ul>
              <li>Led the product's largest redesign in its 24-year history, reporting directly to CEO and COO</li>
              <li>Conducted the company's first user research initiative in 25 years, directly informing product decisions and strategy</li>
              <li>Built design systems and front-end implementation using Vue.js, working within the development team on tooling and infrastructure</li>
              <li>Led both design and engineering decisions on the core product, backed by quantitative and qualitative data, user research, and competitor analysis</li>
              <li>Managed design team while contributing hands-on development work</li>
            </ul>
          </div>

          <div class="cv__job page-break">
            <div class="cv__job-header">
              <h3>BPL Marketing | Designer & Developer</h3>
              <span class="cv__dates">Jul 2015 - Feb 2019</span>
            </div>
            <ul>
              <li>Developed design systems for core clients, reinforcing client relationships and strengthening their digital products</li>
              <li>Founded BPL Web, the agency's first in-house web development team</li>
              <li>Defined and informed devOps, designOps, and project management processes</li>
              <li>Managed and mentored junior designers on web projects for clients including Three and Tinder</li>
            </ul>
          </div>

          <div class="cv__job">
            <div class="cv__job-header">
              <h3>Twotwentyseven | Designer & Developer</h3>
              <span class="cv__dates">Jun 2013 - Jul 2015</span>
            </div>
            <ul>
              <li>Worked in a small, fast-paced team on web design, front-end development, and bespoke Shopify eCommerce sites</li>
              <li>Delivered projects for clients including Ella's Kitchen, Brothers Cider, Tonkotsu Ramen, and Salt Yard</li>
              <li>Contributed to company coding standards and best practices</li>
            </ul>
          </div>

          <div class="cv__job">
            <div class="cv__job-header">
              <h3>Amobee | Digital Designer</h3>
              <span class="cv__dates">Jul 2012 - Jul 2013</span>
            </div>
            <ul>
              <li>Designed mobile display ads and rich media for global campaigns for clients including Nokia, Sony, eBay, Expedia, and Angry Birds</li>
              <li>Created responsive designs and custom mobile websites for international brands</li>
              <li>Automated repetitive design tasks using scripts, saving hundreds of work hours and improving team efficiency</li>
            </ul>
          </div>
        </section>

        <section class="cv__section">
          <h2>Education</h2>
          <div class="cv__job">
            <div class="cv__job-header">
              <h3>UAL, London | Digital Media Design BA(Hons)</h3>
              <span class="cv__dates">2009 – 2012</span>
            </div>
          </div>
        </section>

        <section class="cv__section">
          <h2>Skills</h2>
          <div class="cv__skills">
            <div class="cv__skill-category">
              <strong>Design Leadership:</strong> Team management, design systems, user research, design operations, stakeholder management
            </div>
            <div class="cv__skill-category">
              <strong>Design Tools:</strong> Figma, Adobe Creative Suite, Sketch, InVision Studio, prototyping tools
            </div>
            <div class="cv__skill-category">
              <strong>Technical Skills:</strong> UI/UX Design, Front-End Web Development, HTML5, CSS3, SCSS, JavaScript (ES6+), Vue.js (SSR, VueX), React, Git, Python
            </div>
            <div class="cv__skill-category">
              <strong>Specialties:</strong> Systems thinking, design-development collaboration, user-centered design process, scaling design across multiple products
            </div>
          </div>
        </section>

        <section class="cv__section">
          <h2>Interests & Values</h2>
          <p>I'm passionate about using design and technology for social good. Outside of work, I'm a musician and visual artist, and I volunteer at a youth charity where I run a community music studio. I also enjoy building audio gear, electrical engineering, and 3D printing.</p>
        </section>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button'
import ModeSwitch from '~/components/atoms/ModeSwitch'

export default {
  name: 'CVPage',
  components: {
    Button,
    ModeSwitch
  },
  data() {
    return {
      currentMode: "dark"
    };
  },
  mounted() {
    // Initialize theme system for CV page
    this.$nuxt.$on("updatemode", mode => {
      this.currentMode = mode;
    });
  },
  head() {
    return {
      title: 'Emil Smith | CV',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Emil Smith - Senior Design Leader CV'
        }
      ]
    }
  },
  methods: {
    downloadPDF() {
      // Use browser's built-in print functionality for PDF generation
      // This preserves text selectability and works reliably
      
      // Hide the sticky header before printing
      const stickyHeader = document.querySelector('.cv__sticky-header');
      const originalDisplay = stickyHeader ? stickyHeader.style.display : '';
      if (stickyHeader) {
        stickyHeader.style.display = 'none';
      }
      
      // Add printing class to body
      document.body.classList.add('printing-cv');
      
      // Trigger print dialog
      window.print();
      
      // Restore header after printing
      setTimeout(() => {
        if (stickyHeader) {
          stickyHeader.style.display = originalDisplay;
        }
        document.body.classList.remove('printing-cv');
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.cv {
  min-height: 100vh;
  background: var(--c-bg);
  color: var(--c-main);
  @include font-body;
  
  &--dark {
    @include dark;
  }
  
  &--light {
    @include light;
  }

  @include breakpoint_m {
    //padding: $unit_xl;
  }

  @include breakpoint_l {
    //padding: $unit_xxl;
  }

  &__sticky-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--c-bg);
    width: 100%;
    padding: $unit_xs;
    border-bottom: solid 3px var(--c-accent-2);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  &__sticky-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button {
      padding: $unit_xxs $unit_s;
      font-size: $txt_s;
    }
  }

  &__container {
    width: 100%;
    margin: 0;
    line-height: 1.3;

    &--bg-2 {
      background: var(--c-bg-2);
    }

    &--bg-1 {
      background: var(--c-bg-1);
    }
  }

  &__wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: $unit_m 0;

    @include breakpoint_m {
      padding: $unit_l 0;
    }
    
    &:nth-child(2) {
      padding-top: 0;
      
      @include breakpoint_m {
        padding-top: 0;
      }
    }
  }

  &__header {
    text-align: left;
    margin-bottom: $unit_m;
    border-bottom: 3px solid var(--c-accent-2);
    padding-bottom: $unit_xxs;

    h1 {
        margin-bottom: 0;
    }
  }

  &__header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__header-text {
    flex: 1;
  }

  &__avatar {
    flex-shrink: 0;
    max-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      max-width: 100px;
      align-self: flex-end;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }


  &__intro {
    margin-bottom: $unit_s;

    p {
      margin-bottom: $unit_s;
      line-height: 1.4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__section {
    margin-bottom: $unit_xl;

    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      color: var(--c-main);
      border-bottom: 3px solid var(--c-accent-2);
      padding-bottom: $unit_xs;
      margin-bottom: $unit_l;
      font-size: $txt_l;

      @include breakpoint_m {
        font-size: $txt_xl;
      }
    }
  }

  &__job {
    margin-bottom: $unit_xl;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__job-header {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: $unit_xs;
    gap: $unit_xxs;

    h3 {
      color: var(--c-main);
      margin: 0;
      font-size: $txt_m;

      @include breakpoint_m {
        font-size: $txt_l;
      }
    }
  }

  &__dates {
    color: var(--c-accent-1);
    font-size: $txt_s;
    font-weight: 500;

    @include breakpoint_m {
      font-size: $txt_m;
    }
  }

  &__promotion {
    color: var(--c-main-alt);
    font-size: $txt_s;
    font-style: italic;
    margin-bottom: $unit_s;

    @include breakpoint_m {
      font-size: $txt_m;
    }
  }

  &__skills {
    .cv__skill-category {
      margin-bottom: $unit_s;
      
      strong {
        color: var(--c-accent-1);
        font-weight: 600;
      }
    }
  }

  ul {
    margin: $unit_m 0 $unit_xl;
    padding-left: $unit_xl;

    li {
      margin-bottom: $unit_xs;
      line-height: 1.4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__contact {
    p:not([class]) {
      margin-bottom: 0.25rem;
      font-size: $txt_s;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: var(--c-main);
        text-decoration: none;
      }

      svg {
        color: var(--c-accent-1);
        margin-right: $unit_xs;
      }
    }
  }
}

.page-break {
  margin-top: 0.25in !important;
}

/*
  PRINT MEDIA QUERY COMPATIBILITY GUIDE
  =====================================
  
  ✅ WELL SUPPORTED:
  - Basic CSS properties (color, font-size, margin, padding)
  - REM units (modern browsers)
  - Absolute units (in, cm, pt, px)
  - Flexbox (limited but more reliable than Grid)
  - Basic page breaks (page-break-before/after)
  - CSS custom properties (CSS variables)
  - Transform properties
  
  ⚠️  LIMITED/INCONSISTENT SUPPORT:
  - CSS Grid (avoid for print layouts)
  - Complex flexbox layouts
  - Advanced page break properties (break-before/after)
  - CSS animations/transitions
  - Complex positioning (absolute/fixed)
  
  ❌ POORLY SUPPORTED/PROBLEMATIC:
  - Viewport units (vh, vw, vmin, vmax) - behavior varies
  - CSS counters
  - Complex pseudo-elements
  - CSS filters
  - Box-shadow (may not print)
  - Border-radius (inconsistent)
  - Advanced selectors
  
  🎯 BEST PRACTICES:
  - Use absolute units (in, pt) for print-specific measurements
  - Keep layouts simple (avoid complex flexbox/grid)
  - Test across multiple browsers (Chrome, Firefox, Safari)
  - Use both old and new CSS syntax for page breaks
  - Avoid viewport-dependent measurements
  - Use !important sparingly but effectively for print overrides
  
  📱 TESTING:
  - Chrome DevTools: Toggle device toolbar > More tools > Rendering > Emulate CSS media > print
  - Firefox: File > Print Preview or Ctrl+P
  - Test PDF generation in multiple browsers
*/

// Print styles for PDF generation
@media print {
  @page {
    margin: 0;
    size: A4;
    background: var(--c-bg) !important;
  }
  
  /* Chrome-specific fix for white bars */
  @media print and (-webkit-min-device-pixel-ratio: 0) {
    html, body {
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
    }
    
    .cv {
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
    }
    
    .cv__container {
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
    }
  }
  
  .page-break {
    page-break-before: always !important;
    break-before: page !important;
    margin-top: 0 !important;
  }
  
  * {
    box-sizing: border-box !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  html, body {
    background: var(--c-bg) !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  
  .cv {
    background: var(--c-bg) !important;
    color: var(--c-main) !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    font-family: 'Nunito Sans', sans-serif !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
    
    &__container {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      line-height: 1.3 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      
      &--bg-2 {
        background: var(--c-bg-2) !important;
      }
      
      &--bg-1 {
        background: var(--c-bg) !important;
      }
      
      &:first-child {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
      }
      
      &:nth-child(2) {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
    }
    
    &__wrapper {
      max-width: 8in !important;
      margin: 0 auto !important;
      padding: 0.75in !important;
      width: 100% !important;
      box-sizing: border-box !important;
      
      &-intro {
        padding-top: 0.5in !important;
        padding-bottom: 0.25in !important;
      }
      
      &-xp {
        padding-top: 0.2in !important;
        padding-bottom: 0.04in !important;
      }
    }
    
    &__header {
      margin-bottom: 1rem !important;
      border-bottom: 3px solid var(--c-accent-2) !important;
      padding-bottom: 0.5rem !important;
      text-align: left !important;
      
      h1 {
        color: var(--c-main) !important;
        font-size: 36pt !important;
        margin: 0 !important;
        font-weight: 700 !important;
      }
    }
    
    &__header-content {
      display: block !important;
      width: 100% !important;
      margin-bottom: 0 !important;
      position: relative !important;
      
      &::after {
        content: "" !important;
        display: table !important;
        clear: both !important;
      }
    }
    
    &__header-text {
      display: block !important;
      width: calc(100% - 120px) !important;
      float: left !important;
    }
    
    &__avatar {
      display: block !important;
      width: 100px !important;
      height: 100px !important;
      float: right !important;
      margin-bottom: 1rem !important;
      
      img {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
        border-radius: 50% !important;
      }
    }
    
    &__contact p {
      color: var(--c-main) !important;
      font-size: 12pt !important;
      margin-bottom: 0.25rem !important;
      
      &:last-child {
        margin-bottom: 0.25rem !important;
      }
      
      a {
        color: var(--c-main) !important;
        text-decoration: none !important;
      }
      
      svg {
        color: var(--c-accent-1) !important;
        margin-right: 0.5rem !important;
      }
    }
    
    &__intro {
      margin-bottom: 0 !important;
      
      p {
        font-size: 12pt !important;
        line-height: 1.4 !important;
        color: var(--c-main) !important;
        margin-bottom: 0.75rem !important;
        
        &:last-child {
          margin-bottom: 0 !important;
        }
        
        strong {
          color: var(--c-main) !important;
        }
      }
    }
    
    &__section {
      margin-bottom: 1.5rem !important;
      margin-top: 0.5rem !important;
      font-size: 12pt !important;
      
      h2 {
        color: var(--c-main) !important;
        font-size: 20pt !important;
        font-weight: 700 !important;
        margin-bottom: 1rem !important;
        border-bottom: 3px solid var(--c-accent-2) !important;
        padding-bottom: 0.25rem !important;
      }
    }
    
    &__job {
      margin-bottom: 1.5rem !important;
      border-left: none !important;
      padding-left: 0 !important;
      margin-top: 0.75rem !important;
      
      &:first-child {
        margin-top: 0 !important;
      }
      
      &:last-child {
        margin-bottom: 0 !important;
      }
      
      &.page-break {
        padding-top: 0.1in !important;
      }
    }
    
    &__job-header {
      display: flex !important;
      flex-direction: column !important;
      align-items: baseline !important;
      margin-bottom: 0.5rem !important;
      
      h3 {
        color: var(--c-main) !important;
        font-size: 14pt !important;
        font-weight: 700 !important;
        margin: 0 !important;
      }
    }
    
    &__dates {
      color: var(--c-accent-1) !important;
      font-size: 12pt !important;
      font-weight: 500 !important;
    }
    
    &__promotion {
      color: var(--c-main-alt) !important;
      font-style: italic !important;
      font-size: 12pt !important;
      margin-bottom: 0.75rem !important;
    }
    
    &__skills {
      .cv__skill-category {
        margin-bottom: 0.5rem !important;
        font-size: 12pt !important;
        
        strong {
          color: var(--c-accent-1) !important;
          font-weight: 600 !important;
          font-size: 12pt !important;
        }
      }
      
      p {
        font-size: 12pt !important;
        line-height: 1.4 !important;
        color: var(--c-main) !important;
        margin-bottom: 0.75rem !important;
        
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
    
    ul {
      margin: 1.25rem 0 1rem !important;
      padding-left: 2.5rem !important;
      
      li {
        font-size: 12pt !important;
        line-height: 1.4 !important;
        color: var(--c-main) !important;
        margin-bottom: 0.5rem !important;
        
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
    
    &__sticky-header {
      display: none !important;
    }
  }
}

// Additional styles for printing state
body.printing-cv {
  .cv__sticky-header {
    display: none !important;
  }
}
</style>
