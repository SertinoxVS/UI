import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void
  visible: boolean
}

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false)

  useNuiEvent<boolean>('setVisible', setVisible)

  // Handle pressing escape/backspace

  
  useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Escape", "Tab"].includes(e.code)) {
        var help = document.getElementById('help')
        if(help?.classList.contains('flex')) {
            help?.classList.remove('flex')
            help?.classList.add('hidden')
        }
        if (!isEnvBrowser()) fetchNui("hideFrame", { page: window.location.pathname })
        else setVisible(!visible);
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        setVisible
      }}
    >
    <div style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
      {children}
    </div>
  </VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
