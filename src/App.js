// import logo from './logo.svg';
import './App.css';
import { EditorProvider } from './context/context';
import CodeBar from "./components/Codebar/CodeBar";
import styles from './App.module.css'
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <EditorProvider>
      <CodeBar />
      <div className={styles.main}>
        <Header />
        <Preview />
      </div>
    </EditorProvider>
  );
}

export default App;
