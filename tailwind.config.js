module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    fontSize: {
      'base': '10px',
      'p-mobile': '1.4rem',
      'p-desktop': '1.8rem',

      'h-mobile': '2.4rem',
      'h-desktop': '3rem',

    },
    letterSpacing: {
      'title-mobile': '1px',
      'title-desktop': '2px',

    },
    lineHeight: {
      'title': '1',
      '12': '3rem',
    },
    extend: {
      height: {
        'img-desktop': 'calc(100vh - 165px)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      gridTemplateColumns: {
        //—————————————————————| Style 01
        '01-global-desktop': '75px auto 145px 75px',
        '01-global-mobile': '15px auto 15px',

        '01-content-desktop': 'repeat(12, 1fr)',
        '01-content-mobile': 'repeat(3, 1fr)',

        '01-project-content-desktop': '2fr 1fr',
        
        '02-global-desktop': 'auto 1000px 250px auto',
        '02-global-mobile': '15px auto 15px',
      },
      gridColumn: {
        //—————————————————————| Style 02
        'header-desktop': '2 / 3',
        'aside-desktop': '3 / 4',
        'main-desktop': '2 / 4',

        //—————————————————————| Style 01
        'fullpage-desktop': '1 / 5',
        'fullpage-mobile': '1 / 4',
        'aside-desktop': '3 / 3',

        'content-desktop': '2 / 3',
        'content-mobile': '2 / 2',

        'feed-thumbnail-desktop': '1 / 5',
        'feed-text-desktop': '5 / 9',

        'feed-thumbnail-mobile': ' 1 / 4',
        'feed-text-mobile': '1 / 4',


        'half-left': '1 / 7',
        'half-right': '7 / 13',

        'half-content-left': '1 / 2',
        'half-content-right': '2 / 3',

        'third-right': '8 / 13',
        'third-center': '5 / 9',
        'third-left': '1 / 5',


        'full-mobile': '1 / -1',
      },


      gridTemplateRows: {
        //—————————————————————| Style 01
        '01-global': '25px 75px auto 45px 25px',
        'auto': 'auto',

        '01-content-desktop': 'auto',
        '01-content-mobile': '1fr auto',

        '02-global': '100px auto',
        
      },
      gridRow: {
        '02-header': '1 / 1',




        'fullpage-global': '1 / 6',
        'header': '2 / 2',
        'footer': '4 / 4',
        'main': '3 / 4',

        'feed-thumbnail-desktop': '1 / 1',
        'feed-text-desktop': '1 / 1',

        'inline': '1 / 1',

        'feed-thumbnail-mobile': ' 1 / 1',
        'feed-text-mobile': '2 / 2',
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
