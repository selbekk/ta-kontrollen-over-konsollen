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
    fontSize: 30,
    fontWeight: 400,
  },
  heading: {
    fontFamily: '"DIN OT"',
    color: 'white',
    fontSize: 18,
    fontWeight: 300,
  },
  p: {
    fontFamily: '"DIN OT Light"',
    color: 'white',
    fontSize: 15,
    fontWeight: 400,
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
