import typography from '@tailwindcss/typography';
import containerQuries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: 'var(--color-gray-50, #D4ECFF)', /* Azul muy claro */
					100: 'var(--color-gray-100, #B8E0FF)', /* Azul pastel */
					200: 'var(--color-gray-200, #9CD4FF)', /* Azul suave */
					300: 'var(--color-gray-300, #72C1FF)', /* Azul intermedio */
					400: 'var(--color-gray-400, #4DA9E6)', /* Azul más intenso */
					500: 'var(--color-gray-500, #2A91CC)', /* Azul fuerte */
					600: 'var(--color-gray-600, #0165B4)', /* Azul oscuro */
					700: 'var(--color-gray-700, #014F8A)', /* Azul más oscuro */
					800: 'var(--color-gray-800, #013960)', /* Azul casi negro */
					850: 'var(--color-gray-850, #012740)', /* Azul muy oscuro */
					900: 'var(--color-gray-900, #191919)', /* Negro grisáceo */
					950: 'var(--color-gray-950, #0D0D0D)' /* Negro absoluto */
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			}
		}
	},
	plugins: [typography, containerQuries]
};
