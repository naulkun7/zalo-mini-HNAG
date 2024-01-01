import React from "react"
import { Route } from "react-router-dom"
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui"
import { RecoilRoot } from "recoil"
import { DataProvider } from "../utils/dataContext"
import HomePage from "../pages"

const MyApp = () => {
  return (
    <RecoilRoot>
      <DataProvider>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                {/* <Route path="/about" element={<About></About>}></Route>
                <Route path="/form" element={<Form></Form>}></Route>
                <Route path="/user" element={<User></User>}></Route> */}
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </DataProvider>
    </RecoilRoot>
  )
}
export default MyApp
