import { useEffect, useState } from "react"

const LearnUseEffect = () => {

    const [count, setCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const generateRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100)
        setRandomNumber(randomNum);
    }

    useEffect(() => {
        console.log("Use Effect is called");

        // Clean up function
        return () => {
            console.log("Cleanup function is called");
        }
    })

    // useEffect(() => {
    //     console.log("Use Effect is called");
    // }, [])

    // useEffect(() => {
    //     console.log("Use Effect is called");
    // }, [count, randomNumber])

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            <hr />
            <h1>Random Number: {randomNumber}</h1>
            {/* <button onClick={ }>Increase Count</button> */}
            <button onClick={generateRandomNum}>Generate Number</button>
        </>
    )
}

export default LearnUseEffect