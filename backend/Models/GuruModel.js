import pool from '../Database/DB.js';

const teacherModel = {
  async findByNIP(nip) {
    const [rows] = await pool.query('SELECT * FROM teachers WHERE nip = ?', [nip]);
    return rows[0];
  },

  async create({ nip, fullName, school, password }) {
    const role = 'teacher';
    await pool.query(
      'INSERT INTO teachers (nip, full_name, school, password, role) VALUES (?, ?, ?, ?, ?)',
      [nip, fullName, school, password, role]
    );
  }
};

export default teacherModel;