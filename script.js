
document.addEventListener('DOMContentLoaded', function() {
    const teacherSelect = document.getElementById('teacherSelect');
    const votedList = document.getElementById('votedList');

    const teachers = ['Ms. Sally O’Brien - Biology & Science', 'Ms. Sarah Ryan - Art', 'Mr. Coleman Quinn - Maths & English', 'Ms. Zoe O’Keeffe - Secretary', 'Ms. Julie O’Connor - Home Economics', 'Mr. Sweeney - English and Geography', 'Dominic O’Sullivan', 'Patrick Drislane', 'Naoise O’Sullivan', 'Claire Downey', 'Carol Carey', 'Ciarain Meade', 'Michael Walsh', 'Mairead Foley', 'Scott Fitzgerald', 'Treasa Moher'];

    // Populate the select box with teachers
    teachers.forEach(teacher => {
        let option = document.createElement('option');
        option.value = teacher;
        option.textContent = teacher;
        teacherSelect.appendChild(option);
    });

    // Handle vote submission
    document.getElementById('voteForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedTeacher = teacherSelect.value;

        if (selectedTeacher) {
            // Add the voted teacher to the voted list
            let listItem = document.createElement('li');
            listItem.textContent = selectedTeacher;
            votedList.appendChild(listItem);

            // Remove the voted teacher from the select box
            const optionToRemove = teacherSelect.querySelector(`option[value="{selectedTeacher}"]`);
            if (optionToRemove) {
                optionToRemove.remove();
            }
        }
    });
});
