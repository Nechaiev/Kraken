/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient: 'var(--gradient)',
        blue: 'var(--blue)',
        brandBlue: 'var(--brandBlue)',
        blueSecond: 'var(--blueSecond)',
        purple: 'var(--purple)',
        brandPurple: 'var(--brandPurple)',
        red: 'var(--red)',
        redSecond: 'var(--redSecond)',
        green: 'var(--green)',
        greenSecond: 'var(--greenSecond)',
        gold: 'var(--gold)',
        goldSecond: 'var(--goldSecond)',
        light: 'var(--light)',
        gray: 'var(--gray)',
        graySecond: 'var(--graySecond)',
        grayThird: 'var(--grayThird)',
        grayFourth: 'var(--grayFourth)',
        dark: 'var(--dark)',
        darkSecond: 'var(--darkSecond)',
        darkThird: 'var(--darkThird)',  
      },
      fontSize: {
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
        h4: 'var(--h4)',
        h5: 'var(--h5)',
        h6: 'var(--h6)',

        caption: 'var(--caption)',
        button: 'var(--button)',
        buttonSmall: 'var(--buttonSmall)',
        paragraph: 'var(--paragraph)',
        link: 'var(--link)',
      }
    },
  },
  plugins: [],
}

