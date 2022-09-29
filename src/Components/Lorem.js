import React, { useState } from 'react';
import Items from './Items';
function Lorem() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    let generateParagraph = () => {
        let number = parseInt(count);
        if (number <= 0) {
            number = 1;
        } else if (number > 7) {
            number = 7;
        }
        setData(Items.slice(0, number));
    }
    return (
        <>
            <div className="container mt-5">
                <p className='text-center fw-bolder fs-1 mb-3' id='heading'>TIRED OF BORING LOREM IPSUM?</p>
                <div className="d-flex justify-content-center ">
                    <p className='fs-4 me-2 my-auto'>Paragraphs:</p>

                    <input type="number" className='me-2 border-0 rounded fs-3 text-center' name="" id="" value={count} onChange={(event) => setCount(event.target.value)} />

                    <button type="button" className="btn btn-info btn-sm text-center" id='generateBtn' onClick={() => generateParagraph()}>GENERATE</button>

                </div>
            </div>

            <div className="container mt-5 text-center w-50">
                {data.map((value, index) => {
                    return <p id='lorem' key={index}>{value}</p>
                })}

            </div>
        </>
    )
}

export default Lorem
