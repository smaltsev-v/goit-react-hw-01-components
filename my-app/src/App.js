

// import Profile from './components/Profile/Profile'
// import user from './user.json'

import ProfileList from "./components/Profile/ProfileList"
import users from './user.json';

export default function App() {
    return (
        <div>
            <ProfileList items={users} />
        </div>
    );
}




