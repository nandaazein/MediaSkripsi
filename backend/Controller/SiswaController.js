import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import studentModel from '../Models/SiswaModel.js';
import { config } from 'dotenv';

config();

const studentController = {
  async register(req, res) {
    try {
      const { nis, fullName, password, confirmPassword, class: studentClass, token } = req.body;

      if (token !== '123' ) {
        return res.status(400).json({ message: 'Token tidak valid' });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Kata sandi tidak cocok' });
      }

      const existingStudent = await studentModel.findByNIS(nis);
      if (existingStudent) {
        return res.status(400).json({ message: 'NIS sudah terdaftar' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await studentModel.create({
        nis,
        fullName,
        password: hashedPassword,
        class: studentClass
      });

      res.status(201).json({ message: 'Siswa berhasil terdaftar' });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { nis, password } = req.body;

      const student = await studentModel.findByNIS(nis);
      if (!student) {
        return res.status(400).json({ message: 'Kredensial tidak valid' });
      }

      const isMatch = await bcrypt.compare(password, student.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Kredensial tidak valid' });
      }

      const token = jwt.sign(
        { id: student.id, role: student.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({
        token,
        user: {
          id: student.id,
          nis: student.nis,
          fullName: student.full_name,
          class: student.class,
          role: student.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async getAllStudents(req, res) {
    try {
      const students = await studentModel.getAll();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async getClasses(req, res) {
    try {
      const classes = await studentModel.getClasses();
      res.json(classes);
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async updateProgress(req, res) {
    try {
      const { progress } = req.body;
      const { nis } = req.params;

      if (!progress || isNaN(progress) || progress < 0 || progress > 100) {
        return res.status(400).json({ message: 'Progres tidak valid (0-100)' });
      }

      const student = await studentModel.updateProgress(nis, progress);
      if (!student) {
        return res.status(404).json({ message: 'Siswa tidak ditemukan' });
      }

      res.json({ message: 'Progres berhasil diperbarui', student });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async updateOwnProgress(req, res) {
    try {
      const { progress } = req.body;
      const { id } = req.user;

      if (!progress || isNaN(progress) || progress < 0 || progress > 100) {
        return res.status(400).json({ message: 'Progres tidak valid (0-100)' });
      }

      const student = await studentModel.findById(id);
      if (!student) {
        return res.status(404).json({ message: 'Siswa tidak ditemukan' });
      }

      const updatedStudent = await studentModel.updateProgress(student.nis, progress);
      res.json({ message: 'Progres berhasil diperbarui', student: updatedStudent });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  },

  async deleteStudent(req, res) {
    try {
      const { nis } = req.params;
      const student = await studentModel.findByNIS(nis);
      if (!student) {
        return res.status(404).json({ message: 'Siswa tidak ditemukan' });
      }

      await studentModel.delete(nis);
      res.json({ message: 'Siswa berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ message: 'Kesalahan server', error: error.message });
    }
  }
};

export default studentController;