// import logo from './logo.svg';
import "./App.css";
import ButtonComponent from "./ButtonComponent.js";
import ImageComponent from "./ImgComponent.js";
import TitleComponent from "./TitleComponent.js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TitleComponent style={{ color: "#bf7a7a", fontWaight: "bold" }} textTitle="First time with react <3" />
				<ImageComponent
					className="img-hover-effect"
					src="/img/reactimg.png"
					alt="Reacr immagine"
					style={{ width: "800px", height: "400px", cursor: "pointer" }}
					href="https://reactjs.org"
				/>
				<ButtonComponent
					className="btn button-hover-effect"
					text="Click me"
					style={{ marginBlock: "40px", cursor: "pointer" }}
				/>
				<ImageComponent
					className="img-hover-effect2"
					src="/img/reactimg.png"
					alt="Reacr immagine"
					style={{ width: "800px", height: "400px", cursor: "pointer" }}
					href="https://www.topolino.it/personaggio/pippo/"
				/>
				<ButtonComponent
					className="btn button-hover-effect2"
					text="Don't Click me"
					style={{ marginTop: "40px", cursor: "pointer" }}
				/>
			</header>
		</div>
	);
}

export default App;
