import pool from '../Database/DB.js';

const studentModel = {
  async findByNIS(nis) {
    const [rows] = await pool.query('SELECT * FROM students WHERE nis = ?', [nis]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ nis, fullName, password, class: studentClass }) {
    const status = 'BELUM SELESAI';
    const progress = 0;
    const role = 'student';
    await pool.query(
      'INSERT INTO students (nis, full_name, password, class, status, progress, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nis, fullName, password, studentClass, status, progress, role]
    );
  },

  async getAll() {
    const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students');
    return rows;
  },

  async getClasses() {
    const [rows] = await pool.query('SELECT DISTINCT class FROM students ORDER BY class');
    return rows.map(row => row.class);
  },

  async updateProgress(nis, progress) {
    const status = progress >= 100 ? 'SELESAI' : 'BELUM SELESAI';
    await pool.query(
      'UPDATE students SET progress = ?, status = ? WHERE nis = ?',
      [progress, status, nis]
    );
    const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students WHERE nis = ?', [nis]);
    return rows[0];
  },

  async delete(nis) {
    await pool.query('DELETE FROM students WHERE nis = ?', [nis]);
  }
};

export default studentModel;