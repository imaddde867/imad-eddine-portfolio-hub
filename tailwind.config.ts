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
				'dark-bg': '#000000',
				'dark-bg-alt': '#1A1A1A',
				'dark-card': '#2C2C2C',
				'dark-border': '#2C2C2C',
				'dark-border-bright': '#3A3A3A',
				'accent-vibrant': '#FF5722',
				'accent-secondary': '#FFB300',
				'accent-tertiary': '#607D8B',
				'neon-blue': '#FF5722',
				'neon-violet': '#FFB300',
				'neon-teal': '#607D8B',
				'neon-pink': '#FF5722',
				'neon-blue-glow': 'rgb(255, 87, 34)',
				'neon-purple-glow': 'rgb(255, 179, 0)',
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
					'deep-navy': '#000000',
					'black': '#000000',
					'neon-blue': '#FF5722',
					'neon-green': '#FFB300',
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
				'float-smooth': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(10px, -8px) rotate(2deg)' },
					'50%': { transform: 'translate(0px, -12px) rotate(0deg)' },
					'75%': { transform: 'translate(-10px, -8px) rotate(-2deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'float-orbital': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(15px, -10px) rotate(3deg)' },
					'50%': { transform: 'translate(0px, -15px) rotate(0deg)' },
					'75%': { transform: 'translate(-15px, -10px) rotate(-3deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'float-orbital-alt': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(-12px, -12px) rotate(-2deg)' },
					'50%': { transform: 'translate(0px, -18px) rotate(0deg)' },
					'75%': { transform: 'translate(12px, -12px) rotate(2deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
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
				'grid-shift': {
					'0%': { backgroundPosition: '0 0, 0 0' },
					'100%': { backgroundPosition: '40px 40px, 40px 40px' }
				},
				'mesh-shift': {
					'0%': { backgroundPosition: '0% 0%, 0% 0%' },
					'50%': { backgroundPosition: '100% 100%, 100% 100%' },
					'100%': { backgroundPosition: '0% 0%, 0% 0%' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'50%': { transform: 'translateY(-20px) translateX(10px)' },
					'100%': { transform: 'translateY(0) translateX(0)' }
				},
				'pulse-slow': {
					'0%': { opacity: '0.2', transform: 'scale(1)' },
					'50%': { opacity: '0.3', transform: 'scale(1.05)' },
					'100%': { opacity: '0.2', transform: 'scale(1)' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' }
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
				'float-smooth': 'float-smooth 5s ease-in-out infinite',
				'float-orbital': 'float-orbital 6s ease-in-out infinite',
				'float-orbital-alt': 'float-orbital-alt 7s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 4s linear infinite',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'blur-in': 'blur-in 0.6s ease-out',
				'grid-shift': 'grid-shift 20s linear infinite',
				'mesh-shift': 'mesh-shift 30s ease-in-out infinite',
				'particle-float': 'particle-float 8s ease-in-out infinite',
				'float-slow': 'float 15s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'slide-right': 'slide-right 20s linear infinite',
				'slide-left': 'slide-left 20s linear infinite',
			},
			fontFamily: {
				display: ['Clash Display', 'sans-serif'],
				heading: ['Space Grotesk', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'dot-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
				'imadlab-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
				'neon-grid': 'linear-gradient(rgba(255, 87, 34, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 87, 34, 0.1) 1px, transparent 1px)',
				'dark-mesh': 'radial-gradient(at 40% 40%, rgb(26, 26, 26) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(44, 44, 44) 0px, transparent 50%)',
				'neon-glow-blue': 'linear-gradient(to right, rgba(255, 87, 34, 0), rgba(255, 87, 34, 0.2), rgba(255, 87, 34, 0))',
				'neon-glow-purple': 'linear-gradient(to right, rgba(255, 179, 0, 0), rgba(255, 179, 0, 0.2), rgba(255, 179, 0, 0))',
				'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
				'modern-grid': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
				'modern-mesh': "linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)",
				'particle-dots': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
			},
			boxShadow: {
				'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
				'brutal-accent': '4px 4px 0px 0px hsl(var(--accent))',
				'glow': '0 0 20px rgba(var(--accent), 0.3)',
				'neon-blue-glow': '0 0 15px rgba(255, 87, 34, 0.6)',
				'neon-green-glow': '0 0 15px rgba(255, 179, 0, 0.6)',
				'neon-purple-glow': '0 0 15px rgba(96, 125, 139, 0.6)',
				'glass': '0 0 20px rgba(0, 0, 0, 0.2)',
				'glass-light': '0 8px 20px rgba(0, 0, 0, 0.15)',
				'3d-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
				'inner-glow': 'inset 0 0 15px rgba(255, 87, 34, 0.3)',
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
	plugins: [],
} satisfies Config;
