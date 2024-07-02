/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '250/141': '250 / 141',
        '16/9': '16 / 9',
        '2/3': '2 / 3',
      },
      gridAutoColumns: {
        three: 'calc((100% - 2 * 20px) / 3)',
        four: 'calc((100% - 3 * 20px) / 4)',
        five: 'calc((100% - 4 * 20px) / 5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          maskImage: 'linear-gradient(black 90%, transparent)',
        },
      });
    },
  ],
};
