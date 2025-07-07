
// const LearnProps = (props) => {

//     return (
//         <>
//             <h2>Props</h2>
//             <p>Stock Name: {props.stock}</p>
//             <p>Stock Price: {props.price}</p>
//         </>
//     )
// }

const LearnProps = ({ stock, price }) => {

    return (
        <>
            <h2>Props</h2>
            <p>Stock Name: {stock}</p>
            <p>Stock Price: {price}</p>
        </>
    )
}

export default LearnProps