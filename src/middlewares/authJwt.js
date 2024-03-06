import User from '../models/User';
import { verify_Token } from '../controllers/token.controller';


// valida si el token es valido
export const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({ message: "no se ha proporcionado token" });

    try {
        // extraer la informacion de el token
        const decoded = await verify_Token(token);
        req.userId = decoded.id;

        // buscar usuario en la base de datos
        const user = await User.findById(req.userId, { password: 0 });

        // validar si el usuario existe
        if (!user) return res.status(404).json({ message: "usuario no encontrado" });

        // continuar con la siguiente acción si el usuario existe
        next();
    } catch (error) {
        return res.status(401).json({ message: "token inválido" , token: token});
    }
};

