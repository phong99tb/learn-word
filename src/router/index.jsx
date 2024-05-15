import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../page/home'
import Practice from '../page/practice'
import Error from '../page/error'
import Layout from "../component/Layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="practice" element={<Practice />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}