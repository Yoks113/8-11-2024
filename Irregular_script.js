function addSubject() {
    const code = document.getElementById('subject-code').value;
    const name = document.getElementById('subject-name').value;
    const units = document.getElementById('units').value;

    if (code && name && units) {
        let table = document.getElementById('subjects-table');

        if (!table) {
            // Create the table structure if it doesn't exist
            table = document.createElement('table');
            table.id = 'subjects-table';
            table.innerHTML = `
                <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Units</th>
                    <th>Action</th>
                </tr>
            `;
            document.getElementById('subjects-list').innerHTML = ''; // Clear the "No subjects added yet." text
            document.getElementById('subjects-list').appendChild(table);
        }

        // Add the new row with the subject details
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${code}</td>
            <td>${name}</td>
            <td>${units}</td>
            <td><button onclick="deleteSubject(this)" class="delete-btn">Delete</button></td>
        `;
        table.appendChild(row);

        // Clear the inputs after adding the subject
        document.getElementById('subject-code').value = '';
        document.getElementById('subject-name').value = '';
        document.getElementById('units').value = '';
    } else {
        alert('Please fill in all the fields.');
    }
}

function deleteSubject(button) {
    // Remove the row associated with the delete button
    const row = button.parentElement.parentElement;
    row.remove();

    // Check if there are no more rows, and display the default message
    const table = document.getElementById('subjects-table');
    if (table.rows.length === 1) {
        document.getElementById('subjects-list').innerHTML = '<p>No subjects added yet.</p>';
    }
}
