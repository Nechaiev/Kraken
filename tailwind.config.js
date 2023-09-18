/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
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

        
      }
    },
  },
  plugins: [],
}

