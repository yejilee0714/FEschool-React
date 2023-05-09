import { useState } from "react";
import Login from './Login';
import Homepage from "./Homepage";
import Modal from "./Modal";

function Hello(props) {
	const name = props.name;

  return(
    <div>
      <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1>
    </div>
  )
}

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalCloase(){
    setModalShow(false);
  }

  console.log(login);
  return (
    <>
      <Hello />
      {login ? <Homepage /> : < Login infoUser={user} setLogin={setLogin} />}
      {modalShow && <Modal modalClose={modalCloase}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>lorem</p>
        <a href="#none">더 보기</a>
      </Modal>}
    </>
  )


}

export default App;