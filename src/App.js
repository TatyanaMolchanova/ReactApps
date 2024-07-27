import './App.css';
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreDataButton from "./components/load-more-data-button";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
     {/* <Accordion />*/}
     {/*<RandomColor />*/}
     {/* <StarRating />*/}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />*/}
     {/*<LoadMoreDataButton />*/}
      <TreeView menus={menus}/>


    </div>
  );
}

export default App;