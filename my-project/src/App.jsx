import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/Home";
import About from "./pages/AboutUs/About";
import Contact from "./pages/ContactUs/Contact";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className=" dark:bg-gray-950 dark:text-white h-full">
          <Routes>
            <Route element={<Mainlayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/netrix-clone/about" element={<About />} />
              <Route path="/netrix-clone/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
};
export default App;
