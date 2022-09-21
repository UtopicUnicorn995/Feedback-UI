
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./component/Header"
import FeedbackList from './component/FeedbackList'
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./component/AboutIconLink"

function App(){
    return (
        <FeedbackProvider>
        <Router>
        
        <Header />
        <div className="container">
        <Routes>
            <Route path="/"
            element={
                <>
                    <FeedbackForm/>
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutIconLink/>
                </>
            }></Route>
            <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App