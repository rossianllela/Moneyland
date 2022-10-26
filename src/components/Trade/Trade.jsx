import './Trade.css';

function Trade () {
    return (
        <>
    <div className="home-container">
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <p>EXCHANGE</p>
                                <br />
                                <h2>TRADE TOKENS IN AN INSTANT</h2>
                            </div>
                            <div className="">
                            <ion-icon name="sync-sharp"></ion-icon>
                            <ion-icon name="settings-sharp"></ion-icon>
                            </div>
                        </div>
                        <center>
                        <div className="card-body">
                            <p>FROM</p><br />
                            <p>0</p>
                        </div>
                        </center>
                        <div class="caja">
                                <center>
                                <select>
                                    <option>La primera opción</option>
                                    <option>La segunda opción</option>
                                    <option>La tercera opción</option>
                                    </select>
                                </center>   
                                    </div>
                                <center>
                                    <button class="redondo"><ion-icon name="caret-down-outline" role="img" class="md hydrated" aria-label="caret down outline"></ion-icon></button>
                                    </center>
                        <div className="card-footer">
                        <center>
                            <div className="footer-fields">
                                <p>TO</p><br />
                                <p>0</p>
                            </div>
                        </center>
                            <div className="footer-field-buttons">
                            <div class="caja">
                                <center>
                                <select>
                                    <option>La primera opción</option>
                                    <option>La segunda opción</option>
                                    <option>La tercera opción</option>
                                    </select>
                                </center>   
                                    </div>     
                            </div>
                        <center>
                        <button className="button-field-data">UNLOCK WALLET</button>   
                        </center>   
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    );
}

export default Trade;