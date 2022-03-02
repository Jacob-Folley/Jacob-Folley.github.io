import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "../applicationViews"


export const MainReact = () => (
    
      <Route
        render={() => {
            return (
              <>
                <ApplicationViews />
              </>
            );
          
        }}
      />
  
     
  );