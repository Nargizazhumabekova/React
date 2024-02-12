import Text from "./components/text/Text";
import Images from "./components/images/Images";
import Content from "./components/content/Content";

function App() {
  return (
    <div>
      <Text text={"Hello"} />
     <Images img={"https://i.pinimg.com/736x/6f/98/a1/6f98a144bfbe62c9a989b8c0ff8bab31.jpg"} />
     <Content content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
    </div>
  );
}

export default App;
