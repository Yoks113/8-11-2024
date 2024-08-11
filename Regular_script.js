function generateSubjects() {
    const subjects = [
        { code: 'GNED 06', name: 'Science, Technology, and Society', units: 3 },
        { code: 'GNED 08', name: 'Understanding the Self', units: 3 },
        { code: 'ITEC 50', name: 'Web System and Technologies 1', units: 3 },
        { code: 'ITEC 60', name: 'Integrated Programming and Technologies 1', units: 3 },
        { code: 'ITEC 65', name: 'Open Source Technology', units: 3 },
        { code: 'ITEC 70', name: 'Multimedia Systems', units: 3 },
        { code: 'FITT 2', name: 'Fitness Exercise', units: 2 },
        { code: 'FITT 4', name: 'Physical Activities towards Health and Fitness II', units: 2 }
    ];

    // Generate table
    let table = '<table>';
    table += '<tr><th>Subject Code</th><th>Subject Name</th><th>Units</th></tr>';

    subjects.forEach(subject => {
        table += `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.units}</td></tr>`;
    });

    table += '</table>';

    // Display table
    document.getElementById('generated-subjects').innerHTML = table;
}
