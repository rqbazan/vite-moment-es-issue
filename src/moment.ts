import moment from 'moment'

import 'moment/locale/es'

moment.updateLocale('es', {
  weekdaysShort: [
    'ð§¡ Dom.',
    'ð Lun.',
    'ð Mar.',
    'ð´ MiÃ©r',
    'ð¤ Jue.',
    'ð¥ Vie.',
    'ð¦ SÃ¡b.',
  ],
})

export default moment
