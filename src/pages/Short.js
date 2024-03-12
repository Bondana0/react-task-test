import React from 'react';
// import fetchData from '../components/Api';

export const Short = () => {
    // const [mounth, setMetrics] = useState(null);

    // useEffect(() => {
    //     fetchData()
    //         .then(data => {
    //             setMetrics(data.metrics);
    //         });
    // }, []);

    return (
        <div className="short-info">
            <h2>Коротка інформація</h2>
                <div className="metrics">
                    <p>Загальна кількість виданих позик за місяць:</p>
                    <p>Середня сума позики за місяць:</p>
                    <p>Загальна сума позик за місяць:</p>
                    <p>Загальна сума відсотків за місяць:</p>
                    <p>Загальна кількість позик, що повернулися за місяць:</p>
                </div>
        </div>
    );
};

export default Short;

// create page

