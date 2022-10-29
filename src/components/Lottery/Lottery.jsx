import './Lottery.css';

function Lottery () {
    return (
        <>
            <div className="home-container">
                <div className="field-data">
                    <div className="field-data-background">
                        <div className="child-fields">
                            <button className="button-field-data">¡GO!</button>
                        </div>
                        <div className="child-fields">
                            <div className="child-time-field">
                                <div className="spaces-time">
                                    <p>Lottery:</p>
                                </div>
                                <div className="spaces-time">
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>0</h4>
                                        </div>
                                        </div>  
                                        <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>0</h4>
                                        </div> 
                                    </div>
                                    <div className="circled-divs">
                                        <div className="circled-background">
                                            <h4>0</h4>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                            <h3>              
                                <img 
                                className="cofrelotery"
                                src='./images/cofre5.png'
                                alt="Money Land" 
                                title="Money Land" />Total Pot:
                                </h3> 
                                <h2>0 Money</h2>
                            </div>
                            <div className="">
                            </div>
                        </div>
                        <div className="card-body">
                        <div className='textolottery'><p>NO. MATCHED</p><p>PRIZE POT</p></div>
                        <div className='textolottery'><h4>4</h4><p>0</p></div>
                        <div className='textolottery'><h4>3</h4><p>0</p></div>
                        <div className='textolottery'><h4>2</h4><p>0</p></div>
                        <div className='textolottery'><h4>To burn:</h4><p>0</p></div>
                        </div>
                        <div className="card-footer">
                            <div className="footer-field-buttons">  
                            </div>
                        </div>
                    </div>


                    <div className="cards2">
                    <center><img 
                                className="cofrelotery2"
                                src='./images/cofre1.png'
                                alt="Money Land" 
                                title="Money Land" /> 
                            <button className="button-field-data">Approve On</button>
                    </center>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Lottery;