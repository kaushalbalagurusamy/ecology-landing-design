
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Playfair Display', 'serif'],
				body: ['Open Sans', 'sans-serif'],
			},
			colors: {
				border: 'rgb(var(--border))',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--ring))',
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				primary: {
					DEFAULT: 'rgb(var(--primary))',
					foreground: 'rgb(var(--primary-foreground))',
					50: '#EDF7F2',
					100: '#D5EADF',
					200: '#ACDBBE',
					300: '#84CC9D',
					400: '#5BBD7C',
					500: '#2D6A4F',
					600: '#225038',
					700: '#1A3D2A',
					800: '#11291C',
					900: '#09140E',
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary))',
					foreground: 'rgb(var(--secondary-foreground))',
					50: '#F6F0ED',
					100: '#E9D9D1',
					200: '#D4B3A3',
					300: '#BE8E75',
					400: '#A96847',
					500: '#774936',
					600: '#5F3A2B',
					700: '#472B20',
					800: '#301C15',
					900: '#180E0B',
				},
				accent: {
					DEFAULT: 'rgb(var(--accent))',
					foreground: 'rgb(var(--accent-foreground))',
					50: '#F7FCF9',
					100: '#EAF7EF',
					200: '#D0EEDE',
					300: '#B6E5CD',
					400: '#9CDCBC',
					500: '#95D5B2',
					600: '#77AA8F',
					700: '#59806B',
					800: '#3B5548',
					900: '#1E2B24',
				},
				cream: {
					50: '#FFFFFF',
					100: '#FDFEFE',
					200: '#FBFDFC',
					300: '#F9FBFA',
					400: '#F6F9F8',
					500: '#F1FAEE',
					600: '#C1C8BE',
					700: '#91968F',
					800: '#60645F',
					900: '#303230',
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive))',
					foreground: 'rgb(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'rgb(var(--muted))',
					foreground: 'rgb(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'rgb(var(--popover))',
					foreground: 'rgb(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'rgb(var(--card))',
					foreground: 'rgb(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
