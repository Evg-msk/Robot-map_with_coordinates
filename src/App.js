import React, {useState, useRef} from 'react'
import Map from "./components/Map/Map";
import {MapContext} from './MapContext';

const App = () => {
    const state = {
        markers: [
            {
                name: "energy-base",
                id: 1,
                x: "52.00.5899",
                y: "50.02.5444",
                isVisible: false
            },
            {
                name: "washroom",
                id: 2,
                x: "46.00.5899",
                y: "48.12.5444",
                isVisible: false
            },
            {
                name: "order №1",
                id: 3,
                x: "11.07.001",
                y: "11.02.0044",
                isVisible: false
            },
        ],
    };
    const [markers, setMarkers] = useState(state.markers);
    let scale = 1;

    const imgBox = useRef(null);

    const showMarkerInfo = id => {
        const newMarkerList = markers.map(marker => {
            const newMarker = {...marker};
            if(marker.id === id) {
                newMarker.isVisible = !marker.isVisible;
            }
            return newMarker;
        });
        setMarkers(newMarkerList);
    };

    const onZoom = event => {
        scale += event.deltaY * -0.001;

        scale = Math.min(Math.max(1, scale), 4);
        imgBox.current.style.transform = `scale(${scale})`;
    };

    //Test Image move with mouseClick
    // const onMouseDownHandler = event => {
    //
    //     let shiftX = event.clientX - img.current.getBoundingClientRect().left;
    //     let shiftY = event.clientY - img.current.getBoundingClientRect().top;
    //
    //     img.current.style.position = 'absolute';
    //     img.current.style.zIndex = 1000;
    //     document.body.append(img.current);
    //
    //
    //
    //     const moveAt = (pageX, pageY) => {
    //         img.current.style.left = pageX - shiftX + 'px';
    //         img.current.style.top = pageY - shiftY + 'px';
    //     };
    //
    //     moveAt(event.pageX, event.pageY);
    //
    //     const onMouseMove = event => {
    //         moveAt(event.pageX, event.pageY);
    //     };
    //
    //     document.addEventListener('mousemove', onMouseMove);
    //
    //     // // отпустить мяч, удалить ненужные обработчики
    //     // ball.onmouseup = function() {
    //     //     document.removeEventListener('mousemove', onMouseMove);
    //     //     ball.onmouseup = null;
    //     // };
    // };


  return (
    <MapContext.Provider value={{markers, imgBox, showMarkerInfo, onZoom}}>
      <Map/>
    </MapContext.Provider>
  );
};

export default App;
