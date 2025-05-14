import pool from '../Database/DB.js';
import bcrypt from 'bcryptjs';

const studentModel = {
  async findByNIS(nis) {
    const [rows] = await pool.query('SELECT * FROM students WHERE nis = ?', [nis]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
  },

  async register({ nis, name, className, password, confirmPassword, token }) {
    if (password !== confirmPassword) {
      throw new Error('Kata sandi tidak cocok');
    }
    if (token !== '123') {
      throw new Error('Token tidak valid');
    }
    const existingStudent = await this.findByNIS(nis);
    if (existingStudent) {
      throw new Error('NIS sudah terdaftar');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const status = 'BELUM SELESAI';
    const progress = 0;
    const role = 'student';
    await pool.query(
      'INSERT INTO students (nis, full_name, class, password, status, progress, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nis, name, className, hashedPassword, status, progress, role]
    );
  },

  async login(nis, password) {
    const student = await this.findByNIS(nis);
    if (!student || !(await bcrypt.compare(password, student.password))) {
      return null;
    }
    return {
      id: student.id,
      nis: student.nis,
      full_name: student.full_name,
      class: student.class,
      role: student.role,
      progress: student.progress
    };
  },

  async getAllStudents() {
    try {
      const [rows] = await pool.query(
        'SELECT nis, full_name, class, status, progress FROM students'
      );
      return rows;
    } catch (error) {
      console.error('Error in getAllStudents:', error);
      throw error;
    }
  },

  async getClasses() {
    const [rows] = await pool.query('SELECT DISTINCT class FROM students ORDER BY class');
    return rows.map(row => row.class);
  },

  async updateProgress(nis, progress) {
    if (isNaN(progress) || progress < 0 || progress > 100) {
      throw new Error('Progres tidak valid (0-100)');
    }
    const status = progress >= 100 ? 'SELESAI' : 'BELUM SELESAI';
    await pool.query(
      'UPDATE students SET progress = ?, status = ? WHERE nis = ?',
      [progress, status, nis]
    );
    const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students WHERE nis = ?', [nis]);
    return rows[0];
  },

  async updateStudent(nis, { full_name, class: className }) {
    await pool.query(
      'UPDATE students SET full_name = ?, class = ? WHERE nis = ?',
      [full_name, className, nis]
    );
    const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students WHERE nis = ?', [nis]);
    return rows[0];
  },

  async getProgress(nis) {
    const [rows] = await pool.query('SELECT progress FROM students WHERE nis = ?', [nis]);
    return rows[0] ? { progress: rows[0].progress } : { progress: 0 };
  },

  async deleteStudent(nis) {
    const student = await this.findByNIS(nis);
    if (!student) {
      throw new Error('Siswa tidak ditemukan');
    }
    await pool.query('DELETE FROM students WHERE nis = ?', [nis]);
  },

  async submitScore(nis, scores) {
    const { kuis1, kuis2, kuis3, kuis4, latihan1, latihan2, latihan3, latihan4, evaluasi_akhir } = scores;

    const [existing] = await pool.query('SELECT * FROM scores WHERE nis = ?', [nis]);

    if (existing.length > 0) {
      await pool.query(
        `UPDATE scores 
         SET kuis1 = COALESCE(?, kuis1), 
             kuis2 = COALESCE(?, kuis2), 
             kuis3 = COALESCE(?, kuis3), 
             kuis4 = COALESCE(?, kuis4), 
             latihan1 = COALESCE(?, latihan1), 
             latihan2 = COALESCE(?, latihan2), 
             latihan3 = COALESCE(?, latihan3), 
             latihan4 = COALESCE(?, latihan4), 
             evaluasi_akhir = COALESCE(?, evaluasi_akhir)
         WHERE nis = ?`,
        [kuis1, kuis2, kuis3, kuis4, latihan1, latihan2, latihan3, latihan4, evaluasi_akhir, nis]
      );
    } else {
      await pool.query(
        `INSERT INTO scores (nis, kuis1, kuis2, kuis3, kuis4, latihan1, latihan2, latihan3, latihan4, evaluasi_akhir)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nis, kuis1, kuis2, kuis3, kuis4, latihan1, latihan2, latihan3, latihan4, evaluasi_akhir]
      );
    }
  },

  async getScores(nis) {
    const [rows] = await pool.query(
      'SELECT nis, kuis1, kuis2, kuis3, kuis4, latihan1, latihan2, latihan3, latihan4, evaluasi_akhir, created_at, updated_at FROM scores WHERE nis = ?',
      [nis]
    );
    return rows[0];
  },

  async getAllScores() {
    const [rows] = await pool.query(
      'SELECT st.nis, st.full_name, st.class, s.latihan1, s.latihan2, s.latihan3, s.latihan4, s.kuis1, s.kuis2, s.kuis3, s.kuis4, s.evaluasi_akhir FROM students st LEFT JOIN scores s ON st.nis = s.nis'
    );
    return rows;
  },
};

export default studentModel;