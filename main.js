const createStudent = () => {
    const newStudent = {
        name: 'Ben',
        grade: '9'
    }
    return newStudent
}

const student = createStudent()

const addMathGrade = (student) => {
    student.mathGrade = 'B'
    return student
}

const addHistoryGrade = (student) => {
    student.historyGrade = 'C'
    return student
}

const addScienceGrade = (student) => {
    student.scienceGrade = 'A'
    return student
}

console.log(student)
console.log(addMathGrade(student))
console.log(addHistoryGrade(student))
console.log(addScienceGrade(student))