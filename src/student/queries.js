const getStudents ="SELECT * FROM students";
const getStudentById="SELECT * FROM students where id=$1";
const checkEmailExists="SELECT s FROM students s where s.email=$1";
const addStudent="INSERT INTO students (name,email,age,DOB) VALUES ($1,$2,$3,$4)";
const removeStudent="DELETE FROM students WHERE id=$1";
const updateStudent="UPDATE students SET name=$1, email=$2, age=$3, DOB=$4 WHERE id=$5";
module.exports={
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
}
