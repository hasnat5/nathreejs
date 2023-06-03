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

            const viewer = new PANOLENS.Viewer({ container: document.getElementById('panoramic') });

            const panorama = new PANOLENS.ImagePanorama('assets/image/Panoramic-2.png');
            viewer.add(panorama);
        }
    }, [isClient]);

    return <div id='panoramic' className='w-full h-full' />;
};

export default Pano;