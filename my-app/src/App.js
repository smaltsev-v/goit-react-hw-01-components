

//component
import './App.css'
import Container from './components/Container/Container'
import ProfileList from "./components/Profile/ProfileList"
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

//file
import users from './Data/user.json';
import data from './Data/data.json'
import friends from './Data/friends.json'
import transactions from './Data/transactions.json'

export default function App() {
    return (
        <div className="App">
          <Container title= "Профиль социальной сети:">
             <ProfileList items={users} />
         </Container>
         <Container title= "Секция статистики:">
                <Statistics title="Upload stats" stats={data} />
                {/* <Statistics stats={data} /> */}
         </Container>
           
            <Container title="Список друзей:">
                <FriendList friends={friends} />
            </Container>
            <Container title="Список друзей:">
            <TransactionHistory items={transactions} />;
            </Container>
        
        </div>
        
        
        
    );
}




