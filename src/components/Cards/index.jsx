import locationIcon from '../../assets/img/location.png'


export default function Cards(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className='thumbnail' alt='cover image'/>
            <div className='card-info'>
                <div className='base-info'>
                    <img src={locationIcon} alt="location icon" />
                    <p className='location'>{props.location}</p>
                    <h3 className='attraction'>{props.title}</h3>
                    <p className='maps'>{props.googleMapsUrl}</p>
                </div>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}