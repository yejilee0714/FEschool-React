// import MyList from "./components/MyList";
// import ProductList from "./components/ProductList";
// import Hello from "./components/Hello"
// import Blog from "./components/Blog"
// import Count from "./components/Count";
import NavBar from "./components/NavBar";

function Hello({name}){
  if (name) {
      return (
          <div>
              <h1>{name}</h1>
          </div>
      )
  }
  return <NoName/>
}

function NoName(){
  return(
      <div>
          <h1>이름을 입력하지 않았습니다.</h1>
      </div>
  )
}

function App() {

  return (
    <div>
      hello world
      <Hello />
      <NavBar />
      {/* <Blog posts={posts}/> */}
      {/* <Hello name="예지" />
      <MyList />
      <ProductList />
      <Count /> */}
    </div>
  );
}
export default App;

