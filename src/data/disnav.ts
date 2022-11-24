type NavItem = {
	icon: string
	label: string
	url: string
}
type AuthRedirect = {
	[key: string]: string
}

export const disnav = [
	{ icon: 'fa6-solid:star-half', label: 'Category', url: '/' },
	{ icon: 'fa6-solid:graduation-cap', label: 'Autism', url: '/' },
	{ icon: 'fa6-solid:calendar-days', label: 'Dsylexia', url: '/calendar' },
	{ icon: 'fa6-solid:book', label: 'ADHD', url: '/assignment' },
] as const

export const authRedirect = {
	signIn: '/api/auth/signin?error=SessionRequired',
	accessDenied: '/api/auth/error?error=AccessDenied',
} as const
