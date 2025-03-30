import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './global_styles/theme.css';
import AppRoutes from "./routes/AppRoutes"
import { ContextProvider } from "./context/ContextProvider";

const App: React.FC = () => {

  return (
    <>
      <ContextProvider><AppRoutes /></ContextProvider>
    </>
  )
}

export default App