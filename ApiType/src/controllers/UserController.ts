// controllers/UserController.ts
import { Request, Response } from 'express';
import { connection } from '../config/dbconfig';
import { User } from '../models/User';

export const getUserByEmailAndPassword= (req: Request, res:Response)=>
{
    const {email, password} = req.params;
    console.log(`Esto es el email extraido de la url ${email} y esto el password ${password}`);

    const query = 'SELECT * FROM Usuarios WHERE CorreoElectronico = ? AND Contraseña = ?';
    const values = [email, password];
    connection.query(query, values, (err, results)=>{
        if (err) {
            console.error('Error al obtener usuario por correo y contraseña:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            if (results.length > 0) {
                // Si se encontró un usuario, devolverlo en la respuesta
                res.status(200).json(results[0]);
            } else {
                // Si no se encontró ningún usuario, devolver un mensaje indicando que las credenciales son incorrectas
                res.status(404).json({ message: 'Credenciales incorrectas' });
            }
        }
    });

}


export const getAllUsers = (req: Request, res: Response) => {
    const query = 'SELECT * FROM Usuarios';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            res.status(200).json(results);
        }
    });
};

export const createUser = (req: Request, res: Response) => {
    const user: User = req.body;
    const query = 'INSERT INTO Usuarios SET ?';

    connection.query(query, user, (err, result) => {
        if (err) {
            console.error('Error al crear usuario:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            res.status(201).json({ message: 'Usuario creado exitosamente', userID: result.insertId });
        }
    });
};

export const getUserById = (req: Request, res: Response) => {
    const userID = req.params.id;
    const query = 'SELECT * FROM Usuarios WHERE ID = ?';

    connection.query(query, userID, (err, result) => {
        if (err) {
            console.error('Error al obtener usuario:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).json(result[0]);
            }
        }
    });
};

export const updateUser = (req: Request, res: Response) => {
    const userID = req.params.id;
    const updatedUser: User = req.body;
    const query = 'UPDATE Usuarios SET ? WHERE ID = ?';

    connection.query(query, [updatedUser, userID], (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            res.status(200).json({ message: 'Usuario actualizado exitosamente' });
        }
    });
};

export const deleteUser = (req: Request, res: Response) => {
    const userID = req.params.id;
    const query = 'DELETE FROM Usuarios WHERE ID = ?';

    connection.query(query, userID, (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            res.status(200).json({ message: 'Usuario eliminado exitosamente' });
        }
    });
};
