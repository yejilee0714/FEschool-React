import './App.css';
import Menu from './components/menu/Menu'
import NewMenu from './components/newMenu/NewMenu'
import TripList from './components/tripList/TripList'


function TextArea() {
  return (
      <div className="wrapper">
          <textarea
              readOnly
              maxLength={3}
          style={{backgroundColor: "blue"}}
      />
      </div>
  );
}

function Today(){
  const today= new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const day = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: 'red'}}>년 : {year}</h1>
      <h1 style={{color: 'white'}}>월/일 : {month}/{day}</h1>
      <h1 style={{color: 'white'}}>시간 : {hour}시 {min}분 {sec}초</h1>
    </div>
  )
}

function App() {
  const name = '라이캣!';
  const 변수 = 'value';

  function 함수() {
    console.log('함수 함수!')
  }

  const 값 = true;

  return (
    <div className="App">
      {100 + 1}
      {/* {"hello" + "world"} */}
      {[1, 2, 3].map(x => x ** 2)}
      {함수()}
      {변수}
      {값 ? 'one' : 'two'}
      <Menu />
      <NewMenu />
      <TextArea />
      <h1 hello="hi" style={{backgroundColor: "black", color: "white"}}>안녕, {name} 1호</h1>
      <h1 style={{}}>안녕, 라이캣 2호!</h1>
      <div className="newClass" /> {/* class대신 className=""로 진행! */}
      <Today />
      <TripList />
    </div>
  );
}

export default App;