import { initial } from 'lodash'
import React, { useState, useEffect } from 'react'
import { json } from 'react-router-dom'

const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const localValue = window.localStorage.getItem(key)
            return localValue ? JSON.parse(localValue) : initialValue
        } catch (error) {
            return initialValue
        }
    }
    )
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]
    )
    return [value, setValue]

}

export default UseLocalStorage
