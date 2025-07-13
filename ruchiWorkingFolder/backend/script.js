const API_URL = 'http://localhost:3000/students';

async function fetchStudents() {
  try {
    const res = await axios.get(API_URL);
    const students = res.data;

    const tableBody = document.getElementById('student-table-body');
    tableBody.innerHTML = ''; // Clear previous rows

    students.forEach(student => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.course}</td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching students:', error);
  }
}

async function addStudent() {
  const name = document.getElementById('name').value.trim();
  const course = document.getElementById('course').value.trim();

  if (!name || !course) {
    alert('Please fill in both name and course.');
    return;
  }

  try {
    await axios.post(API_URL, { name, course });

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('course').value = '';

    // Refresh the table
    fetchStudents();
  } catch (error) {
    console.error('Error adding student:', error);
  }
}

// Load initial data
fetchStudents();
