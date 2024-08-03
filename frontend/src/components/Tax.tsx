import'./Tax.css'


const  Tax = () => {
    return (
        <>
        <div className="tax-collection-component">
            <div className="tax-wrapper">
                <div className="tax-unit-component">
                    <div className="currency-container"><span className="currency">$</span></div>
                    <div className="text"><div className="name">Dólar</div><div className="value-container"><span className="value">5.7518</span><span className="variation success">0.07%</span></div></div></div>
                <div className="tax-unit-component">
                    <div className="currency-container"><span className="currency">€</span></div><div className="text"><div className="name">Euro</div><div className="value-container"><span className="value">6.0768</span><span className="variation danger">-1.4%</span></div></div></div>
            </div>
            <div className="tax-unit-component">
                <div className="currency-container"><span className="currency">¥</span></div><div className="text"><div className="name">Yuan</div><div className="value-container"><span className="value">0.7953</span><span className="variation success">1.64%</span></div></div></div>
        </div><div className="tax-unit-component">
                <div className="currency-container"><span className="currency">£</span></div><div className="text"><div className="name">Libra</div><div className="value-container"><span className="value">7.3046</span><span className="variation danger">-0.07%</span></div></div>
            </div>
            <div className="tax-unit-component">
                <div className="currency-container"><span className="currency">$</span></div><div className="text"><div className="name">Peso</div><div className="value-container"><span className="value">0.0061</span><span className="variation success">-1.62%</span></div></div>
                </div>
            </>

            
    )


}

export default Tax;