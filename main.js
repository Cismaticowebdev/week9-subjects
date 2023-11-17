
let numSubject = parseInt(prompt('How many subjects would you like to enter?'));

for (let i = 0; i < numSubject; i++) {
    let subjectName = prompt('Enter name of subject number ' + (i + 1));
    let subjectMark = prompt('Enter mark of subject number ' + (i + 1));

    let grade = calculateGrade(subjectMark);
    addTableRow(subjectName, subjectMark, grade);
}

function addTableRow(subjectName, subjectMark, grade) {
    const tableBody = document.getElementById('tableBody');

    let tableRow = document.createElement('tr');
    let tableCell1 = document.createElement('td');
    let tableCell2 = document.createElement('td');
    let tableCell3 = document.createElement('td');


    tableRow.appendChild(tableCell1);
    tableCell1.textContent = subjectName;
    tableRow.appendChild(tableCell2);
    tableCell2.textContent = subjectMark;
    tableRow.appendChild(tableCell3);
    tableCell3.textContent = grade;

    tableBody.appendChild(tableRow);
}

function calculateGrade(subjectMark) {
    mark = parseInt(subjectMark);

    if (mark >= 85) {
        return 'A';
    } else if (mark < 85 && mark >= 70) {
        return 'B';
    } else if (mark < 70 && mark >= 55) {
        return 'C';
    } else if (mark < 55 && mark >= 40) {
        return 'D';
    } else if (mark < 40) {
        return 'F';
    }
}



