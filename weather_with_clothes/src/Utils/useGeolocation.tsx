import { useEffect, useState } from "react";


function useGeolocation() {

  const [userLocation, setUserLocation] = useState(null);

      // define the function that finds the users geolocation
      const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
          // get the current users location
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // save the geolocation coordinates in two variables
              const { latitude, longitude } = position.coords;
              // update the value of userlocation variable
              setUserLocation({latitude, longitude});
              console.log(userLocation);
            },
            // if there was an error getting the users location
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        // if geolocation is not supported by the users browser
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
  
  useEffect(()=> {

    getUserLocation();

  }, [])


  return { userLocation } 

}

export default useGeolocation;
