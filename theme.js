import { dark as theme } from 'mdx-deck/themes';

export default {
  ...theme,
  colors: {
    background: '#0e0e0e',
    text: '#fff',
    preBackground: '#464547',
    code: '#ff5b5b',
    link: '#fff',
  },
  h1: {
    fontFamily: 'Newzald, serif',
    color: 'white',
    fontSize: '30pt',
    fontWeight: 400,
  },
  h2: {
    fontFamily: '"DIN OT", serif',
    color: 'white',
    fontSize: '18pt',
    fontWeight: 300,
  },
  h3: {
    fontFamily: '"DIN OT", serif',
    color: 'white',
    fontSize: '18pt',
    fontWeight: 300,
  },
  p: {
    fontFamily: '"DIN OT"',
    color: 'white',
    fontSize: '15pt',
    fontWeight: 300,
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
