import {useDispatch, useSelector} from 'react-redux';
import {setAppMode} from '../redux/appRedux';
import {AppDispatch, RootState} from '../redux/store';
import APP_COLORS from '../themes/Colors';
import {IAppModeColor} from './types';

export const useAppMode = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLightMode = useSelector((state: RootState) => state.app.isLightMode);

  const onSelectAppMode = () => {
    dispatch(setAppMode(!isLightMode));
  };

  const appModeColor: IAppModeColor = {
    mainBackgroundColor: isLightMode ? APP_COLORS.white : APP_COLORS.black,
    mainColor: isLightMode ? APP_COLORS.black : APP_COLORS.white,
  };

  return {
    onSelectAppMode,
    isLightMode,
    appModeColor,
  };
};
