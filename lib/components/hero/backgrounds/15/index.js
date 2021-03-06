const html = require('choo/html')
const Component = require('nanocomponent')

const BEE_WING_FLAPS = [
  'M39.163 9.994c.333-1.38-3.068-3.378-7.59-4.464-4.526-1.088-8.463-.85-8.795.534-.33 1.38 3.07 3.378 7.593 4.465 4.526 1.085 8.46.844 8.794-.537',
  'M39.268 3.317c-.237-1.4-4.15-1.902-8.738-1.122-4.586.78-8.11 2.547-7.873 3.946.236 1.404 4.15 1.906 8.736 1.125 4.586-.78 8.11-2.547 7.875-3.947',
  'M8.414 5.47c4.497-1.198 8.435-1.06 8.802.313.367 1.372-2.98 3.458-7.478 4.656-4.495 1.195-8.437 1.056-8.802-.317C.57 8.75 3.916 6.67 8.414 5.47z',
  'M.824 2.534c.3-1.387 4.23-1.715 8.778-.732 4.548.983 7.99 2.907 7.69 4.296-.3 1.388-4.23 1.714-8.778.73C3.964 5.843.524 3.92.824 2.534'
]

const BIRD_WING_FLAP = 'M13.774.01C9.294.01 2.172 2.586 1.408 3.26c-.764.675-.826 1.707-.397 2.35.43.645 2.092.414 2.57.2.478-.214 3.01-.287 6.168-.287 3.258 0 9.663 3.873 15.858 9.648.513.456 1.006.684 1.48.684.472 0 .95-.223 1.43-.67 6.225-5.79 12.62-9.662 15.882-9.662 3.174 0 5.59.025 6.18.287.59.262 1.95.595 2.593-.2.645-.793.29-1.7-.282-2.218S44.918 0 40.375 0c-6.204 0-11.313 5.462-13.29 7.025C25.162 5.522 20.03.01 13.775.01z'

module.exports = class Background extends Component {
  constructor (id, state, emit, opts) {
    super(id)
    Object.assign(this, opts)
  }

  static identity (opts) {
    return `background-15${opts.tight ? '-tight' : ''}`
  }

  update () {
    return false
  }

  load (element) {
    const wings = element.querySelectorAll('.js-beeWing')
    for (let i = 0; i < wings.length; i += 1) {
      const from = wings[i].getAttribute('d')
      const to = BEE_WING_FLAPS[i]
      wings[i].appendChild(html`
        <animate attributeName="d" begin="0s" dur="140ms" repeatCount="indefinite" values="${[ from, to, from ].join(';')}" />
      `)
    }

    const bird = element.querySelector('.js-bird')
    bird.appendChild(html`
      <animate attributeName="d" begin="0s" dur="1200ms" repeatCount="indefinite" values="${[ BIRD_WING_FLAP, bird.getAttribute('d'), BIRD_WING_FLAP ].join(';')}" />
    `)

    const giraffeNeck = element.querySelector('.js-giraffeNeck')
    giraffeNeck.addEventListener('animationiteration', function onloop () {
      giraffeNeck.classList.remove('in-transition')
      nibble()
    })

    nibble(2000, 6000)

    function nibble (min = 5000, max = 8000) {
      window.setTimeout(
        () => giraffeNeck.classList.add('in-transition'),
        Math.random() * (min - max) + min
      )
    }
  }

  createElement () {
    return html`
      <div class="Hero-bg Hero15 ${this.tight ? 'Hero15--tight' : ''}" id="hero-bg-15">
        <svg class="u-hiddenVisually">
          <symbol viewBox="0 0 40 21" id="hero-bee-symbol">
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M20.456.607c.6.557 1.032 1.108 1.387 1.66.38.55.656 1.098.883 1.648.427 1.096.74 2.188.642 3.272l-6.766-.15c-.05-1.088.31-2.164.786-3.243.252-.536.552-1.072.958-1.606.377-.534.834-1.066 1.46-1.596l.65.015z"/>
              <path d="M22.847 9.346c-.22.72-.352 1.44-.496 2.162l-4.922-.112c-.114-.727-.21-1.45-.4-2.18l5.822.13z"/>
              <path d="M21.903 13.67l-.516 2.16-3.192-.073-.42-2.18"/>
              <path d="M20.818 17.987c-.252.9-.52 1.803-.81 2.703l-.654-.015c-.25-.91-.476-1.824-.687-2.737l2.15.05z"/>
              <path class="js-beeWing" d="M39.465 8.366c.186-1.408-3.405-3.04-8.017-3.646-4.614-.61-8.504.04-8.69 1.45-.183 1.407 3.405 3.038 8.018 3.647 4.613.608 8.502-.044 8.69-1.45"/>
              <path class="js-beeWing" d="M39.526 5.494c-.04-1.418-3.845-2.46-8.497-2.327-4.65.133-8.39 1.393-8.35 2.813.04 1.42 3.843 2.46 8.494 2.326 4.65-.133 8.387-1.394 8.348-2.813"/>
              <path class="js-beeWing" d="M.442 7.72C.294 6.308 3.926 4.776 8.555 4.296c4.63-.48 8.497.27 8.645 1.685.147 1.416-3.486 2.95-8.115 3.43C4.458 9.89.587 9.136.442 7.72"/>
              <path class="js-beeWing" d="M.494 4.68c.104-1.416 3.95-2.287 8.59-1.947 4.64.34 8.317 1.766 8.214 3.183-.105 1.417-3.95 2.287-8.59 1.946C4.064 7.52.39 6.095.493 4.68"/>
            </g>
          </symbol>
          <svg viewBox="0 0 54 14" id="hero-bird-symbol">
            <path class="js-bird" d="M13.774.01C9.294.01 2.172 4.586 1.408 5.26c-.764.675-.826 1.707-.397 2.35.43.645 2.092.414 2.57.2.478-.214 3.01-1.287 6.168-1.287 3.258 0 9.663.873 15.858 6.648.513.456 1.006.684 1.48.684.472 0 .95-.223 1.43-.67 6.225-5.79 12.62-6.662 15.882-6.662 3.174 0 5.59 1.025 6.18 1.287.59.262 1.95.595 2.593-.2.645-.793.29-1.7-.282-2.218S44.918 0 40.375 0c-6.204 0-11.313 3.462-13.29 5.025C25.162 3.522 20.03.01 13.775.01z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
        </svg>
        <div class="Hero15-savannahSky">
          <div>
            <svg class="Hero15-bee" width="40" height="21"><use xlink:href="#hero-bee-symbol" /></svg>
            <svg class="Hero15-bee" width="40" height="21"><use xlink:href="#hero-bee-symbol" /></svg>
          </div>
          <div>
            <svg class="Hero15-bird" width="54" height="14"><use xlink:href="#hero-bird-symbol" /></svg>
            <svg class="Hero15-bird" width="54" height="14"><use xlink:href="#hero-bird-symbol" /></svg>
            <svg class="Hero15-bird" width="54" height="14"><use xlink:href="#hero-bird-symbol" /></svg>
            <svg class="Hero15-bird" width="54" height="14"><use xlink:href="#hero-bird-symbol" /></svg>
          </div>
          <div>
            <svg viewBox="0 0 50 50" width="50" height="50" class="Hero15-savannahCloud Hero15-savannahCloud--sm"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
            <svg viewBox="0 0 50 50" width="50" height="50" class="Hero15-savannahCloud Hero15-savannahCloud--md"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
            <svg viewBox="0 0 141 97" width="141" height="97" class="Hero15-savannahCloud Hero15-savannahCloud--xl Hero15-savannahCloud--dim">
              <path d="M21.993 88.693c6.74 0 12.764-3.038 16.8-7.813 2.785 2.513 6.465 4.055 10.513 4.055 3.77 0 7.22-1.327 9.93-3.534.953 8.774 8.376 15.6 17.402 15.6 7.735 0 14.28-5.012 16.6-11.963 4.996 3.78 11.2 6.047 17.95 6.047 16.466 0 29.812-13.346 29.812-29.81 0-10.58-5.527-19.846-13.837-25.138.07-.68.113-1.368.113-2.07 0-10.714-8.69-19.4-19.405-19.4-3.6 0-6.954 1-9.842 2.704C93.308 7.125 82.978 0 70.958 0 59.97 0 50.4 5.958 45.226 14.804c-3.896-3.884-9.27-6.288-15.208-6.288-11.886 0-21.53 9.64-21.53 21.526 0 6.206 2.642 11.78 6.84 15.706C6.443 48.573 0 56.884 0 66.703c0 12.144 9.848 21.99 21.993 21.99z" fill="currentColor" fill-rule="evenodd"/>
            </svg>
            <svg viewBox="0 0 50 50" width="50" height="50" class="Hero15-savannahCloud Hero15-savannahCloud--md"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
            <svg viewBox="0 0 50 50" width="50" height="50" class="Hero15-savannahCloud Hero15-savannahCloud--lg Hero15-savannahCloud--light"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
            <svg viewBox="0 0 50 50" width="50" height="50" class="Hero15-savannahCloud Hero15-savannahCloud--sm Hero15-savannahCloud--dark"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          </div>
        </div>
        <svg class="Hero15-savannah Hero15-savannah--left" viewBox="0 0 236 83" width="236" height="75">
          <g fill="none" fill-rule="evenodd">
            <path class="Hero15-savannahThing" d="M208.03 66.944v18.148h8.17V66.75c10.42-2.047 18.25-10.925 18.9-22.75h.043c0-.27-.003-.542-.01-.818.007-.26.01-.524.01-.788h-.04c-.725-15.08-11.315-38.402-24.02-38.402-12.704 0-22.866 23.323-23.562 38.402h-.03c0 .258.01.515.01.77 0 .282-.01.56-.01.836h.05c.71 12.252 9.45 21.34 20.5 22.944z" fill="#105702"/>
            <path class="Hero15-savannahThing" d="M166.305 66.468v16.595h8.58V66.416l12.18-.075c7.885 0 14.28-6.46 14.28-14.43 0-3.83-1.485-7.3-3.895-9.89 4.005-2.33 6.715-6.69 6.715-11.7 0-7.45-5.97-13.49-13.335-13.49-.29 0-.57.03-.855.05C189.27 7.44 181.51 0 172.005 0c-9.965 0-18.04 8.17-18.04 18.252 0 2.853.67 5.545 1.825 7.953-9.03 2.023-15.79 10.158-15.79 19.9 0 11.267 9.03 20.398 20.16 20.398.244 0 2.75-.014 6.145-.035z" fill="#FFF"/>
            <g fill="#FFF">
              <g class="Hero15-savannahThing">
                <path d="M72.64 43.7h.008c4.34 1.06 7.023-5.373 7.023-5.373l-7.55-.963H56.23l-7.553.963s2.682 6.432 7.02 5.373v8.545c0 3.81 3.12 6.93 6.933 6.93h3.08c3.814 0 6.93-3.12 6.93-6.93V43.7zm15.75-6.73c3.19 2.972 5.184 7.21 5.184 11.915 0 6.94-4.34 12.867-10.454 15.214-1.492 3.62-4.253 6.59-7.73 8.34v10.19c0 1.39-1.13 2.52-2.526 2.52s-2.528-1.13-2.528-2.528v-8.6c-.747.105-1.51.16-2.285.16-4.14 0-7.92-1.548-10.79-4.095V82.63c0 1.396-1.13 2.528-2.52 2.528s-2.53-1.13-2.53-2.526v-13.66c-.62.07-1.25.11-1.89.11-9 0-16.29-7.295-16.29-16.29 0-4.77 2.05-9.063 5.317-12.04-.61-1.71-.94-3.55-.94-5.467C38.4 26.293 45.69 19 54.687 19c3.22 0 6.225.935 8.753 2.55 2.525-1.615 5.53-2.55 8.75-2.55 8.996 0 16.29 7.293 16.29 16.29 0 .567-.03 1.127-.086 1.68z" fill-rule="nonzero"/>
                <path d="M60.37 48.162c0 .7-.568 1.27-1.27 1.27-.7 0-1.266-.57-1.266-1.27 0-.7.567-1.266 1.266-1.266.702 0 1.27.567 1.27 1.266"/>
                <path d="M70.514 48.162c0 .7-.567 1.27-1.266 1.27-.702 0-1.27-.57-1.27-1.27 0-.7.568-1.266 1.27-1.266.7 0 1.266.567 1.266 1.266"/>
              </g>
              <g class="Hero15-savannahThing">
                <path d="M26.42 56c.003 0 .005 0 .008.002 2.967.73 4.8-3.672 4.8-3.672l-5.166-.66H15.195l-5.166.66s1.83 4.4 4.8 3.672v5.844c0 2.61 2.13 4.743 4.74 4.743h2.11c2.6 0 4.74-2.14 4.74-4.75V56zm-1.575 20.75c-.51.07-1.032.108-1.562.108-2.835 0-5.422-1.058-7.388-2.8v8.58c0 .955-.773 1.73-1.727 1.73-.955 0-1.728-.775-1.728-1.73v-9.346c-.426.05-.86.074-1.298.074C4.99 73.366 0 68.376 0 62.224c0-3.262 1.402-6.197 3.637-8.235-.416-1.17-.643-2.43-.643-3.74 0-6.16 4.986-11.15 11.142-11.15 2.203 0 4.257.64 5.986 1.74 1.73-1.108 3.784-1.748 5.988-1.748 6.153 0 11.142 4.99 11.142 11.142 0 .385-.02.77-.06 1.15 2.183 2.03 3.548 4.93 3.548 8.15 0 4.744-2.97 8.8-7.15 10.403-1.02 2.48-2.91 4.51-5.29 5.71v6.972c0 .95-.773 1.724-1.727 1.724-.954 0-1.728-.774-1.728-1.73v-5.89z"/>
                <path d="M18.026 59.056c0 .48-.387.867-.867.867s-.87-.387-.87-.867.38-.867.86-.867.86.38.86.86"/>
                <path d="M24.966 59.056c0 .48-.387.867-.867.867s-.87-.387-.87-.867.38-.867.86-.867.86.38.86.86"/>
              </g>
            </g>
          </g>
        </svg>
        <svg class="Hero15-savannah Hero15-savannah--right" viewBox="0 0 374 193" width="374" height="193">
          <g fill="#FFF" fill-rule="evenodd">
            <g class="Hero15-savannahThing">
              <path d="M153.76 157.156c-12.424 2.184-27.376-3.37-35.5-6.687 0 0-.852-1.04-3.126 3.24l-.55.89c2.15.95 4.207 1.73 6.217 2.43 2.04 2.79 3.42 6.33 3.99 9.03 1.42 6.76.79 25.64.9 26.56.12 1.13.64 1.04.64 1.04l1.87-.33c.75-.13.87-2.08.87-2.08.03-1.08 2.99-16.67 3.85-31.14 11.85 1.87 19.18-.37 19.18-.37s19.26-5.7 1.68-2.61"/>
              <path d="M114.608 124.877c-1.25 0-2.265-1.014-2.265-2.265 0-1.25 1.014-2.268 2.265-2.268 1.25 0 2.265 1.017 2.265 2.268 0 1.25-1.014 2.265-2.265 2.265m18.495 26.253c1.506-6.58 1.893-16.36 1.407-18.786l-.012-1.17c-.582-12.204-4.344-21.936-8.12-25.86-3.778-3.92-11.272-4.944-14.76-5.817-3.487-.87-2.79-1.58-3.63-4.794-.715-2.727-2.57-2.4-2.57-2.4s-17.066-.177-19.83-.054c-4 .17-4.16 2.42-4.16 2.42s-.174.76-1.19 10.05c-.733 6.7 1.454 20.22 2.87 28.03.55 3.02 9.273 7.56 9.273 7.56-.92-.37-9-1.6-10.55-5.18-4.13-9.56-6.38-26.51-6.8-30.48-.43-4.15-3.77-3.57-3.77-3.57s-19.04-.3-33.86.72c-14.82 1.01-22.52 7.55-27.46 13.07-4.94 5.52-7.4 9.56-9.43 21.91-1.75 10.62 1.65 31.33 2.68 36.93.64 3.5 1.16-1.89 1.16-1.89.46-5.95.49-7.11 1.17-18.42.68-11.24 1.97-16.29 1.97-16.29.59 3.646.86 14.66 1.15 22.36.29 7.7 1.59 27.2 1.98 32.42.22 2.97 3.28 2.41 3.28 2.41h24.24c2.99 0 2.844-2.77 2.844-2.77s-.23-19.117-.23-23.617c0-2.605 2.52-2.34 2.52-2.34h30.98c2.39 0 2.24 2.27 2.24 2.27v23.57c0 3.09 3.014 2.93 3.014 2.93h23.653c2.47 0 2.236-3.4 2.236-3.4v-18.1s.15-6.54.15-7.26c0 0 .177-2.26.777-3.566.6-1.31 1.26-3.437 3.16-4.034 1.91-.6 1.94-.95 2.78-2.08.76-1.02-.9-1.53-.9-1.53s-.84-.58-.21-1.72c.34-.61 1.59-3.39 1.59-3.39s1.9-4.62 5.25-2.93c9.71 4.907 15.14 4.787 15.14 4.787z"/>
            </g>
            <path class="Hero15-savannahThing" d="M185.042 75.952c-5.247-3.707-10.177-7.59-17.23-11.824-4.3-2.58-11.082-7.083-17.49-11.45l-27.652-.267c-4.95 0-8.997-2.79-8.997-6.2s4.047-6.2 8.997-6.2l17.86.17c.37-1.57 1.448-3.18 3.89-4.42 7.012-3.58 20.854-2.96 24.75.48 1.617 1.43 2.453 2.92 2.745 4.26l4.344.05c4.95 0 9 2.8 9 6.2 0 3.42-4.05 6.21-9 6.21l-13.78-.13c3.78 1.8 7.47 3.63 10.71 5.28 5.05 2.59 11.63 6.12 19.73 10.6l2.15-.74-9.32-38.31-14.74-.15c-4.95 0-9-4.05-9-9.002 0-4.95 4.05-9 9-9l7.71.08c-.68-2.513-.65-6.3 4.24-8.8 7.9-4.034 23.5-3.335 27.89.535 1.01.896 1.75 1.81 2.26 2.706 7.04-1.19 15.59-.198 18.52 2.384 1.42 1.255 2.24 2.56 2.614 3.763l8.27.084c4.943 0 9 4.05 9 8.998 0 4.95-4.057 8.997-9 8.997L219.71 30l-23.23 16.87 8.12 17.922c4.81-1.516 9.57-2.877 15.128-4.29 3.606-.957 7.26-1.775 10.923-2.557l-9.62-.11c-3.71 0-6.75-2.41-6.75-5.35 0-2.946 3.04-5.35 6.75-5.35h.17c.05-1.807.82-3.873 3.44-5.42 5.83-3.455 17.206-3.13 20.35-.01.674.674 1.18 1.37 1.536 2.053 3.85-.884 8.99-.395 10.66 1.08 1.045.923 1.47 1.9 1.506 2.71l2.55.03c3.717 0 6.75 2.406 6.75 5.35 0 2.945-3.033 5.35-6.75 5.35l-16.88-.187c-2.62 1.45-5.27 2.8-7.914 4.17-4.606 2.24-9.21 4.46-13.906 6.44-4.557 1.97-9.148 3.82-13.77 5.57l6 118.98c.01.08.05.157.05.24 0 .058-.03.097-.03.15-.077.67-.59 1.188-1.26 1.275-.065.01-.116.036-.18.036-.062 0-.11-.03-.173-.035h-32.54c-.06.006-.11.033-.174.033-.06 0-.11-.026-.175-.032-.59-.072-1.05-.48-1.2-1.04-.04-.124-.08-.244-.08-.38 0-.21.044-.41.12-.584l5.9-116.934zm25.87-46.07l-22.202-.232 4.178 9.217 18.025-8.986z"/>
            <g transform="translate(0 0)">
              <g class="Hero15-savannahThing">
                <path d="M352 192.38l2-37.38 4 5.12-1.82 32.26s-.22 1.4-4.18 0"/>
                <path d="M305 192.4l2.4-44.4 3.6 14.08-1.56 30.33s-.92 1.4-4.44 0"/>
                <path d="M363.53 160.8s-11.38-10.9-18.02-25.17h-21.3s-4.9 1.9-1.7 25.16l5.5 31.5s-.9 1.2-4.5 0L308.6 127c-1.6-6.16-.4-10.23-.4-10.23L324.28 98l31.8 18.7c9.6 6 10 12.4 10 12.4l4.63 13.4 3.4 17.6c-4.6-1.26-2.5-7.33-2.5-7.33l-3.6-10.24-5.7-15.56 11.7 65.36s-.5 1.4-4.4 0l-6.1-31.6z"/>
                <path class="Hero15-giraffeNeck js-giraffeNeck" d="M308 117.9l-14.3-77.36H276c.08-4.38 4.2-6.05 4.2-6.05 4.87-4.3 9.24-6.2 12.5-6.9.17-.1-.42-.9-.55-3.3-.7-.3-1.17-.7-1.42-1.4-.4-1.1.14-2.4 1.13-2.8 1-.4 2.17-.2 2.8.9.43.7.4 1.5-.08 2.4.73 1.6.72 3.7.92 3.7 1.88-.2 2.96.1 2.96.1s2.76-1.1 5.3-.8c2.5.3-1.68 5.5-1.68 5.5l22.4 67.1L308 117.9z"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    `
  }
}
