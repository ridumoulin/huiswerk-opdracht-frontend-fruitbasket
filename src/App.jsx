
import './App.css'
import {useState} from 'react';

function App() {
    const initialCounts = {
        Strawberries: 0,
        Bananas: 0,
        Apples: 0,
        Kiwis: 0,
    };

    const [count, setCount] = useState(initialCounts);

    const increment = (fruit) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [fruit]: prevCounts[fruit] + 1,
        }));
    };

    const decrement = (fruit) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [fruit]: prevCounts[fruit] - 1,
        }));
    };

    const resetCounts = () => {
        console.log('Resetting counts');
        setCount(initialCounts);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-selection">
            <div className="fruit">
                <p>🍓</p>
                <h2>Aardbeien</h2>
                <button onClick={() => decrement('Strawberries')}>-</button>
                <p className="counter">{count['Strawberries']}</p>
                <button onClick={() => increment('Strawberries')}>+</button>
            </div>
            <div className="fruit">
                <p>🍌</p>
                <h2>Bananen</h2>
                <button onClick={() => decrement('Bananas')}>-</button>
                <p className="counter">{count['Bananas']}</p>
                <button onClick={() => increment('Bananas')}>+</button>
            </div>
            <div className="fruit">
                <p>🍏</p>
                <h2>Appels</h2>
                <button onClick={() => decrement('Apples')}>-</button>
                <p className="counter">{count['Apples']}</p>
                <button onClick={() => increment('Apples')}>+</button>
            </div>
            <div className="fruit">
                <p>🥝</p>
                <h2>Kiwi's</h2>
                <button onClick={() => decrement('Kiwis')}>-</button>
                <p className="counter">{count['Kiwis']}</p>
                <button onClick={() => increment('Kiwis')}>+</button>
            </div>
            <button className="reset-button" type="button" onReset={resetCounts}>Reset</button>
        </section>

        <form className="fruit-form" onSubmit={handleSubmit}>
            <label>
                Voornaam
                <input type="text" name="firstName" />
            </label>

            <label>
                Achternaam
                <input type="text" name="surname" />
            </label>

            <label>
                Leeftijd
                <input type="number" name="age" />
            </label>

            <label>
                Postcode
                <input type="text" name="postcode" />
            </label>

            <label>
                Bezorgfrequentie
                <select name="deliveryFrequency">
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
            </label>

            <label>
                <input type="radio" name="timePeriod" value="day" /> Overdag
                <input type="radio" name="timePeriod" value="evening" /> 's Avonds
            </label>

            <label>
                Opmerking
                <textarea name="comment"></textarea>
            </label>

            <label>
                Ik ga akkoord met de voorwaarden
                <input type="checkbox" name="agreeConditions" />
            </label>

            <button type="submit">Verzend</button>
        </form>;
    </>
  )
}

export default App
