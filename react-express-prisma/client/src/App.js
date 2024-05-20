import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddReport from './components/AddReport'
import ReportList from './components/ReportList'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ReportList />}></Route>
                    <Route path="/add" element={<AddReport />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
