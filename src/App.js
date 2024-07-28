import './App.css';
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreDataButton from "./components/load-more-data-button";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";

function App() {
  return (
    <div className="App">
     {/* <Accordion />*/}
     {/*<RandomColor />*/}
     {/* <StarRating />*/}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />*/}
     {/*<LoadMoreDataButton />*/}
     {/* <TreeView menus={menus}/>*/}
     {/*   <QRCodeGenerator />*/}
     {/*   <LightDarkMode />*/}
     {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />*/}
     {/* <TabTest />*/}
     {/*   <ModalTest />*/}
     {/* <GithubProfileFinder />*/}
     {/*<SearchAutocomplete />*/}
     <TicTacToe />

    </div>
  );
}

export default App;
// Time 4:16:49