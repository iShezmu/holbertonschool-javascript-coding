const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n').filter((line) => line && line.split(',').length > 1);
  const students = lines.slice(1); // Skip the header
  const totalStudents = students.length;

  const fields = {};

  students.forEach((line) => {
    const studentData = line.split(',');
    if (studentData.length < 4) {
      return; // Skip lines that don't have enough data
    }
    const name = studentData[0].trim();
    const field = studentData[3].trim();

    if (!fields[field]) {
      fields[field] = { count: 0, names: [] };
    }

    fields[field].count += 1;
    fields[field].names.push(name);
  });

  console.log(`Number of students: ${totalStudents}`);
  Object.entries(fields).forEach(([field, data]) => {
    console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
  });
}

module.exports = countStudents;
