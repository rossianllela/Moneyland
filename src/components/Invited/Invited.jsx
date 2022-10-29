import './Invited.css';

function Invited () {
    return (
        <>
    <div className="home-container">
    <center>  <img 
                                className="tesoro"
                                src='./images/tesoroml.png'
                                alt="Money Land" 
                                title="Money Land" />
                <h2>Refer And Earn</h2>
                </center> 
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                                <h3>Share the referral link below to invite your friends and earn 2% of your friends earnings FOREVER!</h3>
                            </div>  
                        </div>
                        <center>
                        <button className="button-field-data">UNLOCK WALLET</button>   
                        </center> 
                        <h3>Your will automatically get $Money in your wallet as reward whenever the referred user Harvests/Withdraws from our MONEY Farms and Fuel Pools.</h3>
                    </div>
                    </div>
                    </div>
        </>
    );
}

export default Invited;