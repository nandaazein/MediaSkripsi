import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import teacherModel from '../Models/GuruModel.js';
import { config } from 'dotenv';

config();

const teacherController = {
  async register(req, res) {
    try {
      const { nip, fullName, school, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Kata sandi tidak cocok' });
      }

      const existingTeacher = await teacherModel.findByNIP(nip);
      if (existingTeacher) {
        return res.status(400).json({ message: 'NIP sudah terdaftar' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await teacherModel.create({
        nip,
        fullName,
        school,
        password: hashedPassword
      });

      res.status(201).json({ message: 'Guru berhasil terdaftar' });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { nip, password } = req.body;

      const teacher = await teacherModel.findByNIP(nip);
      if (!teacher) {
        return res.status(400).json({ message: 'Kredensial tidak valid' });
      }

      const isMatch = await bcrypt.compare(password, teacher.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Kredensial tidak valid' });
      }

      const token = jwt.sign(
        { id: teacher.id, role: teacher.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({
        token,
        user: {
          id: teacher.id,
          nip: teacher.nip,
          fullName: teacher.full_name,
          school: teacher.school,
          role: teacher.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  }
};

export default teacherController;