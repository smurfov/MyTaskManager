import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirectBakOrHome = (shouldRedirect: boolean) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (shouldRedirect) {
			if (window.history.length > 2) {
				navigate(-1)
			} else {
				navigate('/')
			}
		}
	}, [navigate, shouldRedirect])
}
