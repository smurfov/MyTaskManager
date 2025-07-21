import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirectBakOrHome = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (window.history.length > 2) {
			navigate(-1)
		} else {
			navigate('/')
		}
	}, [navigate])
}
