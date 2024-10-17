async function fetchData() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com')
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        throw new Error(error);
    }
}
fetchData()