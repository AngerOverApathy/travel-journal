import locationIcon from '../../../public/location.png'


export default function Cards() {
    return (
        <div className="card-container">
            <img />
            <div className='card-info'>
                <div className=''>
                    <img src={locationIcon} alt="location icon" />
                    <p>Location</p>
                    <h3>Landmark</h3>
                    <p>View on Google Maps</p>
                </div>
                <p>Dates</p>
                <p>Information</p>
            </div>
        </div>
    )
}