

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
          <Container title= "Задание 1 - Профиль социальной сети">
             <ProfileList items={users} />
         </Container>
         <Container title= "Задание 2 - Секция статистики">
                <Statistics title="Upload stats" stats={data} />
                {/* <Statistics stats={data} /> */}
         </Container>
           
            <Container title="Задание 3 - Список друзей">
                <FriendList friends={friends} />
            </Container>
            <Container title="Задание 4 - История транзакций">
            <TransactionHistory items={transactions} />
            </Container>
        
        </div>
        
        
        
    );
}




