import './Perfil.css';

function Perfil () {
    return (
        <>
    <div className="home-container">
                <div className="card-containers">
                    <div className="cards">
                        <div className="card-header">
                            <div className="card-header-text">
                            <img class="circular--square" src="https://www.kindpng.com/picc/m/227-2271036_usuario-persona-personas-perfil-cuenta-humana-vector-pas.png" />
                                <h2>NAME</h2>
                                <p>0</p><br />
                            </div>
                        </div>
                        <div className='textotrade'>
                                    <button class="redondo"><ion-icon name="download-outline"></ion-icon></button>
                                    <br></br>
                                    <button class="redondo"><ion-icon name="send-outline"></ion-icon></button>
                                </div>
                        <center>
                        <div className="card-body">
                            <h2>Team</h2><br />
                            <label for="file">File progress:</label>
                                <progress id="file" max="100" value="10"> 10% </progress>
                        </div>
                        <br>
                        </br>
                        </center>
                        <div className="card-footer">
                        <center>
                        <h2>History</h2>
                                    <button class="redondo"><ion-icon name="caret-down-outline" role="img" class="md hydrated" aria-label="caret down outline"></ion-icon></button>
                                    </center>
                            <div className="footer-field-buttons">  
                            </div>  
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    );
}

export default Perfil;