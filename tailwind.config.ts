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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'dark-bg': 'hsl(230, 25%, 7%)',
				'dark-bg-alt': 'hsl(230, 25%, 9%)',
				'dark-card': 'hsl(230, 25%, 12%)',
				'dark-border': 'hsl(230, 25%, 18%)',
				'dark-border-bright': 'hsl(230, 25%, 25%)',
				'accent-vibrant': 'hsl(178, 100%, 50%)',
				'accent-secondary': 'hsl(300, 69%, 61%)',
				'accent-tertiary': 'hsl(330, 80%, 65%)',
				'neon-blue': 'hsl(195, 100%, 60%)',
				'neon-violet': 'hsl(270, 100%, 70%)',
				'neon-teal': 'hsl(168, 90%, 60%)',
				'neon-pink': 'hsl(330, 95%, 65%)',
				'neon-blue-glow': 'rgb(32, 156, 255)',
				'neon-purple-glow': 'rgb(190, 75, 255)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				imadlab: {
					'deep-navy': '#1A237E',
					'black': '#000000',
					'neon-blue': '#40C4FF',
					'neon-green': '#00E676',
					'semi-transparent-dark': 'rgba(26, 26, 26, 0.85)'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'wave': {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14.0deg)' },
					'20%': { transform: 'rotate(-8.0deg)' },
					'30%': { transform: 'rotate(14.0deg)' },
					'40%': { transform: 'rotate(-4.0deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'morph': {
					'0%': { borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%' },
					'50%': { borderRadius: '40% 60% 30% 70% / 50% 60% 30% 60%' },
					'100%': { borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%' }
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 10px 2px rgba(var(--glow-color), 0.6)' },
					'50%': { boxShadow: '0 0 16px 4px rgba(var(--glow-color), 0.8)' },
					'100%': { boxShadow: '0 0 10px 2px rgba(var(--glow-color), 0.6)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'wave': 'wave 2.5s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 4s linear infinite',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'blur-in': 'blur-in 0.6s ease-out',
			},
			fontFamily: {
				sans: ['Inter', 'Roboto', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				heading: ['Space Grotesk', 'sans-serif'],
				display: ['"Clash Display"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'dot-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
				'imadlab-gradient': 'linear-gradient(135deg, #1A237E 0%, #000000 100%)',
				'neon-grid': 'linear-gradient(rgba(32, 156, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 156, 255, 0.1) 1px, transparent 1px)',
				'dark-mesh': 'radial-gradient(at 40% 40%, rgb(20, 24, 40) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(30, 30, 70) 0px, transparent 50%)',
				'neon-glow-blue': 'linear-gradient(to right, rgba(32, 156, 255, 0), rgba(32, 156, 255, 0.2), rgba(32, 156, 255, 0))',
				'neon-glow-purple': 'linear-gradient(to right, rgba(190, 75, 255, 0), rgba(190, 75, 255, 0.2), rgba(190, 75, 255, 0))',
				'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
			},
			boxShadow: {
				'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-accent': '4px 4px 0px 0px hsl(var(--accent))',
				'glow': '0 0 20px rgba(var(--accent), 0.3)',
				'neon-blue-glow': '0 0 15px rgba(64, 196, 255, 0.6)',
				'neon-green-glow': '0 0 15px rgba(0, 230, 118, 0.6)',
				'neon-purple-glow': '0 0 15px rgba(190, 75, 255, 0.6)',
				'glass': '0 0 20px rgba(0, 0, 0, 0.2)',
				'glass-light': '0 8px 20px rgba(0, 0, 0, 0.15)',
				'3d-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
				'inner-glow': 'inset 0 0 15px rgba(64, 196, 255, 0.3)',
			},
			backdropBlur: {
				'sm': '4px',
				DEFAULT: '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '40px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
