import { ReactNode, useCallback, useState } from 'react'

export const useMultistage = (steps: ReactNode[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0)

	const prev = useCallback(() => {
		setCurrentStepIndex(index => {
			if (index === 0) return index
			return index - 1
		})
	}, [])

	const next = useCallback(() => {
		setCurrentStepIndex(index => {
			if (index === steps.length - 1) return index
			return index + 1
		})
	}, [steps.length])

	return { currentStepIndex, functions: { prev, next } }
}
