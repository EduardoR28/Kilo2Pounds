function App() {

    return (

        <div className="container">
            <h1>Kilograms to Pounds</h1>

            <div className="grid">
                <label>
                    Kilograms Quantity
                    <input id="kilograms" type="text" placeholder="Kilograms" onChange={e => { calcPounds(); }} />
                </label>
            </div>

            <article>

                <div className="grid">
                    <h4>Total Pounds: </h4>
                    <h4 id="totalPounds">0.00 lbs</h4>
                </div>

            </article>

        </div>

    );

}


function calcPounds() {

    var kilograms = document.getElementById('kilograms').value;

    var pounds = (kilograms * 2.2046);

    if(isNaN(kilograms)){
        document.getElementById('kilograms').setAttribute('aria-invalid', true);
        pounds = 0.00;
    }else if(kilograms <= 0){
        document.getElementById('kilograms').setAttribute('aria-invalid', true);
        pounds = 0.00;
    }else {
        document.getElementById('kilograms').setAttribute('aria-invalid', false);
    }


    document.getElementById("totalPounds").innerText = pounds.toFixed(4) + " lbs";

}

function isValidNumber(value){
    return typeof value === 'number'
}

export default App;