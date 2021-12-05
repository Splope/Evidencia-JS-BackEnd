//fuction para gestionar las rutas del proyecto
//necesitara el objeto express para crear los endpoint
import { addLoro, getLoro, getLoroById, updateLoro, deleteLoro } from "../controladores/lorosController.js"

const rutas = (app) => {
    app.route('/loros')
        .get(getLoro)
        .post(addLoro)
    app.route('/loros/:loroid')
        .get(getLoroById)
        .put(updateLoro)
        .delete(deleteLoro)
}

export default rutas