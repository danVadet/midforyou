import { createContext, ReactNode, useState } from "react";

export interface INavContext {
    activeLinkId: string
    setActiveLinkId:(activeLinkId: string) => void;

}

export interface INavProviderProps {
    children: ReactNode;
}

export const NavContext = createContext<INavContext>({
    activeLinkId: '',
    setActiveLinkId: () => {}, 
})


export const NavProvider = (props: INavProviderProps) => {
    const [activeLinkId, setActiveLinkId] = useState('');

    return (
      <NavContext.Provider value={{activeLinkId, setActiveLinkId}}>{props.children}</NavContext.Provider>
    );
  };
  