import locationIcon from '../../assets/img/location.png'


export default function Cards(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className='thumbnail' alt='cover image'/>
            <div className='card-info'>
                <div className='base-info'>
                    <img src={locationIcon} className='location-icon' alt="location icon" />
                    <p className='location'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='maps'>View on Google Maps</a>
                </div>
                <h3 className='title'>{props.title}</h3>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}