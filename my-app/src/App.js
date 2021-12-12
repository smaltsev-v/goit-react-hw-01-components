

// import Profile from './components/Profile/Profile'
// import user from './user.json'
import Container from './components/Container/Container'
import ProfileList from "./components/Profile/ProfileList"

//file
import users from './user.json';

export default function App() {
    return (
        <Container title= "Профиль социальной сети:">
            <ProfileList items={users} />
        </Container>
        
    );
}




