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
    CREATE_TEAM_ERROR: 'Ha habido un error al crear tu equipo. Vuelve a intentarlo.',
    CREATE_TEAM_SUCCESS: 'Equipo creado correctemente!',
    UPLOAD_FILE_SUCCESS: 'Se ha subido tu entregable con éxito',
    UPLOAD_FILE_ERROR: 'Ha habido un error al subir tu entregable.',
    SEND_CHALLENGE_SUCCESS: 'Challenge enviado!',
    SEND_CHALLENGE_ERROR: 'Ha habido un error al enviar el challange. Vuelve a intentarlo.',
    LOGIN_TEAM: 'Inicio de sesión correcto!',
    LOGIN_ERROR: 'Ha habido un error en tu inicio de sesión. Vuelve a intentarlo.',
    LOAD_TEAMS_ERROR: 'Ha habido un error al cargar los equipos del torneo. Vuelve a intentarlo.',
    MODIFY_PROFILE_ERROR: 'Ha habido un error al modificar tu perfil.',
    MODIFY_PROFILE_SUCCESS: 'Se ha modificado tu perfil correctamente.',
    WRONG_PASSWORD: 'La contraseña no es correcta.',
  },
  icons: {
    SUCCESS: alertSuccessIcon,
    ERROR: alertErrorIcon,
    WARNING: alertWarningIcon,
  },
};
