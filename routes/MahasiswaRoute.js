import express from 'express';

import { getMahasiswa, getMahasiswaById, createMahasiswa, generateMahasiswa } from "../controllers/MahasiswaController.js"

const router = express.Router();

router.get('/mahasiswa', getMahasiswa);
router.get('/mahasiswa/:id', getMahasiswaById);
router.post('/mahasiswa/create', createMahasiswa);
router.post('/mahasiswa/generate', generateMahasiswa);


export default router;