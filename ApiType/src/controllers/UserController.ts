// controllers/UserController.ts
import { Request, Response } from 'express';
import { connection } from '../config/dbconfig';
import { User } from '../models/User';

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
