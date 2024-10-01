import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

type Location = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};
type LocationPermissionStatus =
  | typeof RESULTS.UNAVAILABLE
  | typeof RESULTS.DENIED
  | typeof RESULTS.GRANTED
  | typeof RESULTS.BLOCKED;

type UseLocationHook = {
  location: Location | null;
  permissionStatus: LocationPermissionStatus;
  requestLocationPermission: () => Promise<void>;
  getLocation: () => void;
};

const useLocation = (): UseLocationHook => {
  const [location, setLocation] = useState<Location | null>(null);
  const [permissionStatus, setPermissionStatus] =
    useState<LocationPermissionStatus>(
      Platform.select({
        ios: RESULTS.UNAVAILABLE,
        android: RESULTS.UNAVAILABLE,
      }) as LocationPermissionStatus,
    );

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    try {
      const permission = Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      });
      if (!permission) {
        throw new Error('Could not get permission');
      }
      const result = await check(permission);
      setPermissionStatus(result as LocationPermissionStatus);
    } catch (error: any) {}
  };

  const requestLocationPermission = async () => {
    try {
      const permission = Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      });

      if (!permission) {
        throw new Error('Could not get permission');
      }
      const result = await request(permission);
      setPermissionStatus(result as LocationPermissionStatus);
    } catch (error) {}
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position: any) => {
        setLocation({
          ...position.coords,
          altitude: position.coords.altitude ?? 0,
          altitudeAccuracy: position.coords.altitudeAccuracy ?? 0,
        });
      },
      (error: any) => {
        if (error.message === 'Location permission denied') {
          setPermissionStatus('denied');
        } else {
          setPermissionStatus('unavailable');
        }
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return {
    location,
    permissionStatus,
    requestLocationPermission,
    getLocation,
  };
};

export default useLocation;
