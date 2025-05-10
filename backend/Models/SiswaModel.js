// import pool from '../Database/DB.js';
// import bcrypt from 'bcryptjs';

// const studentModel = {
//   async findByNIS(nis) {
//     const [rows] = await pool.query('SELECT * FROM students WHERE nis = ?', [nis]);
//     return rows[0];
//   },

//   async findById(id) {
//     const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
//     return rows[0];
//   },

//   async register({ nis, name, className, password, confirmPassword, token }) {
//     if (password !== confirmPassword) {
//       throw new Error('Kata sandi tidak cocok');
//     }
//     if (token !== '123') {
//       throw new Error('Token tidak valid');
//     }
//     const existingStudent = await this.findByNIS(nis);
//     if (existingStudent) {
//       throw new Error('NIS sudah terdaftar');
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const status = 'BELUM SELESAI';
//     const progress = 0;
//     const role = 'student';
//     await pool.query(
//       'INSERT INTO students (nis, full_name, class, password, status, progress, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
//       [nis, name, className, hashedPassword, status, progress, role]
//     );
//   },

//   async login(nis, password) {
//     const student = await this.findByNIS(nis);
//     if (!student || !(await bcrypt.compare(password, student.password))) {
//       return null;
//     }
//     return {
//       id: student.id,
//       nis: student.nis,
//       full_name: student.full_name,
//       class: student.class,
//       role: student.role,
//       progress: student.progress
//     };
//   },

//   async getAllStudents() {
//     try {
//       const [rows] = await pool.query(
//         'SELECT nis, full_name, class, status, progress FROM students'
//       );
//       return rows;
//     } catch (error) {
//       console.error('Error in getAllStudents:', error);
//       throw error;
//     }
//   },

//   async getClasses() {
//     const [rows] = await pool.query('SELECT DISTINCT class FROM students ORDER BY class');
//     return rows.map(row => row.class);
//   },

//   async updateProgress(nis, progress) {
//     if (isNaN(progress) || progress < 0 || progress > 100) {
//       throw new Error('Progres tidak valid (0-100)');
//     }
//     const status = progress >= 100 ? 'SELESAI' : 'BELUM SELESAI';
//     await pool.query(
//       'UPDATE students SET progress = ?, status = ? WHERE nis = ?',
//       [progress, status, nis]
//     );
//     const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students WHERE nis = ?', [nis]);
//     return rows[0];
//   },

//   async updateStudent(nis, { full_name, class: className }) {
//     await pool.query(
//       'UPDATE students SET full_name = ?, class = ? WHERE nis = ?',
//       [full_name, className, nis]
//     );
//     const [rows] = await pool.query('SELECT nis, full_name, class, status, progress FROM students WHERE nis = ?', [nis]);
//     return rows[0];
//   },

//   async getProgress(nis) {
//     const [rows] = await pool.query('SELECT progress FROM students WHERE nis = ?', [nis]);
//     return rows[0] ? { progress: rows[0].progress } : { progress: 0 };
//   },

//   async deleteStudent(nis) {
//     const student = await this.findByNIS(nis);
//     if (!student) {
//       throw new Error('Siswa tidak ditemukan');
//     }
//     await pool.query('DELETE FROM students WHERE nis = ?', [nis]);
//   },

//   async submitScore(nis, scores) {
//     const student = await this.findByNIS(nis);
//     if (!student) {
//       throw new Error('Siswa tidak ditemukan');
//     }
//     const [existing] = await pool.query('SELECT id FROM scores WHERE nis = ?', [nis]);
//     if (existing.length > 0) {
//       await pool.query(
//         'UPDATE scores SET latihan1 = ?, latihan2 = ?, latihan3 = ?, latihan4 = ?, kuis1 = ?, kuis2 = ?, kuis3 = ?, kuis4 = ?, evaluasi_akhir = ? WHERE nis = ?',
//         [
//           scores.latihan1 ?? null,
//           scores.latihan2 ?? null,
//           scores.latihan3 ?? null,
//           scores.latihan4 ?? null,
//           scores.kuis1 ?? null,
//           scores.kuis2 ?? null,
//           scores.kuis3 ?? null,
//           scores.kuis4 ?? null,
//           scores.evaluasi_akhir ?? null,
//           nis
//         ]
//       );
//     } else {
//       await pool.query(
//         'INSERT INTO scores (nis, latihan1, latihan2, latihan3, latihan4, kuis1, kuis2, kuis3, kuis4, evaluasi_akhir) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//         [
//           nis,
//           scores.latihan1 ?? null,
//           scores.latihan2 ?? null,
//           scores.latihan3 ?? null,
//           scores.latihan4 ?? null,
//           scores.kuis1 ?? null,
//           scores.kuis2 ?? null,
//           scores.kuis3 ?? null,
//           scores.kuis4 ?? null,
//           scores.evaluasi_akhir ?? null
//         ]
//       );
//     }
//   },

//   async getScores(nis) {
//     const [rows] = await pool.query(
//       'SELECT latihan1, latihan2, latihan3, latihan4, kuis1, kuis2, kuis3, kuis4, evaluasi_akhir FROM scores WHERE nis = ?',
//       [nis]
//     );
//     return rows[0] || {
//       latihan1: null,
//       latihan2: null,
//       latihan3: null,
//       latihan4: null,
//       kuis1: null,
//       kuis2: null,
//       kuis3: null,
//       kuis4: null,
//       evaluasi_akhir: null
//     };
//   },

//   async getAllScores() {
//     const [rows] = await pool.query(
//       'SELECT st.nis, st.full_name, st.class, s.latihan1, s.latihan2, s.latihan3, s.latihan4, s.kuis1, s.kuis2, s.kuis3, s.kuis4, s.evaluasi_akhir FROM students st LEFT JOIN scores s ON st.nis = s.nis'
//     );
//     return rows;
//   },

//   async createQuestion({ quizNumber, question, options, correctAnswer, imageUrl }) {
//     await pool.query(
//       'INSERT INTO questions (quiz_number, question_text, options, correct_answer, image_url) VALUES (?, ?, ?, ?, ?)',
//       [quizNumber, question, JSON.stringify(options), correctAnswer, imageUrl || null]
//     );
//   },

//   async getQuestions(quizNumber) {
//     const [rows] = await pool.query('SELECT * FROM questions WHERE quiz_number = ?', [quizNumber]);
//     return rows.map(row => ({
//       ...row,
//       options: JSON.parse(row.options)
//     }));
//   },

//   async getAllQuestions() {
//     const [rows] = await pool.query('SELECT * FROM questions');
//     return rows.map(row => ({
//       ...row,
//       options: JSON.parse(row.options)
//     }));
//   },

//   async getQuestionById(id) {
//     const [rows] = await pool.query('SELECT * FROM questions WHERE id = ?', [id]);
//     const row = rows[0];
//     return row ? { ...row, options: JSON.parse(row.options) } : null;
//   },

//   async updateQuestion(id, { quizNumber, question, options, correctAnswer, imageUrl }) {
//     await pool.query(
//       'UPDATE questions SET quiz_number = ?, question_text = ?, options = ?, correct_answer = ?, image_url = ? WHERE id = ?',
//       [quizNumber, question, JSON.stringify(options), correctAnswer, imageUrl || null, id]
//     );
//   },

//   async deleteQuestion(id) {
//     await pool.query('DELETE FROM questions WHERE id = ?', [id]);
//   }
// };

// export default studentModel;

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
    const student = await this.findByNIS(nis);
    if (!student) {
      throw new Error('Siswa tidak ditemukan');
    }
    const [existing] = await pool.query('SELECT id FROM scores WHERE nis = ?', [nis]);
    if (existing.length > 0) {
      await pool.query(
        'UPDATE scores SET latihan1 = ?, latihan2 = ?, latihan3 = ?, latihan4 = ?, kuis1 = ?, kuis2 = ?, kuis3 = ?, kuis4 = ?, evaluasi_akhir = ? WHERE nis = ?',
        [
          scores.latihan1 ?? null,
          scores.latihan2 ?? null,
          scores.latihan3 ?? null,
          scores.latihan4 ?? null,
          scores.kuis1 ?? null,
          scores.kuis2 ?? null,
          scores.kuis3 ?? null,
          scores.kuis4 ?? null,
          scores.evaluasi_akhir ?? null,
          nis
        ]
      );
    } else {
      await pool.query(
        'INSERT INTO scores (nis, latihan1, latihan2, latihan3, latihan4, kuis1, kuis2, kuis3, kuis4, evaluasi_akhir) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          nis,
          scores.latihan1 ?? null,
          scores.latihan2 ?? null,
          scores.latihan3 ?? null,
          scores.latihan4 ?? null,
          scores.kuis1 ?? null,
          scores.kuis2 ?? null,
          scores.kuis3 ?? null,
          scores.kuis4 ?? null,
          scores.evaluasi_akhir ?? null
        ]
      );
    }
  },

  async getScores(nis) {
    const [rows] = await pool.query(
      'SELECT latihan1, latihan2, latihan3, latihan4, kuis1, kuis2, kuis3, kuis4, evaluasi_akhir FROM scores WHERE nis = ?',
      [nis]
    );
    return rows[0] || {
      latihan1: null,
      latihan2: null,
      latihan3: null,
      latihan4: null,
      kuis1: null,
      kuis2: null,
      kuis3: null,
      kuis4: null,
      evaluasi_akhir: null
    };
  },

  async getAllScores() {
    const [rows] = await pool.query(
      'SELECT st.nis, st.full_name, st.class, s.latihan1, s.latihan2, s.latihan3, s.latihan4, s.kuis1, s.kuis2, s.kuis3, s.kuis4, s.evaluasi_akhir FROM students st LEFT JOIN scores s ON st.nis = s.nis'
    );
    return rows;
  },

  async createQuestion({ quizNumber, question, options, correctAnswer, imageUrl }) {
    await pool.query(
      'INSERT INTO questions (quiz_number, question_text, options, correct_answer, image_url) VALUES (?, ?, ?, ?, ?)',
      [quizNumber, question, JSON.stringify(options), correctAnswer, imageUrl || null]
    );
  },

async getQuestions(quizNumber) {
  const [rows] = await pool.query('SELECT * FROM questions WHERE quiz_number = ?', [quizNumber]);
  return rows.map(row => ({
    ...row,
    options: row.options ? (typeof row.options === 'string' ? JSON.parse(row.options) : row.options) : ['-', '-', '-', '-']
  }));
},

async getAllQuestions() {
  const [rows] = await pool.query('SELECT * FROM questions');
  return rows.map(row => ({
    ...row,
    options: row.options ? (typeof row.options === 'string' ? JSON.parse(row.options) : row.options) : ['-', '-', '-', '-']
  }));
},

async getQuestionById(id) {
  const [rows] = await pool.query('SELECT * FROM questions WHERE id = ?', [id]);
  const row = rows[0];
  if (!row) return null;
  return {
    ...row,
    options: row.options ? (typeof row.options === 'string' ? JSON.parse(row.options) : row.options) : ['-', '-', '-', '-']
  };
},

  async updateQuestion(id, { quizNumber, question, options, correctAnswer, imageUrl }) {
    await pool.query(
      'UPDATE questions SET quiz_number = ?, question_text = ?, options = ?, correct_answer = ?, image_url = ? WHERE id = ?',
      [quizNumber, question, JSON.stringify(options), correctAnswer, imageUrl || null, id]
    );
  },

  async deleteQuestion(id) {
    await pool.query('DELETE FROM questions WHERE id = ?', [id]);
  }
};

export default studentModel;