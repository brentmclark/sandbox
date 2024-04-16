'use client'

import React from "react";

export const defaultSettings = {
  theme: "light",
  showSidebar: true,
};

export const SettingsContext = React.createContext(defaultSettings);

export function SettingsProvider(props) {
  const {children} = props
  const [settings, dispatch] = React.useReducer(reducer, defaultSettings)
  return (
    <SettingsContext.Provider value={{...settings, dispatch}}>
      {children}
    </SettingsContext.Provider>
  )
}

function reducer(state, action) {
  const { payload, type} = action
  switch (type) {
    case ACTIONS.UPDATE: {
      console.log({payload})
      const newState = {...state}
      const {key, value} = payload
      newState[key] = value
      return newState
    }
  }
}

export const ACTIONS = {
  UPDATE: 'UPDATE',
}
