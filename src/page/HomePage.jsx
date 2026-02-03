import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./HomePage.css";

function HomePage(){
    
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        return () => map.remove();

    }, []);

    return(
        <>
            <div className="h-screen w-screen relative">
                {/* blue header */}
                <img src="public/images/pattern-bg-desktop.png" alt="" className="h-1/3 w-full z-0 absolute"/>
                {/* bottom map thing pictuer */}
                <div className="h-2/3 w-full">
                    <div id="map" className="h-2/3 w-full absolute z-0 bottom-0"></div>
                </div>

                {/* title */}
                <div className="absolute h-2/12 w-full flex justify-center items-center top-0">
                    <div className="h-20 w-auto font-mono font-medium text-4xl text-white">IP Address Tracker</div>
                </div>

                {/* search */}
                <div className="absolute h-4/12 w-full flex justify-center items-center top-0 z-20">
                    <div className="h-16 w-200 bg-white flex justify-center items-center rounded-xl">
                        <input type="text" className="h-full w-11/12 pl-4 text-xl rounded-l-xl" placeholder="Search for any IP address or domain"/>
                        <div className="h-full w-1/12 flex justify-center items-center bg-gray-800 hover:border hover:border-white rounded-r-xl cursor-pointer">
                            <i className='bx bx-chevron-right text-4xl text-white'></i>
                        </div>
                    </div>
                </div>

                {/* results */}
                <div className="h-2/3 w-full flex justify-center items-center absolute top-0 z-10">
                    <div className="h-50 w-375 flex justify-around items-center bg-white rounded-xl ">
                        <div className="border-r border-black h-11/12 w-1/4 flex-col justify-center items-center">
                            <div className="h-1/4 w-full pl-6 flex justify-start items-end text-md text-gray-600 font-semibold">IP Address</div>
                            <div className="h-1/2 w-full pl-6 pt-1 text-3xl font-semibold">192.212.174.101</div>
                        </div>
                        <div className="border-r border-black h-11/12 w-1/4 flex-col justify-center items-center">
                            <div className="h-1/4 w-full pl-6 flex justify-start items-end text-md text-gray-600 font-semibold">Location</div>
                            <div className="h-1/2 w-full pl-6 pt-1 text-3xl font-semibold">Brooklyn, NY<br />10001</div>
                        </div>
                        <div className="border-r border-black h-11/12 w-1/4 flex-col justify-center items-center">
                            <div className="h-1/4 w-full pl-6 flex justify-start items-end text-md text-gray-600 font-semibold">Timezone</div>
                            <div className="h-1/2 w-full pl-6 pt-1 text-3xl font-semibold">UTC -05:00</div>
                        </div>
                        <div className="h-11/12 w-1/4 flex-col justify-center items-center">
                            <div className="h-1/4 w-full pl-6 flex justify-start items-end text-md text-gray-600 font-semibold">ISP</div>
                            <div className="h-1/2 w-full pl-6 pt-1 text-3xl font-semibold">SpaceX<br />Starlink</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomePage;