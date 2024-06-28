import { useEffect, useState } from 'react'

const handleMatch = (query: string) => matchMedia(query).matches

export const useMediaQuery = (query: string) => {
	const [isMatch, setIsMatch] = useState(handleMatch(query))

	useEffect(() => {
		const handleResize = () => setIsMatch(handleMatch(query))

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [query])

	return isMatch
}
