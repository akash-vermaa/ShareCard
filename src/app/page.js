"use client"

import { Provider } from "react-redux"
import { store } from "@/store/store"
import Home from "@/Core/Home"

const App = ()=> {
  console.log("PORT", process.env.PORT)
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App