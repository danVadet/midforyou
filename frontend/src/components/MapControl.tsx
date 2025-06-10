import { useGoogleMap } from "@react-google-maps/api";
import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./MapControl.module.css";

interface MapControlProps {
  position: keyof typeof google.maps.ControlPosition;
}
export const MapControl = (props: PropsWithChildren<MapControlProps>) => {
  const map = useGoogleMap();
  const ref = useRef(null);
  useEffect(() => {
    if (map && ref) {
      map.controls[google.maps.ControlPosition[props.position]].push(
        ref.current!
      );
    }
  }, [map, ref, props.position]);
  return <div className={`${styles.custom_map_control}`}ref={ref}>{props.children}</div>;
};