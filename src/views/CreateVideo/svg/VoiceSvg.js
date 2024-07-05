import React from 'react'
import { useSkin } from "@hooks/useSkin";
const VoiceSvg = ({ color }) => {
    const { skin, setSkin } = useSkin();
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2ZM7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7Z" fill={color} />
        </svg>
    )
}

export default VoiceSvg