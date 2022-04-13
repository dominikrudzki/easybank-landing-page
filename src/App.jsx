import styles from './app.module.css';
import { Navbar } from "./components/navbar";
import { MainSection } from "./components/main-section";
import { AboutSection } from "./components/about-section";
import { ArticlesSection } from "./components/articles-section";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<div className={ styles.n_wrapper }>
				<Navbar/>
			</div>
			<main>
				<MainSection/>
				<AboutSection/>
				<ArticlesSection/>
			</main>
			<div>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
