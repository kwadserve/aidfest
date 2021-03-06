const html = require('choo/html')
const Component = require('nanocomponent')

module.exports = class Background extends Component {
  constructor (id, state, emit, opts) {
    super(id)
    Object.assign(this, opts)
  }

  static identity (opts) {
    return `background-1${opts.tight ? '-tight' : ''}`
  }

  update () {
    return false
  }

  createElement () {
    return html`
      <div class="Hero-bg Hero1 ${this.tight ? 'Hero1--tight' : ''}" id="hero-bg-1">
        <svg class="Hero1-people" viewBox="0 0 804 147">
          <defs>
            <pattern id="hero1-pattern" x="7" y="7" width="6" height="200" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
              <rect class="Hero1-stripe" x="0" y="0" width="3" height="200" />
            </pattern>
            <path id="hero-person-symbol-1" d="M58.48 57.33c0-4.6 3.74-8.33 8.34-8.33s8.3 3.73 8.3 8.33-3.7 8.33-8.3 8.33c-4.6 0-8.34-3.73-8.34-8.33zm18.06 11.54c5.65.5 10.08 5.27 10.08 11.06v23.1c0 1.77-1.45 3.22-3.22 3.22-1.8 0-3.24-1.45-3.24-3.23V83.2c0-.75-.2-1.76-1.57-1.76-1 0-1.2 1-1.2 1.63v59.44c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.6v-34.3c0-.4-.2-1.3-1.3-1.3-1.2 0-1.4 1-1.4 1.4v34.2c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.6V83.1c-.1-.63-.3-1.63-1.2-1.63-1.4 0-1.6 1-1.6 1.75V103c0 1.78-1.5 3.23-3.3 3.23-1.8 0-3.26-1.45-3.26-3.23V79.93c0-5.8 4.4-10.55 10.1-11.06.16-.02.36-.05.6-.05h18.2c.22 0 .42.03.62.05z"/>
            <path id="hero-person-symbol-2" d="M266.27 74.7c0-3.7 3.02-6.7 6.73-6.7 3.72 0 6.72 3 6.72 6.7s-3 6.7-6.72 6.7c-3.7 0-6.73-3-6.73-6.7zm14.6 9.3c4.55.4 8.13 4.23 8.13 8.9v18.58c0 1.43-1.17 2.6-2.6 2.6-1.45 0-2.6-1.17-2.6-2.6V95.52c0-.6-.2-1.4-1.3-1.4-.75 0-.9.8-.93 1.3v47.85c0 2.05-1.67 3.73-3.75 3.73-2.07 0-3.75-1.68-3.75-3.73V115.7c0-.3-.1-1.1-1.06-1.1-.9 0-1 .8-1 1.1v27.57c0 2.05-1.6 3.73-3.7 3.73s-3.7-1.68-3.7-3.73V95.43c0-.5-.2-1.32-.9-1.32-1.1 0-1.2.9-1.2 1.5v16c0 1.5-1.1 2.6-2.6 2.6-1.4 0-2.6-1.1-2.6-2.6V92.9c0-4.67 3.6-8.5 8.2-8.9.2-.02.3-.04.5-.04h14.7c.2 0 .4.02.5.04z"/>
            <path id="hero-person-symbol-3" d="M417.1 61.7c0 4.37-3.54 7.9-7.9 7.9s-7.9-3.53-7.9-7.9c0-4.35 3.54-7.9 7.9-7.9s7.9 3.55 7.9 7.9zm-23.8 17.87s2.36-6.17 7.55-6.17h16.72c5.2 0 7.53 6.17 7.53 6.17l6.54 21.34s1.18 4-2.15 4.9c-3.3 1-4.3-2.8-4.3-2.8l-5.3-17.8s-.3-1.4-1.3-1.1c-1.1.3-.7 1.8-.7 1.8l9.2 33.4h-8.6v23.9c0 2.3-1.9 4.1-4.1 4.1-2.3 0-4.1-1.8-4.1-4.1v-23.9H408v23.9c0 2.3-1.82 4.1-4.1 4.1-2.26 0-4.1-1.8-4.1-4.1v-23.9h-8.56l9.2-33.4s.4-1.4-.64-1.7c-1-.3-1.3 1.1-1.3 1.1l-5.3 17.8s-1 3.9-4.3 2.9c-3.3-.9-2.14-4.9-2.14-4.9l6.56-21.3z"/>
            <path id="hero-person-symbol-4" d="M647 116.67s-.38.83-.38 1.58v2.3l3.44 14.23h-3.44v9.2c0 1.78-1.45 3.54-3.24 3.54-1.8 0-3.23-1.12-3.23-2.92 0 0-.05-9.82-.07-9.82h-1.96l-.04 9.98c0 1.8-1.42 2.7-3.2 2.7-1.8 0-3.2-.9-3.2-2.97l-.02-9.8h-3.5l2.78-14.2v-2.4c0-.8-.05-1.6-.05-1.6l-6.3-12s-.3-.7-.3-1.1c0-1.3 1-2.3 2.4-2.3.8 0 1.5.5 2 1.2v.1c.2.1 3.2 5.9 4.2 6.9 1 1.1 2 1.6 2 1.6h8s.9-.56 2-1.6c1-1 4.1-7.1 4.3-7.3.4-.7 1.1-1.1 2-1.1 1.3 0 2.4 1 2.4 2.32 0 .4-.8 2-.8 2l-6.1 11.05zm-7.9-10.85c-3.63 0-6.56-2.94-6.56-6.57 0-3.63 2.93-6.56 6.56-6.56 3.64 0 6.57 2.9 6.57 6.5s-2.93 6.5-6.57 6.5z"/>
            <path id="hero-person-symbol-5" d="M683 106.13c-3.65 0-6.58-2.94-6.58-6.57 0-3.63 2.93-6.56 6.57-6.56 3.6 0 6.5 2.93 6.5 6.56 0 3.63-3 6.57-6.6 6.57zm-15.75 20.4h-.03c.03-.28 1.85-4.8 2.4-6.2 3.76-9.7 4.84-11.47 8.26-11.57 3.43-.1 5.1-.04 5.1-.04s1.54-.06 4.14 0c2.6.07 5.28.04 6.77 4.36.4 1.4 4.5 11.46 4.6 11.72l-.1.02c.5.68.6 1.57.2 2.4-.6 1.27-2 1.87-3.3 1.34-.4-.15-1.6-3.63-1.6-3.63l-2.8-7.8s-.4-.56-.4.23v26.8c0 1.86-1.5 3.36-3.4 3.36s-3.4-1.5-3.4-3.37v-10.57s.2-1.5-1-1.5-1 1.5-1 1.5v10.57c0 1.87-1.5 3.37-3.4 3.37s-3.4-1.5-3.4-3.37v-26.8c0-.78-.6-.02-.6-.02L671 128.7s-1 1.77-2.83.94c-1.54-.7-1.27-2.34-.95-3.1z"/>
            <path id="hero-person-symbol-6" d="M720.74 106.72l-7.26 38.46c-.1.6-.64 1.04-1.24 1.04-.08 0-.15 0-.22-.02-.7-.14-1.13-.8-1-1.5l7.33-38.6c-.76-.6-1.26-1.5-1.26-2.55V80.68c0-5.75 4.4-10.46 10-10.97h18.6c.2 0 .4.1.6.1 5.6.5 10 5.3 10 11v22.9c0 1.8-1.5 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2V83.9c0-.74-.2-1.74-1.6-1.74-1 0-1.2 1-1.2 1.62v58.92c0 2.53-2.1 4.6-4.6 4.6s-4.6-2.07-4.6-4.6v-33.96c0-.37-.2-1.35-1.3-1.35-1.2 0-1.3.9-1.4 1.3v33.9c0 2.5-2.1 4.6-4.6 4.6-2.6 0-4.6-2.1-4.6-4.6V83.7c0-.63-.2-1.62-1.2-1.62-1.4 0-1.6 1-1.6 1.74v19.64c0 1.6-1.2 2.95-2.8 3.16zm7.74-48.46c0-4.56 3.7-8.26 8.26-8.26 4.55 0 8.24 3.7 8.24 8.26s-3.7 8.25-8.24 8.25c-4.56 0-8.26-3.6-8.26-8.2z"/>
          </defs>
          <g>
            <use xlink:href="#hero-person-symbol-1" class="Hero1-person Hero1-person--striped" />
            <use xlink:href="#hero-person-symbol-2" class="Hero1-person Hero1-person--striped" />
            <use xlink:href="#hero-person-symbol-3" class="Hero1-person Hero1-person--striped" />
            <use xlink:href="#hero-person-symbol-4" class="Hero1-person Hero1-person--striped" />
            <use xlink:href="#hero-person-symbol-5" class="Hero1-person Hero1-person--striped" />
            <use xlink:href="#hero-person-symbol-6" class="Hero1-person Hero1-person--striped" />
          </g>
          <rect class="Hero1-stripes" x="0" y="0" width="804" height="147" fill="url(#hero1-pattern)" />
          <rect class="Hero1-stripes" x="804" y="0" width="804" height="147" fill="url(#hero1-pattern)" />
          <g>
            <use xlink:href="#hero-person-symbol-1" class="Hero1-person Hero1-person--double" />
            <use xlink:href="#hero-person-symbol-2" class="Hero1-person Hero1-person--double" />
            <use xlink:href="#hero-person-symbol-3" class="Hero1-person Hero1-person--double" />
            <use xlink:href="#hero-person-symbol-4" class="Hero1-person Hero1-person--double" />
            <use xlink:href="#hero-person-symbol-5" class="Hero1-person Hero1-person--double" />
            <use xlink:href="#hero-person-symbol-6" class="Hero1-person Hero1-person--double" />
          </g>
          <g>
            <path class="Hero1-person" d="M117 106.13c-3.65 0-6.58-2.94-6.58-6.57 0-3.63 2.93-6.56 6.57-6.56 3.6 0 6.5 2.93 6.5 6.56 0 3.63-3 6.57-6.6 6.57zm-15.75 20.4h-.03c.03-.28 1.85-4.8 2.4-6.2 3.76-9.7 4.84-11.47 8.26-11.57 3.43-.1 5.1-.04 5.1-.04s1.54-.06 4.14 0c2.6.07 5.28.04 6.77 4.36.4 1.4 4.5 11.46 4.6 11.72l-.1.02c.5.68.6 1.57.2 2.4-.6 1.27-2 1.87-3.3 1.34-.4-.15-1.6-3.63-1.6-3.63l-2.8-7.8s-.4-.56-.4.23v26.8c0 1.86-1.5 3.36-3.4 3.36s-3.4-1.5-3.4-3.37v-10.57s.2-1.5-1-1.5-1 1.5-1 1.5v10.57c0 1.87-1.5 3.37-3.4 3.37s-3.4-1.5-3.4-3.37v-26.8c0-.78-.6-.02-.6-.02L105 128.7s-1 1.77-2.83.94c-1.54-.7-1.27-2.34-.95-3.1z"/>
            <path class="Hero1-person" d="M462 106.13c-3.65 0-6.58-2.94-6.58-6.57 0-3.63 2.93-6.56 6.57-6.56 3.6 0 6.5 2.93 6.5 6.56 0 3.63-3 6.57-6.6 6.57zm-15.75 20.4h-.03c.03-.28 1.85-4.8 2.4-6.2 3.76-9.7 4.84-11.47 8.26-11.57 3.43-.1 5.1-.04 5.1-.04s1.54-.06 4.14 0c2.6.07 5.28.04 6.77 4.36.4 1.4 4.5 11.46 4.6 11.72l-.1.02c.5.68.6 1.57.2 2.4-.6 1.27-2 1.87-3.3 1.34-.4-.15-1.6-3.63-1.6-3.63l-2.8-7.8s-.4-.56-.4.23v26.8c0 1.86-1.5 3.36-3.4 3.36s-3.4-1.5-3.4-3.37v-10.57s.2-1.5-1-1.5-1 1.5-1 1.5v10.57c0 1.87-1.5 3.37-3.4 3.37s-3.4-1.5-3.4-3.37v-26.8c0-.78-.6-.02-.6-.02L450 128.7s-1 1.77-2.83.94c-1.54-.7-1.27-2.34-.95-3.1z"/>
            <path class="Hero1-person" d="M202.74 106.72l-7.26 38.46c-.1.6-.64 1.04-1.24 1.04-.08 0-.15 0-.22-.02-.7-.14-1.13-.8-1-1.5l7.33-38.6c-.76-.6-1.26-1.5-1.26-2.55V80.68c0-5.75 4.4-10.46 10-10.97h18.6c.2 0 .4.1.6.1 5.6.5 10 5.3 10 11v22.9c0 1.8-1.5 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2V83.9c0-.74-.2-1.74-1.6-1.74-1 0-1.2 1-1.2 1.62v58.92c0 2.53-2.1 4.6-4.6 4.6s-4.6-2.07-4.6-4.6v-33.96c0-.37-.2-1.35-1.3-1.35-1.2 0-1.3.9-1.4 1.3v33.9c0 2.5-2.1 4.6-4.6 4.6-2.6 0-4.6-2.1-4.6-4.6V83.7c0-.63-.2-1.62-1.2-1.62-1.4 0-1.6 1-1.6 1.74v19.64c0 1.6-1.2 2.95-2.8 3.16zm7.74-48.46c0-4.56 3.7-8.26 8.26-8.26 4.55 0 8.24 3.7 8.24 8.26s-3.7 8.25-8.24 8.25c-4.56 0-8.26-3.6-8.26-8.2z"/>
            <path class="Hero1-person" d="M16 106.13c-3.65 0-6.58-2.94-6.58-6.57C9.42 95.93 12.35 93 16 93c3.62 0 6.55 2.93 6.55 6.56 0 3.63-2.93 6.57-6.56 6.57zM.24 126.53H.22c.03-.28 1.85-4.8 2.4-6.2 3.76-9.7 4.84-11.47 8.26-11.57 3.43-.1 5.1-.04 5.1-.04s1.54-.06 4.14 0c2.6.07 5.28.04 6.77 4.36.4 1.4 4.5 11.46 4.6 11.72l-.1.02c.5.68.6 1.57.2 2.4-.6 1.27-2 1.87-3.3 1.34-.4-.15-1.6-3.63-1.6-3.63l-2.8-7.8s-.4-.56-.4.23v26.8c0 1.86-1.5 3.36-3.4 3.36s-3.4-1.5-3.4-3.37v-10.57s.2-1.5-1-1.5-1 1.5-1 1.5v10.57c0 1.87-1.5 3.37-3.4 3.37s-3.4-1.5-3.4-3.37v-26.8c0-.78-.6-.02-.6-.02L4 128.7s-1 1.76-2.8.93c-1.55-.7-1.28-2.34-.96-3.1z"/>
            <path class="Hero1-person" d="M504.1 12.48c0-6.9 5.56-12.48 12.4-12.48 6.85 0 12.4 5.58 12.4 12.48s-5.55 12.48-12.4 12.48c-6.84 0-12.4-5.6-12.4-12.48zm26.9 17.3c8.4.75 15 7.87 15 16.55V80.9c0 2.67-2.15 4.85-4.8 4.85-2.67 0-4.8-2.18-4.8-4.84V51.2c0-1.1-.34-2.6-2.36-2.6-1.4 0-1.7 1.48-1.74 2.43v89.02c0 3.83-3.08 6.95-6.9 6.95-3.83 0-6.93-3.12-6.93-6.95v-51.3c-.02-.56-.2-2.03-1.96-2.03s-1.9 1.47-2 2.03v51.3c0 3.83-3 6.95-6.9 6.95-3.8 0-6.9-3.12-6.9-6.95V51.03c0-.95-.3-2.44-1.7-2.44-2 0-2.3 1.5-2.3 2.6v29.7c0 2.6-2.1 4.8-4.8 4.8-2.7 0-4.8-2.2-4.8-4.9V46.3c0-8.7 6.6-15.8 15.1-16.56.3-.04.6-.08.9-.08h27.2c.4 0 .7 0 1 .02z"/>
            <path class="Hero1-person" d="M350.84 18.83c0 6.54-5.3 11.82-11.84 11.82s-11.84-5.28-11.84-11.82C327.16 12.3 332.46 7 339 7s11.84 5.3 11.84 11.83zm-35.7 26.78s3.53-9.2 11.32-9.2h25.1c7.8 0 11.3 9.3 11.3 9.3l9.85 32s1.8 5.9-3.2 7.3c-4.9 1.5-6.5-4.2-6.5-4.2L355.1 54s-.43-2.06-1.98-1.6c-1.55.43-.96 2.62-.96 2.62l13.8 50.03H353.1v35.83c0 3.4-2.76 6.15-6.18 6.15s-6.16-2.75-6.16-6.14V105h-3.5v35.83c0 3.4-2.76 6.14-6.17 6.14-3.4 0-6.2-2.75-6.2-6.14V105H312l13.8-50s.6-2.2-.9-2.65c-1.5-.44-1.9 1.6-1.9 1.6l-8 26.7s-1.5 5.74-6.48 4.28c-5-1.47-3.23-7.33-3.23-7.33l9.8-32z"/>
            <path class="Hero1-person" d="M584.54 59.18c-2.33 1.25-3.94 3.9-3.94 6.94 0 4.25 3.12 7.7 7 7.7 3.85 0 6.97-3.45 6.97-7.7 0-2.9-1.44-5.42-3.58-6.73.2-.4.3-.9.3-1.4 0-1.7-1.6-3.1-3.5-3.1s-3.6 1.3-3.6 3c0 .4.1.7.2 1.1zm-13.57 47.65c1.85-.36 2.45-2.88 2.45-2.88l4.68-17.4s.26-1.33 1.17-1.04c.9.3.57 1.8.57 1.8l-8.15 32.6h7.5v23.4c0 2.2 1.6 4 3.6 4s3.6-1.8 3.6-4v-23.4h2v23.4c0 2.2 1.6 4 3.6 4s3.6-1.8 3.6-4v-23.4h7.5L595 87.4s-.34-1.4.57-1.7c.9-.2 1.14 1.1 1.14 1.1l4.7 17.4s.9 3.7 3.8 2.8c3-.9 1.9-4.7 1.9-4.7l-5.8-20.8s-2-6.08-6.6-6.08H580c-4.6 0-6.65 6-6.65 6l-5.8 20.85s-.86 3.2 1.22 4.48l-.1.3-6.8 39.26c-.1.66.26 1.28.85 1.4h.2c.5 0 .96-.4 1.1-.93l6.8-39.2v-.3z"/>
            <path class="Hero1-person" d="M170 116.67s-.38.83-.38 1.58v2.3l3.44 14.23h-3.44v9.2c0 1.78-1.45 3.54-3.24 3.54-1.8 0-3.23-1.12-3.23-2.92 0 0-.05-9.82-.07-9.82h-1.96l-.04 9.98c0 1.8-1.42 2.7-3.2 2.7-1.8 0-3.2-.9-3.2-2.97l-.02-9.8h-3.5l2.78-14.2v-2.4c0-.8-.05-1.6-.05-1.6l-6.3-12s-.3-.7-.3-1.1c0-1.3 1-2.3 2.4-2.3.8 0 1.5.5 2 1.2v.1c.2.1 3.2 5.9 4.2 6.9 1 1.1 2 1.6 2 1.6h8s.9-.56 2-1.6c1-1 4.1-7.1 4.3-7.3.4-.7 1.1-1.1 2-1.1 1.3 0 2.4 1 2.4 2.32 0 .4-.8 2-.8 2l-6.1 11.05zm-7.9-10.85c-3.63 0-6.56-2.94-6.56-6.57 0-3.63 2.93-6.56 6.56-6.56 3.64 0 6.57 2.9 6.57 6.5s-2.93 6.5-6.57 6.5z"/>
            <path class="Hero1-person" d="M797 116.67s-.38.83-.38 1.58v2.3l3.44 14.23h-3.44v9.2c0 1.78-1.45 3.54-3.24 3.54-1.8 0-3.23-1.12-3.23-2.92 0 0-.05-9.82-.07-9.82h-1.96l-.04 9.98c0 1.8-1.42 2.7-3.2 2.7-1.8 0-3.2-.9-3.2-2.97l-.02-9.8h-3.5l2.78-14.2v-2.4c0-.8-.05-1.6-.05-1.6l-6.3-12s-.3-.7-.3-1.1c0-1.3 1-2.3 2.4-2.3.8 0 1.5.5 2 1.2v.1c.2.1 3.2 5.9 4.2 6.9 1 1.1 2 1.6 2 1.6h8s.9-.56 2-1.6c1-1 4.1-7.1 4.3-7.3.4-.7 1.1-1.1 2-1.1 1.3 0 2.4 1 2.4 2.32 0 .4-.8 2-.8 2l-6.1 11.05zm-7.9-10.85c-3.63 0-6.56-2.94-6.56-6.57 0-3.63 2.93-6.56 6.56-6.56 3.64 0 6.57 2.9 6.57 6.5s-2.93 6.5-6.57 6.5z"/>
          </g>
        </svg>
      </div>
    `
  }
}
