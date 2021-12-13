import FriendItems from "./FriendItems";
import PropTypes from 'prop-types'; 

import s from './Friend.module.css'


const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ name, isOnline, avatar, id }) => {
                return (
                    <li key={id} className={s.item}>
                        <FriendItems
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );
      
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList