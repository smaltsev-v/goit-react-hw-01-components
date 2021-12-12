import PropTypes from 'prop-types';
import './Profile.css';


const Profile = ({
    avatar ,
    username,
    tag,
    location,
    statsfollowers,
    statsviews,
    statslikes
}) => {
    return (      
        <div className='profile'>
            <div className='description'>
                <img
                    src={avatar}
                    alt={username}
                    className='avatar'
                />
                <p className='name'>{username}</p>
                <p className='tag'>@{tag}</p>
                <p className='location'>{location}</p>
            </div>

            <ul className='stats'>
                <li className='StatItem'>
                    <span className='label'>Followers</span>
                    <span className='quantity'>{statsfollowers}</span>
                </li>
                <li className='StatItem'>
                    <span className='label'>Views</span>
                    <span className='quantity'>{statsviews}</span>
                </li>
                <li className='StatItem'>
                    <span className='label'>Likes</span>
                    <span className='quantity'>{statslikes}</span>
                </li>
            </ul>
        </div>   
            )
};
Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    statsfollowers: PropTypes.number,
    statsviews:PropTypes.number,
    statslikes:PropTypes.number,


}
export default Profile;