import React, {useContext} from 'react';
import styles from './Markers.module.css'
import {MapContext} from "../../MapContext";
import classnames from "classnames";

const Markers = () => {
    const {markers, showMarkerInfo} = useContext(MapContext);
    return (
        <>
            {markers.map(marker => {
                return (
                    <div id={markers.id}
                         key={marker.id}
                         className={classnames({
                             [styles.energyBase]: marker.id === 1,
                             [styles.washRoom]: marker.id === 2,
                             [styles.order]: marker.id === 3
                         })}
                         onClick={() => showMarkerInfo(marker.id)}>

                        <div className={styles.Marker}/>

                        {marker.isVisible ? (
                            <div className={styles.dropdown}>
                                {marker.name}<br/>
                                Координаты точки: X:{marker.x}<br/>
                                Y:{marker.y}
                            </div>
                        ) : null}
                    </div>

                )
            })}
        </>
    )
};

export default Markers;