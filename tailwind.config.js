/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class", "class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'xxs': '320px',
				'xs': '412px',
				'xsm': '512px',
			},
			fontFamily: {
				dalton: ['DaltonWhite', 'cursive'],
				signature: ['Signature', 'cursive'],
				amsterdam: ['AmsterdamHandwriting', 'cursive'],

			},
			transform: {
				'preserve-3d': 'preserve-3d',
				'backface-hidden': 'backface-visibility: hidden',
			},

			animation: {
				beam: 'beamAnim 1.5s linear infinite',
				'spin-slow': 'spin 20s linear infinite',
				'spin-reverse': 'spin-reverse 20s linear infinite',
				'rectangle-orbit': 'rectanglePath 10s linear infinite',
			},
			keyframes: {
				'spin-reverse': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(-360deg)' },
				},
				rectanglePath: {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(200px, 0)' },
					'50%': { transform: 'translate(200px, 200px)' },
					'75%': { transform: 'translate(0, 200px)' },
					'100%': { transform: 'translate(0, 0)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				animation: {
					slideIn: 'slideIn 0.8s ease forwards',
				},
				beamAnim: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			}
		}
	},
	plugins: [
	],


}