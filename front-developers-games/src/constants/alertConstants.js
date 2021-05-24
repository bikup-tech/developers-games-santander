import alertSuccessIcon from '../assets/images/alert-success-icon.png';
import alertErrorIcon from '../assets/images/alert-error-icon.png';
import alertWarningIcon from '../assets/images/alert-warning-icon.png';

export default {
  types: {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
  },
  messages: {
    CREATE_BIKE_ERROR: 'Ha habido un error al crear tu bici. Vuelve a intentarlo.',
    CREATE_BIKE_SUCCESS: 'Bici creada correctemente!',
    UPDATE_BIKE_ERROR: 'Ha habido un error al añadir la ruta. Vuelve a intentarlo.',
    UPDATE_BIKE_SUCCESS: 'Ruta añadida correctamente!',
  },
  icons: {
    SUCCESS: alertSuccessIcon,
    ERROR: alertErrorIcon,
    WARNING: alertWarningIcon,
  },
};
