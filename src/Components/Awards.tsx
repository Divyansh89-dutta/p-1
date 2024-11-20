import './Awards.css';

function Awards() {
  return (
    <div className='awards'>
        <div className='awardcard'>
            <img src='./src/assets/agsp1.svg'></img>
            <div className='awardcount'>
                <p>456</p>
            </div>
            <h4>Total Listings</h4>
        </div>
        <div className='awardcard'>
            <img src='./src/assets/agsp2.svg'></img>
            <div className='awardcount'>
                <p>456</p>
            </div>
            <h4>Deals Closed</h4>
        </div>
        <div className='awardcard'>
            <img src='./src/assets/agsp3.svg'></img>
            <div className='awardcount'>
                <p>456</p>
            </div>
            <h4>Consultations</h4>
        </div>
        <div className='awardcard'>
            <img src='./src/assets/agsp4.svg'></img>
            <div className='awardcount'>
                <p>456</p>
            </div>
            <h4>Happy Clients</h4>
        </div>
    </div>
  )
}

export default Awards