import'./Tax.css'


const  Tax = () => {
    return (
        <>
        <div className="tax-collection-component">
            <div className="tax-wrapper">
                <div className="tax-unit-component">
                    <div className="currency-container">
                        <p className="currency">$</p>
                        </div>
                    <div className="text">
                        <p className="name">Dólar </p>
                        <div className="value-container">
                            <p className="value">5.7518</p>
                            <p className="variation success">0.07%</p>
                     </div>
                </div>
                </div>
                <div className="tax-unit-component">
                    <div className="currency-container">
                        <p className="currency">€</p>
                         </div>
                         <div className="text">
                            <p className="name">Euro</p>
                            <div className="value-container">
                                <p className="value">6.0768</p>
                                <p className="variation danger">-1.4%</p>
                            </div>
                            </div>
                        </div>
            </div>
            <div className="tax-unit-component">
                <div className="currency-container">
                    <p className="currency">¥</p>
                </div>
                <div className="text">
                    <p className="name">Yuan</p>
                    <div className="value-container">
                        <p className="value">0.7953</p>
                        <p className="variation success">1.64%</p>
                </div>
                </div>
            </div>
            <div className="tax-unit-component">
                <div className="currency-container">
                    <p className="currency">£</p>
                </div>
                <div className="text">
                    <p className="name">Libra</p>
                    <div className="value-container">
                        <p className="value">7.3046</p>
                        <p className="variation danger">-0.07%</p>
                    </div>
                </div>
            </div>
            <div className="tax-unit-component">
                <div className="currency-container">
                    <p className="currency">$</p>
                </div>
                <div className="text">
                    <p className="name">Peso</p>
                <div className="value-container">
                    <p className="value">0.0061</p>
                    <p className="variation success">-1.62%</p>
                </div>
            </div>
                </div>
        </div>
       
           
            </>
    )
}

export default Tax;