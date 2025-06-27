import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* 개별 fontawesome 불러오기 */
//import { faFacebook, faInstagram, faArrowRight, faArrowUp} from '@fortawesome/free-brands-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
// 컴포넌트 호출
import Header from './Header';
import Todo from './Todo';
import List from './List';
function App(){
  return (
    <div id="wrap" style={{
        backgroundColor:"#eee",
        width:'420px',
        height:'80vh',
        margin:'50px auto',
        padding:'30px 15px',
        textAlign:'center',
      }}>
      <Header /> {/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App