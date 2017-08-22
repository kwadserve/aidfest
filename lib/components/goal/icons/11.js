const html = require('choo/html');

const label = exports.label = () => html`
  <svg viewBox="0 0 1000 205"><g fill="currentColor" fill-rule="evenodd"><path d="M292.55 84.4c13.98 0 20-7.96 20-19.17v-4c0-9.03-3.6-13.6-11.08-21.2l-8.8-8.7c-3.98-3.85-6.5-6.5-6.5-11.1v-1.67c0-4.6 2.65-6.76 6.5-6.76 4.33 0 6.5 2.3 6.5 7v7.1h12.55v-6.62C311.72 7.48 306.3.7 292.55.7c-13.4 0-19.3 7.85-19.3 17.97v2.8c0 9.38 3.63 14.1 11.46 21.8l8.08 8.1c4.22 3.96 6.15 6.87 6.15 11.56v3.13c0 4.35-1.93 7.24-6.26 7.24-4.7 0-6.75-2.65-6.75-7.24v-11.2h-12.76v10.97c0 10.73 5.4 18.57 19.4 18.57M358.47 63.54V1.66H345.8v63.2c0 4.83-1.92 8.07-6.75 8.07-4.82 0-6.74-3.24-6.74-8.07V1.66h-13.74v61.88c0 12.66 6.03 20.86 20.5 20.86 13.98 0 19.4-8.2 19.4-20.86M404.88 65.23v-4c0-9.03-3.63-13.6-11.08-21.2l-8.8-8.7c-4-3.85-6.53-6.5-6.53-11.08v-1.7c0-4.58 2.67-6.75 6.52-6.75 4.33 0 6.5 2.28 6.5 7v7.1h12.53v-6.62c0-11.83-5.4-18.57-19.16-18.57-13.38 0-19.3 7.85-19.3 17.98v2.77c0 9.4 3.64 14.1 11.48 21.83l8.06 8.1c4.23 3.95 6.15 6.85 6.15 11.55v3.15c0 4.32-1.92 7.23-6.26 7.23-4.7 0-6.76-2.65-6.76-7.22V54.84h-12.77v11c0 10.72 5.4 18.55 19.4 18.55 13.98 0 20-7.96 20-19.17M444.73 1.67H408.2V12.9h11.33v70.54h13.87V12.9h11.33V1.66M459.38 57.5l5.4-32.8h.14l5.43 32.8h-10.97zm13.85-55.84h-15.67l-15.43 81.77h13.02l2.4-14.94h14.6l2.53 14.93h14.1L473.24 1.66zM494.33 83.44h13.74V1.68h-13.74M555.7 83.44V1.67h-11.45v46.9L529.4 1.67h-13.5v81.77h11.6V32.06l16.13 51.38h12.07M582.8 24.7h.12l5.44 32.8h-11l5.43-32.8zm-7.23 43.78h14.6l2.5 14.95h14.1L591.25 1.66h-15.67l-15.43 81.77h13.02l2.4-14.95zM637.73 65.6c0 4.34-2.16 6.63-6.75 6.63h-6V46.66h5.88c4.82 0 6.87 2.3 6.87 6.62v12.3zm-12.76-52.7h4.7c4.57 0 6.63 2.15 6.63 6.62v10c0 4.36-2.06 6.65-6.52 6.65h-4.8V12.9zm24.46 15.05v-8.3c0-11.6-4.57-17.98-18.32-17.98h-19.9v81.77h21.35c13.75 0 18.92-6.4 18.92-17.97V54.62c0-7.48-3.36-12.07-10.24-13.63 5.67-1.82 8.2-6.16 8.2-13.05zM670.87 1.67h-13.74v81.77h30.12V72.22h-16.38V1.67M725.1 12.9V1.66h-32.8v81.77h32.8V72.22h-19.06V47.37h13.62V36.3h-13.62V12.9h19.05M768.7 84.4c14.58 0 19.4-8.68 19.4-20.38v-14.1h-12.54V65c0 4.8-1.7 7.94-6.63 7.94-4.94 0-6.98-3.5-6.98-8.44V20.6c0-4.94 2.04-8.44 6.98-8.44s6.63 2.9 6.63 7.96v10.75h12.55v-9.65c0-12.07-4.22-20.5-19.4-20.5-14.47 0-20.5 9.27-20.5 22.05v39.57c0 12.66 6.03 22.06 20.5 22.06M794.57 83.44h13.72V1.68h-13.73M838.75 83.44V12.9h11.3V1.66h-36.5V12.9h11.32v70.54h13.88M855.43 83.44h13.73V1.68h-13.73M876.24 83.44h32.78V72.22h-19.04V47.37h13.6V36.3h-13.6V12.9h19.04V1.66h-32.78v81.77M932.3 31.34c-3.97-3.87-6.48-6.5-6.48-11.1v-1.68c0-4.6 2.64-6.76 6.5-6.76 4.35 0 6.5 2.3 6.5 7v7.1h12.55V19.3C951.37 7.45 945.94.7 932.2.7c-13.4 0-19.28 7.85-19.28 17.97v2.8c0 9.38 3.6 14.1 11.44 21.8l8.07 8.1c4.24 3.96 6.16 6.87 6.16 11.56v3.13c0 4.35-1.93 7.24-6.3 7.24-4.7 0-6.74-2.65-6.74-7.24v-11.2H912.8v10.97c0 10.73 5.4 18.57 19.4 18.57 13.97 0 20.02-7.96 20.02-19.17v-4c0-9.03-3.65-13.6-11.1-21.2l-8.8-8.7M290.6 177.5l5.42-32.78h.13l5.4 32.8H290.6zm-1.8-55.8l-15.45 81.74h13.03l2.4-14.95h14.6l2.53 14.94H320l-15.54-81.75H288.8zM355.22 168.6l-14.83-46.9h-13.5v81.75h11.57v-51.4l16.14 51.4h12.07V121.7h-11.45v46.9M403.08 183.9c0 4.95-2.17 8.32-7.83 8.32h-5.8V132.9h5.8c5.66 0 7.83 3.38 7.83 8.2v42.8zm-6.14-62.23h-21.22v81.78h21.22c14.7 0 19.88-9.4 19.88-21.95v-37.87c0-12.66-5.17-21.96-19.88-21.96zM460.23 120.72c-14.47 0-20.5 9.28-20.5 22.07v39.54c0 12.66 6.03 22.07 20.5 22.07 14.6 0 19.4-8.68 19.4-20.38v-14.1H467.1V185c0 4.82-1.7 7.95-6.63 7.95-4.94 0-7-3.5-7-8.44v-43.9c0-4.93 2.06-8.43 7-8.43 4.94 0 6.62 2.9 6.62 7.96v10.73h12.53v-9.65c0-12.05-4.2-20.48-19.4-20.48M516.17 184.5c0 4.96-2.17 8.45-7.1 8.45-4.84 0-7-3.5-7-8.44v-43.9c0-4.93 2.16-8.43 7-8.43 4.93 0 7.1 3.5 7.1 8.44v43.9zm-7.1-63.78c-14.48 0-20.74 9.28-20.74 22.07v39.54c0 12.66 6.26 22.07 20.74 22.07 14.58 0 20.84-9.4 20.84-22.06V142.8c0-12.8-6.25-22.1-20.83-22.1v.02zM564.03 167.75h-.12l-8.9-46.08h-16.03v81.77h11.32v-53.06h.23l10.25 53.06h6.38l9.3-53.06h.35v53.06h12.55v-81.77H572l-7.97 46.08M623.48 167.75h-.12l-8.92-46.08H598.4v81.77h11.34v-53.06h.23l10.24 53.06h6.4l9.28-53.06h.37v53.06h12.53v-81.77h-17.35l-7.95 46.08M685.08 184.87c0 4.83-1.92 8.1-6.75 8.1-4.82 0-6.75-3.27-6.75-8.1V121.7h-13.75v61.83c0 12.68 6.03 20.88 20.5 20.88 13.98 0 19.4-8.2 19.4-20.87V121.7h-12.65v63.17M735.13 168.6l-14.85-46.9h-13.5v81.75h11.6v-51.4l16.13 51.4h12.06V121.7h-11.43v46.9M71.65 38.4v35.37h.3L95.72 49.1h.3v154.33h33.9V1.8h-27.06L71.65 38.4M148.97 38.4v35.37h.3l23.8-24.68h.28v154.33h33.9V1.8h-27.04l-31.23 36.6M755.64 203.44h13.74v-81.77h-13.74M776.86 132.9h11.33v70.54h13.85V132.9h11.33v-11.23h-36.52v11.22M820.98 203.44h13.75v-81.77h-13.75M843.9 203.44h32.8v-11.22h-19.07V167.4h13.63v-11.1h-13.63v-23.4h19.06v-11.23h-32.8v81.77M903.33 151.35c-3.97-3.87-6.5-6.52-6.5-11.1v-1.7c0-4.58 2.64-6.74 6.5-6.74 4.34 0 6.5 2.3 6.5 7v7.12h12.55v-6.63c0-11.84-5.43-18.6-19.17-18.6-13.38.02-19.28 7.86-19.28 18v2.76c0 9.4 3.62 14.1 11.46 21.82l8.08 8.1c4.2 3.96 6.14 6.86 6.14 11.56v3.14c0 4.34-1.93 7.24-6.27 7.24-4.7 0-6.75-2.65-6.75-7.24v-11.2H883.8v10.96c0 10.73 5.42 18.57 19.4 18.57 14 0 20.02-7.94 20.02-19.15v-4c0-9.04-3.62-13.6-11.1-21.22l-8.8-8.68"/></g></svg>
`;

const glyph = exports.glyph = () => html`
  <svg viewBox="0 0 1000 508"><g fill="currentColor" fill-rule="evenodd"><path d="M165 367.3h150.5c2 0 3.6-1.7 3.6-3.7 0-1-.2-1.8-.8-2.4l-.2-.3-75-97-.6-.7c-.7-.7-1.6-1.2-2.7-1.2-1 0-1.8.5-2.4 1l-.5.6-.7.8-73 95.8-1 1.3c-.4.6-.7 1.3-.7 2 0 2 1.7 3.8 3.7 3.8M315 381H164.3c-2 0-3.7 1.6-3.7 3.6v118c0 2 1.6 3.7 3.7 3.7h48.5V432c0-2 1.6-3.6 3.7-3.6h45c2 0 3.7 1.6 3.7 3.7v74.3H315c2 0 3.7-1.7 3.7-3.7v-118c0-2-1.7-3.6-3.7-3.6M822.4 398.4c0 2-1.6 3.5-3.6 3.5h-44.6c-2 0-3.7-1.7-3.7-3.6v-27c0-2 1.7-3.7 3.7-3.7h44.6c2 0 3.6 1.6 3.6 3.6v27zm0 50c0 2-1.6 3.6-3.6 3.6h-44.6c-2 0-3.7-1.6-3.7-3.6v-27c0-2 1.7-3.6 3.7-3.6h44.6c2 0 3.6 1.6 3.6 3.5v27zm-68-50c0 2-1.7 3.5-3.8 3.5H706c-2 0-3.6-1.7-3.6-3.6v-27c0-2 1.7-3.7 3.7-3.7h44.6c2 0 3.7 1.6 3.7 3.6v27zm0 50c0 2-1.7 3.6-3.8 3.6H706c-2 0-3.6-1.6-3.6-3.6v-27c0-2 1.7-3.6 3.7-3.6h44.6c2 0 3.7 1.6 3.7 3.5v27zm81.5-98.3H686.6c-2 0-3.6 1.6-3.6 3.6v150.7c0 2 1.7 3.5 3.7 3.5H836c2 0 3.6-1.6 3.6-3.5V353.6c0-2-1.7-3.5-3.7-3.5zM468 107.5c0 1-1 2-2 2h-33.5c-1 0-2-1-2-2V70.2c0-1 1-2 2-2H466c1 0 2 1 2 2v37.3zm0 85.5c0 1-1 2-2 2h-33.5c-1 0-2-1-2-2v-37.2c0-1 1-2 2-2H466c1 0 2 1 2 2V193zm0 85.6c0 1-1 2-2 2h-33.5c-1 0-2-1-2-2v-37.3c0-1 1-2 2-2H466c1 0 2 1 2 2v37.3zm0 85.5c0 1.2-1 2-2 2h-33.5c-1 0-2-.8-2-2v-37c0-1.2 1-2 2-2H466c1 0 2 .8 2 2v37zm0 85.7c0 1-1 2-2 2h-33.5c-1 0-2-1-2-2v-37.3c0-1 1-2 2-2H466c1 0 2 1 2 2v37.3zm-65.7-342.2c0 1-1 2-2 2H367c-1 0-2-1-2-2V70.2c0-1 1-2 2-2h33.4c1 0 2 1 2 2v37.3zm0 85.5c0 1-1 2-2 2H367c-1 0-2-1-2-2v-37.2c0-1 1-2 2-2h33.4c1 0 2 1 2 2V193zm0 85.6c0 1-1 2-2 2H367c-1 0-2-1-2-2v-37.3c0-1 1-2 2-2h33.4c1 0 2 1 2 2v37.3zm0 85.5c0 1.2-1 2-2 2H367c-1 0-2-.8-2-2v-37c0-1.2 1-2 2-2h33.4c1 0 2 .8 2 2v37zm0 85.7c0 1-1 2-2 2H367c-1 0-2-1-2-2v-37.3c0-1 1-2 2-2h33.4c1 0 2 1 2 2v37.3zM489 .4H343.3c-2 0-3.6 1.6-3.6 3.6v499c0 2 1.6 3.5 3.6 3.5h146c2 0 3.5-1.6 3.5-3.6V4c0-2-1.6-3.6-3.6-3.6zM839.4 335c0 1.6-1.3 3-3 3H686.2c-1.6 0-3-1.4-3-3v-30c0-1.8 1.4-3 3-3h150.2c1.7 0 3 1.2 3 3v30M649 247c0 2-1.7 3.7-3.7 3.7h-43.5c-2 0-3.6-1.6-3.6-3.6v-27c0-2 1.6-3.7 3.6-3.7h43.5c2 0 3.6 1.6 3.6 3.6v27zm0 50.4c0 2-1.7 3.6-3.7 3.6h-43.5c-2 0-3.6-1.6-3.6-3.6v-27.2c0-2 1.6-3.6 3.6-3.6h43.5c2 0 3.6 1.6 3.6 3.6v27.2zm0 50.4c0 2-1.7 3.5-3.7 3.5h-43.5c-2 0-3.6-1.6-3.6-3.5v-27.3c0-2 1.6-3.6 3.6-3.6h43.5c2 0 3.6 1.5 3.6 3.5v27.3zm0 50.3c0 2-1.7 3.6-3.7 3.6h-43.5c-2 0-3.6-1.6-3.6-3.5V371c0-2 1.6-3.5 3.6-3.5h43.5c2 0 3.6 1.5 3.6 3.5V398zm0 50.4c0 2-1.7 3.6-3.7 3.6h-43.5c-2 0-3.6-1.6-3.6-3.6v-27.2c0-2 1.6-3.6 3.6-3.6h43.5c2 0 3.6 1.6 3.6 3.6v27.2zm-66.5-211v60c0 2-1.6 3.6-3.6 3.6h-43.6c-2 0-3.6-1.6-3.6-3.5V290c0-.6 0-1 .3-1.4l.3-.4c0-.2.2-.4.3-.5 0-.2.3-.4.4-.6 5.6-7.8 30.7-38.8 41.2-51.7l1-1.3c1-1 2-1.5 3.3-1.5 2 0 3.6 1.5 4 3.4v1.5zm0 110.4c0 2-1.7 3.5-3.7 3.5h-43.5c-2 0-3.6-1.6-3.6-3.5v-27.3c0-2 1.6-3.6 3.6-3.6h43.5c2 0 3.6 1.5 3.6 3.5v27.3zm0 50.3c0 2-1.7 3.6-3.7 3.6h-43.5c-2 0-3.6-1.6-3.6-3.5V371c0-2 1.6-3.5 3.6-3.5h43.5c2 0 3.6 1.5 3.6 3.5V398zm0 50.4c0 2-1.7 3.6-3.7 3.6h-43.5c-2 0-3.6-1.6-3.6-3.6v-27.2c0-2 1.6-3.6 3.6-3.6h43.5c2 0 3.6 1.6 3.6 3.6v27.2zm22.6-255l1-1.2c10-12.6 26.5-33 34.5-42.8l1-1.3c.8-.8 2-1.4 3.3-1.4 2 0 3.6 1.4 4 3.3v46c0 2.2-1.8 4-4 4h-.2-36-.2-.2c-2.2 0-4-1.8-4-4 0-1 .4-1.8 1-2.5zm60.5-98.7c-.5-1.7-2-2.8-3.7-2.8-.8 0-1.5.2-2 .6h-.4l-1.2 1.7-143.5 182-.6 1c-.7.6-1 1.6-1.2 2.7v223.7c0 2 1.6 3.5 3.6 3.5h146c1.8 0 3.4-1.6 3.4-3.5V96c0-.4 0-1-.3-1.3z"/></g></svg>
`;

exports.icon = (opts) => html`
  <div class="Goal Goal--11 ${ Object.keys(opts).reduce((str, key) => opts[key] ? `${ str } Goal--${ key }` : str, '') }">
    <div class="Goal-label">${ label() }</div>
    <div class="Goal-glyph">${ glyph() }</div>
  </div>
`;