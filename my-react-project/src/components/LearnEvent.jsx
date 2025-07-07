
const LearnEvent = () => {

    const handleClick = () => {
        console.log("Button clicked!");
    }

    const handleClickAgain = (param) => {
        console.log(param);
    }


    return (
        <>
            <button onClick={handleClick}>Click Here</button>
            <br />
            <button onClick={() => handleClickAgain("Clicked Again")}>Click Again</button>
        </>
    )
}

export default LearnEvent