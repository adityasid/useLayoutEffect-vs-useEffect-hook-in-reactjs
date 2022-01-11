import React, { useState, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {

    const [show, setShow] = useState(false);
    const popupRef = useRef()
    const buttonRef = useRef()

    useLayoutEffect(() => {
        if (popupRef.current == null || buttonRef.current == null) return
        const { bottom } = buttonRef.current.getBoundingClientRect()
        popupRef.current.style.top = `${bottom + 25}px`;
    }, [show])

    return (
        <>
            <button ref={buttonRef} onClick={() => setShow(prev => !prev)}>
                Click Here
            </button>
            {show && (
                <div style={{ position: "absolute" }} ref={popupRef}>
                    This is a popup
                </div>
            )}
        </>
    )
}

export default UseLayoutEffect
