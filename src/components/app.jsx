import React from "react"
import { Route } from "react-router-dom"
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui"
import { RecoilRoot } from "recoil"
import { DataProvider } from "../utils/dataContext"
import HomePage from "../pages"
import TestComponent from "../pages/testComponent"

const MyApp = () => {
  return (
    <RecoilRoot>
      <DataProvider>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage />}></Route>
                {/* <Route path="/" element={<TestComponent />}></Route> */}
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </DataProvider>
    </RecoilRoot>
  )
}
export default MyApp
