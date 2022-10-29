import './Home.css';

function Home () {
    return (
        <>
            <div className="home-container">
                <div className="field-data">
                    <div className="field-data-background">
                        <div className="child-fields">
                            <button className="button-field-data">PARTNER</button>
                        </div>
                        <div className="child-fields">
                            <div className="child-time-field">
                                <div className="spaces-time">
                                    <p>Massive burn in:</p>
                                </div>
                                <div className="spaces-time">
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>Hours:</h4>
                                            <h2>10</h2>
                                        </div>
                                    </div>
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>Hours:</h4>
                                            <h2>10</h2>
                                        </div>
                                    </div>
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>Hours:</h4>
                                            <h2>10</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="child-fields">
                            <button className="button-field-data">BUY ON</button>
                        </div>
                        <div className="child-fields">
                            <button className="button-field-data">ADD TO METAMASK</button>
                        </div>
                    </div>
                </div>
                <center>  <img 
                                className="tesoro"
                                src='./images/cofre1.png'
                                alt="Money Land" 
                                title="Money Land" />
                <div className='letra'>              
                 
                </div>          
                </center>
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <p>MONEY FARMS</p>
                                <br />
                                <h2>FARMS AND STAKING</h2>
                            </div>
                            <div className="">
                            <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> 
               
                            </div>
                        </div>
                        <div className="card-body">
                            <p>MONEY TO HARVEST</p><br />
                            <p>Locked</p>
                        </div>
                        <div className="card-footer">
                            <div className="footer-fields">
                                <p>In Wallet</p><br />
                                <p>Locked</p>
                            </div>
                            <div className="footer-field-buttons">
                                <button className="button-field-data">UNLOCK WALLET</button>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <p>LOTTERY</p>
                                <br />
                                <h2>YOUR LOTTERY WINNINGS</h2>
                            </div>
                            <div className="">
                            <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> 
                            </div>
                        </div>
                        <div className="card-body">
                            <p>To Collect</p><br />
                            <p>Locked</p>
                        </div>
                        <div className="card-footer">
                            <div className="footer-fields">
                                <p>TOTAL JACKPOT THIS ROUND:</p><br />
                                <p>Locked</p>
                            </div>
                            <div className="footer-field-buttons">
                                <button className="button-field-data">Collect winnings</button>
                                <button className="button-field-data">Approve On</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-values">
                    <div className="gradient-div">
                        <div className="background-div">
                            <h3>EARN UP TO</h3>
                            <h2>121.8%</h2>
                            <h3>IN ONI FARMS</h3>
                        </div>
                    </div>
                    <div className="gradient-div">
                        <div className="background-div">
                            <h3>EARN UP TO</h3>
                            <h2>MONEY</h2>
                            <h3>IN POOLS</h3>
                        </div>
                    </div>
                    <div className="gradient-div">
                        <div className="background-div">
                            <h3>LOTTERY WITH</h3>
                            <h2>$0</h2>
                            <h3>UP FOR GRABS</h3>
                        </div>
                    </div>
                </div>
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <p>INFO</p>
                                <br />
                                <h2>MONEY STATS</h2>
                            </div>
                            <div className="">
                            <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> 
                            </div>
                        </div>
                        <div className="card-body">
                        <div className='textohome'>
                                <p>TOTAL SUPPLY</p><p>0</p>
                                </div>
                               <div className='textohome'><p>TOTAL BURNED</p><p>0</p></div>
                               <div className='textohome'><p>NEW BLOCK</p><p>0</p></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <p>Exchange values</p>
                                <br />
                                <h2>ONI EXCHANGE</h2>
                            </div>
                            <div className="">
                                <ion-icon name="skull-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>ONI EXCHANGE</p><br />
                            <p>oni example</p>
                        </div>
                        <div className="card-footer">
                            <div className="footer-fields">
                                <p>ONI EXCHANGE</p><br />
                                <p>oni example</p>
                            </div>
                            <div className="footer-field-buttons">
                                <button className="button-field-data">Collect winnings</button>
                                <button className="button-field-data">Approve On</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;