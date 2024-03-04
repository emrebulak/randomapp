import { useState } from 'react';

const Card = () => {

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState('');

    const handleGetRandomNumber = () => {
        if (max > min) {
            setRandomNumber( getRandomNumber(Number(min), Number(max)));
        }else{
            alert('Max value should be greater than Min value');
        }
    };

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="card--container">
            <div className="card--header">
                {
                    min === '' || max === '' || randomNumber === '' ? <h3>Enter Min and Max value</h3> : <h4>Random Number : <span>{randomNumber}</span></h4>
                }
            </div>
            <div className="card--body">
                <div>
                    <label>Min</label>
                    <input autoFocus min={0} onChange={(e) => setMin(e.target.value)} type="number" value={min} />
                </div>

                <div>
                    <label>Max</label>
                    <input onChange={(e) => setMax(e.target.value)} type="number" value={max} />
                </div>

            </div>
            <div className="card--footer">
                <button onClick={handleGetRandomNumber} disabled={min === '' || max === ''}>Get random number</button>
            </div>
        </div>
    )
};

export default Card;