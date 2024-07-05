import React from 'react'
import { useSkin } from "@hooks/useSkin";

const CancelSvg = () => {
    const { skin, setSkin } = useSkin()
    return (
        <>
            {skin === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L18 18M2 18L18 2" stroke="black" strokeWidth="3.5" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L18 18M2 18L18 2" stroke="white" strokeWidth="3.5" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
            )}
        </>
    )
}

export default CancelSvg