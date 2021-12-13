
import s from './Friend.module.css'
import PropTypes from 'prop-types'; 
import defaultImg from '../img/default-img.gif';


const FriendItems = ({
    isOnline,
    avatar,
    name,
}) => {
    return (
        <>
            <span
                className={s.status}
                style={{ backgroundColor: isOnline ? "green" : "red" }}
            ></span>
    

            <li className={s.item} >
                <span className={s.status}>{isOnline}</span>
                <img className={s.avatar}
                    src={avatar}
                    alt={name}
                    width="48" />
                <p className={s.name}>{name}</p>
            </li>
        </>
    );   

};
FriendItems.defaultProps = {
  avatar: defaultImg,
};
FriendItems.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
    export default FriendItems