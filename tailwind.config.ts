module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'app': {
          'bg': {
            'primary': '#1A1F24',
            'secondary': '#101213',
          },
          'text': {
            'primary': '#FFFFFF',
            'secondary': '#C0C0C0',
            'muted': '#8D8D8D',
          },
          'teal': {
            DEFAULT: '#39D2C0',
            'hover': '#32C0AF',
          },
          'purple': {
            DEFAULT: '#9489F5',
            'hover': '#7A6EE6',
          },
          'blue': {
            DEFAULT: '#3498DB',
            'hover': '#2980B9',
          },
          'success': '#4CAF50',
          'warning': '#FFD600',
          'error': '#F44336',
          'info': '#2196F3',
        },
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
