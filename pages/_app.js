import "../styles/globals.css";

//TODO: DON'T REMOVE (BURAYI SİLME)
import '../store'
import StoreProvider from "../utils/store-provider";
import {observer} from "mobx-react-lite";

const TodoStore = StoreProvider.getStore('TodoStore')

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
