import { useRedirectBakOrHome } from '@/shared/hooks/useRedirectBakOrHome'

export function Redirect() {
	useRedirectBakOrHome(true)
	return null //NOTE - There might be your 404 page.
}
