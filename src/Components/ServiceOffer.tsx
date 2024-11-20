import './ServiceOffer.css'

function ServiceOffer() {
  return (
    <div className='ServiceOffer'>
        <h1>Services We Offer</h1>
        <div className='service1'>
            <div className='se1'>
                <img src='./src/assets/se1.svg'></img>
                <div className='content'>
                    <h3>Buying a Property</h3>
                    <p>Unlock your dream home with expert guidance and personalized service from The Specialist - Real Estate.</p>
                </div>
            </div>
            <div className='se2'>
                <img src='./src/assets/se2.svg'></img>
                <div className='content'>
                    <h3>Selling a Property</h3>
                    <p>Maximize your home's value with expert advice and personalized service for a smooth selling process.</p>
                </div>
            </div>
        </div>
        <div className='service2'>
            <div className='se3'>
                <img src='./src/assets/se3.svg'></img>
                <div className='content'>
                    <h3>Renting a Property</h3>
                    <p>Find your ideal rental easily. Expert team, personalized service, and market knowledge for a smooth experience.</p>
                </div>
            </div>
            <div className='se4'>
                <img src='./src/assets/se4.svg'></img>
                <div className='content'>
                    <h3>Home Maintenance</h3>
                    <p>Ensure your home stays perfect with expert maintenance services, tailored solutions, and reliable, professional care.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceOffer