'use client'
import { useEffect, useState } from 'react';

const Pano = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const PANOLENS = require('panolens'); // Use require for server-side compatibility

            const viewer = new PANOLENS.Viewer({ container: document.getElementById('panoramic-small'), enableReticle: false, output: 'console', viewIndicator: true });

            const panorama = new PANOLENS.ImagePanorama('assets/image/Panoramic-2-small.png');
            const castle = new PANOLENS.ImagePanorama('assets/image/natpano.jpg');

            const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
            infospot.position.set(-100, -500, 5000);
            infospot.addHoverText("Gedung");

            infospot.addEventListener('click', function () {
                viewer.setPanorama(castle);
            });

            const infospot2 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
            infospot2.position.set(-100, -500, 5000);
            infospot2.addHoverText("Nikahan");

            infospot2.addEventListener('click', function () {
                viewer.setPanorama(panorama);
            });

            panorama.add(infospot);
            castle.add(infospot2);

            viewer.add(panorama, castle);
        }
    }, [isClient]);

    return <div id='panoramic-small' className='w-full h-full' />;
};

export default Pano;