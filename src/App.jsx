
import './App.css'
import {useState} from 'react';
import CounterButtons from "./components/CounterButtons.jsx";
import LabelTextInput from "./components/LabelTextInput.jsx";
import ResetSendButtons from "./components/ResetSendButtons.jsx";

function App() {
    const initialCounts = {
        Strawberries: 0,
        Bananas: 0,
        Apples: 0,
        Kiwis: 0,
    };

    const [count, setCount] = useState(initialCounts);

    function increment(fruit) {
        setCount((prevCount) => {
            const newCount = prevCount[fruit] + 1;
            console.log(`${fruit}: ${newCount}`);
            return {
                ...prevCount,
                [fruit]: newCount,
            };
        });
    }

    function decrement(fruit) {
        setCount((prevCount) => {
            const newCount = Math.max(0, prevCount[fruit] - 1); // Ensure count doesn't go below 0
            console.log(`${fruit}: ${newCount}`);
            return {
                ...prevCount,
                [fruit]: newCount,
            };
        });
    }

    function resetCounts() {
        setCount({
            Strawberries: 0,
            Bananas: 0,
            Apples: 0,
            Kiwis: 0,
        });
        console.log("Fruit counts reset");
    }

    function handleSubmit(e)  {
        e.preventDefault();
        console.log(count);
    }

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        postcode: '',
        deliveryFrequency: 'weekly',
        timePeriod: '',
        comment: '',
        agreeConditions: false,
    });

    function handleChange(e) {
        e.preventDefault();
        console.log(formState);

        const { name, value, type, checked } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-selection">
            <CounterButtons
                label="🍓 Aardbeien"
                onDecrement={() => decrement('Strawberries')}
                onIncrement={() => increment('Strawberries')}
                count={count['Strawberries']}
            />

            <CounterButtons
                label="🍌 Bananen"
                onDecrement={() => decrement('Bananas')}
                onIncrement={() => increment('Bananas')}
                count={count['Bananas']}
            />

            <CounterButtons
                label="🍏 Appels"
                onDecrement={() => decrement('Apples')}
                onIncrement={() => increment('Apples')}
                count={count['Apples']}
            />

            <CounterButtons
                label="🥝 Kiwi's"
                onDecrement={() => decrement('Kiwis')}
                onIncrement={() => increment('Kiwis')}
                count={count['Kiwis']}
            />
            <ResetSendButtons isReset onClick={resetCounts} label="Reset" />
        </section>

        <form className="fruit-form" onSubmit={handleSubmit}>
            <LabelTextInput
                label="Voornaam"
                name="firstName"
                onChange={handleChange}
                value={formState.firstName}
                type="text"
            />

            <LabelTextInput
                label="Achternaam"
                name="lastName"
                onChange={handleChange}
                value={formState.lastName}
                type="text"
            />

            <LabelTextInput
                label="Leeftijd"
                name="age"
                onChange={handleChange}
                value={formState.age}
                type="number"
            />

            <LabelTextInput
                label="Postcode"
                name="postcode"
                onChange={handleChange}
                value={formState.postcode}
                type="text"
            />

            <label>
                Bezorgfrequentie
                <select name="deliveryFrequency"
                        onChange={handleChange}
                        value={formState.deliveryFrequency}
                >
                    <option value="Wekelijks">Iedere week</option>
                    <option value="Om de week">Om de week</option>
                    <option value="Maandelijks">Iedere maand</option>
                </select>
            </label>
            <div className="time-period">
                <LabelTextInput
                    name="timePeriod"
                    onChange={handleChange}
                    value={formState.timePeriod}
                    checked={formState.timePeriod === 'Overdag'}
                    type="radio"
                /> Overdag

                <LabelTextInput
                    name="timePeriod"
                    onChange={handleChange}
                    value={formState.timePeriod}
                    checked={formState.timePeriod === 's Avonds'}
                    type="radio"
                /> 's Avonds
            </div>

            <label className="comment">
                Opmerking
                <textarea name="comment"
                          onChange={handleChange}
                          value={formState.comment}
                ></textarea>
            </label>

            <LabelTextInput
                name="agreeConditions"
                onChange={handleChange}
                value={formState.agreeConditions}
                type="checkbox"
            > Ik ga akkoord met de voorwaarden </LabelTextInput>

            <ResetSendButtons onClick={handleSubmit} label="Verzend" />
        </form>
    </>
  )
}

export default App
