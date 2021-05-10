import React, {useContext} from 'react';
import styles from './Map.module.css';
import mapBuild from './assets/map.png';
import Markers from "../Markers/Markers";
import {MapContext} from "../../MapContext";

const Map = () => {
    const {imgBox, onZoom} = useContext(MapContext);
    return (
        <div className={styles.wrapper}>
        <div className={styles.Map} ref={imgBox} onWheel={onZoom} >
            <img src={mapBuild} alt="map"/>
            <Markers/>
        </div>
        </div>
    )
};

export default Map;