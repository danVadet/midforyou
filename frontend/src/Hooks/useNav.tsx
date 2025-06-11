import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/NavContext";
import { useInNavView } from "../Hooks/useInNavView";


export const useNav = (navLinkId: string) => {

    const { setActiveLinkId } = useContext(NavContext);
      const {ref, isInView} = useInNavView();
    
    useEffect(() => {

      if(isInView) {
            setActiveLinkId(navLinkId);
      }

    }, [setActiveLinkId, navLinkId, isInView])


  return ref;
}