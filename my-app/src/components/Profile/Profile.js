import PropTypes from 'prop-types';



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
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt={username}
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{statsfollowers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{statsviews}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{statslikes}</span>
                </li>
            </ul>
        </div>)
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