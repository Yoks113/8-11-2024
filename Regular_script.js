function generateSubjects() {
    const studentId = document.getElementById('student-id').value.trim(); 

const studentData = [
    {"studentId": "202108997", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202108997", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202108997", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202108997", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202108997", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202108997", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202108997", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202108997", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    {"studentId": "202218588", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218588", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218588", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218588", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218588", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218588", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218588", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218588", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    {"studentId": "202218754", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218754", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218754", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218754", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218754", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218754", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218754", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218754", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    {"studentId": "202218755", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218755", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218755", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218755", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218755", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218755", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218755", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218755", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    {"studentId": "202218756", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218756", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218756", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218756", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218756", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218756", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218756", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218756", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    //tinamad
];

    const subjects = studentData.filter(subject => subject.studentId === studentId);

    console.log("Filtered Subjects:", subjects);

    if (subjects.length === 0) {
        document.getElementById('generated-subjects').innerHTML = 'No subjects found for this student ID.';
        return;
    }

    let table = '<table>';
    table += '<tr><th>Subject Code</th><th>Subject Name</th><th>Units</th></tr>';

    subjects.forEach(subject => {
        table += `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.units}</td></tr>`;
    });

    table += '</table>';

    document.getElementById('generated-subjects').innerHTML = table;
}
