import locationIcon from '../../assets/img/location.png'


export default function Cards(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className='thumbnail' alt='cover image'/>
            <div className='card-info'>
                <div className='base-info'>
                    <img src={locationIcon} className='location-icon' alt="location icon" />
                    <span className='location'>{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} className='maps'>View on Google Maps</a>
                </div>
                <h3 className='title'>{props.title}</h3>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}