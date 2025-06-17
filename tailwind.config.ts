
import type { Config } from "tailwindcss";

export default {
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
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Roboto', 'sans-serif'],
			},
			colors: {
				// DMAC Brand Colors - Simplified
				'dmac-yellow': '#FEF800',
				'dmac-yellow-hover': '#E6DF00',
				'dmac-red': '#BF0411',
				'dmac-red-hover': '#A0030E',
				
				// Semantic colors - Light mode only
				border: '#e2e8f0', // slate-200
				input: '#e2e8f0', // slate-200
				ring: '#FEF800', // dmac-yellow
				background: '#ffffff', // white
				foreground: '#000000', // black
				primary: {
					DEFAULT: '#FEF800', // dmac-yellow
					foreground: '#000000' // black
				},
				secondary: {
					DEFAULT: '#f8fafc', // slate-50
					foreground: '#0f172a' // slate-900
				},
				destructive: {
					DEFAULT: '#BF0411', // dmac-red
					foreground: '#ffffff' // white
				},
				muted: {
					DEFAULT: '#f8fafc', // slate-50
					foreground: '#64748b' // slate-500
				},
				accent: {
					DEFAULT: '#f8fafc', // slate-50
					foreground: '#0f172a' // slate-900
				},
				popover: {
					DEFAULT: '#ffffff', // white
					foreground: '#000000' // black
				},
				card: {
					DEFAULT: '#ffffff', // white
					foreground: '#000000' // black
				}
			},
			borderRadius: {
				lg: '0.5rem',
				md: 'calc(0.5rem - 2px)',
				sm: 'calc(0.5rem - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			screens: {
				'xs': '475px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
