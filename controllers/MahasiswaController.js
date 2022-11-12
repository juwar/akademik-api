import { PrismaClient } from "@prisma/client";
import {generateName, generateString} from "./../utils/generatorUtils.js"

const prisma = new PrismaClient();

export const getMahasiswa = async (req, res) => {
  try {
    const response = await prisma.mahasiswa.findMany();
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ msag: e.message });
  }
};

export const getMahasiswaById = async (req, res) => {
  try {
    const response = await prisma.mahasiswa.findUnique({
      where: {
        nim: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ msag: e.message });
  }
};

export const createMahasiswa = async (req, res) => {
  try {
    const reqData = req.body;
    const response = await prisma.mahasiswa.create({
      data: reqData,
    });
    res.status(201).json(response);
  } catch (e) {
    res.status(400).json({ msag: e.message });
  }
};

export const generateMahasiswa = async (req, res) => {
  try {
    const amount = req?.body?.amount;
    const data = [];
    for (let i = 0; i < amount; i++) {
      const generatedData = {
        nim: generateString({
          length: 13,
          prefix: "MH-",
          type: ["uppercase", "number"],
        }),
        nama: generateName({ nameLength: 4 }),
        prodi: generateString({ length: 3, type: ["uppercase"] }),
        pembimbing: generateString({
          length: 13,
          prefix: "MH-",
          type: ["uppercase", "number"],
        }),
        telpon: generateString({ length: 10, prefix: "08", type: ["number"] }),
        alamat: generateName({ nameLength: 4, fixed: true }),
      };
      data.push(generatedData);
    }
    const response = await prisma.mahasiswa.createMany({
      data: await data,
      skipDuplicates: true,
    });
    res.status(201).json(response);
  } catch (e) {
    res.status(400).json({ msag: e.message });
  }
};
