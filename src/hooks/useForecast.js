import { useState } from "react"

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setforecast] = useState(null)

    // call the api

    return (
        isError,
        isLoading,
        forecast
    )

}
export default useForecast