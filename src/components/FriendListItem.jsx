import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className="friend-list-item">
            <img src={avatar} alt={`${name} avatar`} width="48" />
            <p className="friend-name">{name}</p>
            <p className={`status ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
