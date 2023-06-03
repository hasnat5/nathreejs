'use client'
import { useEffect } from 'react';
import * as PANOLENS from 'panolens';

const Pano = () => {
    useEffect(() => {
        const viewer = new PANOLENS.Viewer({ container: document.getElementById('panorama-viewer') });

        const panorama = new PANOLENS.ImagePanorama('assets/image/natpano.jpg');
        viewer.add(panorama);
    }, []);

    return <div id='panorama-viewer' style={{ width: '100%', height: '500px' }} />;
};

export default Pano;

