import Profile from './Profile';

function ProfileList({ items })  {
    return ( 
        <ul>   
            {items.map(item => (
                <li key = { item.tag }>
                 < Profile
                    
                    avatar={item.avatar}
                    username={item.username}
                    tag={item.tag}
                    location={item.location}
                    statsfollowers={item.stats.followers}
                    statsviews={item.stats.views}
                    statslikes={item.stats.likes}
                    />
                </li>    
            ))}
        </ul>        
        
    );
}
export default ProfileList;