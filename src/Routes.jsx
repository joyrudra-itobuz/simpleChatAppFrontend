import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "./Pages/Chat/Child";

export default function Child() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
