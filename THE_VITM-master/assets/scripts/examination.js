// Define the structure for each course with respective years and total semesters
const courseStructure = {
    "btech": { years: 4, semesters: 8 },
    "bca": { years: 3, semesters: 6 },
    "mba": { years: 2, semesters: 4 },
    "mtech": { years: 3, semesters: 6 }
};

const courseSelect = document.getElementById('course');
const yearSelect = document.getElementById('year');
const semesterSelect = document.getElementById('semester');

// Update year options based on selected course
function updateYearOptions() {
    const selectedCourse = courseSelect.value;

    // Clear previous year and semester options
    yearSelect.innerHTML = '<option value="">Select Year</option>';
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';

    if (selectedCourse && courseStructure[selectedCourse]) {
        const { years } = courseStructure[selectedCourse];

        // Populate year options
        for (let i = 1; i <= years; i++) {
            const yearOption = document.createElement('option');
            yearOption.value = i;
            yearOption.textContent = `${i}${getOrdinalSuffix(i)} Year`;
            yearSelect.appendChild(yearOption);
        }
    }
}

// Update semester options based on selected year
function updateSemesterOptions() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedCourse = courseSelect.value;

    // Clear previous semester options
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';

    if (selectedYear && courseStructure[selectedCourse]) {
        // Each year has two semesters: (year * 2 - 1) and (year * 2)
        const startSemester = (selectedYear - 1) * 2 + 1;
        const endSemester = startSemester + 1;

        // Populate semester options for the selected year
        for (let i = startSemester; i <= endSemester; i++) {
            const semesterOption = document.createElement('option');
            semesterOption.value = i;
            semesterOption.textContent = `${i}${getOrdinalSuffix(i)} Semester`;
            semesterSelect.appendChild(semesterOption);
        }
    }
}

// Helper function to get ordinal suffix (e.g., 1st, 2nd)
function getOrdinalSuffix(n) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = n % 100;
    return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
}

// Event listeners for course and year selection changes
courseSelect.addEventListener('change', updateYearOptions);
yearSelect.addEventListener('change', updateSemesterOptions);



// Examination data
const examination_list = [
    { exam_title: "BTech Semester Exam - Fall 2024", exam_description: "The BTech Fall 2024 semester exams will begin on November 15, 2024. The detailed timetable is available on the examination portal. Students are advised to prepare accordingly.", exam_release_date: "01-10-2024", exam_release_by: "Examination Office", exam_file_id: "exam001", exam_id: "exm-0001" },
    { exam_title: "MTech Comprehensive Exam Schedule 2024", exam_description: "The MTech comprehensive exams for 2024 are scheduled for December 1-15. Exam schedules are posted on the examination section. Be prepared to demonstrate all coursework mastery.", exam_release_date: "15-11-2024", exam_release_by: "Examination Office", exam_file_id: "exam002", exam_id: "exm-0002" },
    { exam_title: "MBA Mid-Term Exam - Winter 2024", exam_description: "The mid-term exams for MBA students will start on January 10, 2024. The schedule is available under the MBA examination tab. Review all syllabus topics to succeed.", exam_release_date: "20-12-2023", exam_release_by: "Examination Office", exam_file_id: "exam003", exam_id: "exm-0003" },
    { exam_title: "BCA Annual Exam Schedule 2024", exam_description: "The BCA 2024 annual exams are set to start from March 15, 2024. Access the timetable through the student portal. Ensure all topics are covered for optimal preparation.", exam_release_date: "15-02-2024", exam_release_by: "Examination Office", exam_file_id: "exam004", exam_id: "exm-0004" },
    { exam_title: "Supplementary Exam Notice - All Courses", exam_description: "Supplementary exams for all courses (BTech, MTech, MBA, BCA) will be conducted from August 5, 2024, for students needing retakes. Registration closes on July 20.", exam_release_date: "10-07-2024", exam_release_by: "Examination Office", exam_file_id: "exam005", exam_id: "exm-0005" },
    { exam_title: "MBA Comprehensive Exam - April 2024", exam_description: "MBA students will have their final comprehensive exams from April 20 to April 30, 2024. Ensure familiarity with key topics in business management and finance.", exam_release_date: "01-04-2024", exam_release_by: "Examination Office", exam_file_id: "exam006", exam_id: "exm-0006" },
    { exam_title: "BTech Project Defense Exam 2024", exam_description: "BTech final-year students are scheduled for project defense exams from May 1-5, 2024. Submit your project reports by April 25, and prepare for the defense session.", exam_release_date: "15-04-2024", exam_release_by: "Examination Office", exam_file_id: "exam007", exam_id: "exm-0007" },
    { exam_title: "BCA Practical Exams - June 2024", exam_description: "BCA students will have practical exams scheduled for June 10-20, 2024. Ensure all lab work is up to date, as practical skill demonstrations will be assessed.", exam_release_date: "25-05-2024", exam_release_by: "Examination Office", exam_file_id: "exam008", exam_id: "exm-0008" },
    { exam_title: "MTech Viva Voce Exam - July 2024", exam_description: "MTech viva exams will be conducted between July 15-20, 2024. Prepare for in-depth discussions on thesis topics and related research areas.", exam_release_date: "01-07-2024", exam_release_by: "Examination Office", exam_file_id: "exam009", exam_id: "exm-0009" },
    { exam_title: "Semester End Exam - All Courses (BTech, MTech, MBA, BCA)", exam_description: "End-semester exams for all courses will begin on December 5, 2024. Access the detailed timetable on the college examination page.", exam_release_date: "10-11-2024", exam_release_by: "Examination Office", exam_file_id: "exam010", exam_id: "exm-0010" }
];

// Populate the dropdown on page load
window.onload = function() {
    const select = document.getElementById("exam-select");
    examination_list.forEach(exam => {
        const option = document.createElement("option");
        option.value = exam.exam_id;
        option.textContent = exam.exam_title;
        select.appendChild(option);
    });
};

// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById("exam-dropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}


// Display details of the selected exam
        function displayExamDetails() {
            const selectedExamId = document.getElementById("exam-select").value;
            const detailsDiv = document.getElementById("exam-details");
            detailsDiv.innerHTML = ""; // Clear previous content

            if (selectedExamId) {
                const exam = examination_list.find(e => e.exam_id === selectedExamId);
                if (exam) {
                    detailsDiv.innerHTML = `
                        <p><strong>Title:</strong> ${exam.exam_title}</p>
                        <p><strong>Description:</strong> ${exam.exam_description}</p>
                        <p><strong>Release Date:</strong> ${exam.exam_release_date}</p>
                        <p><strong>Released By:</strong> ${exam.exam_release_by}</p>
                    `;
                }
            }
        }



      
        

// Guidelines data
const examination_guidelines = [
    "Arrive at least 30 minutes before the exam starts.",
    "Carry your student ID and hall ticket for verification.",
    "Electronic devices, including mobile phones and smartwatches, are not allowed.",
    "Only transparent water bottles are permitted in the examination hall.",
    "Use only the assigned seating as per the seating chart.",
    "Maintain silence and follow the instructions of the invigilator at all times."
];

// Populate the exam dropdown on page load
window.onload = function() {
    const select = document.getElementById("exam-select");
    examination_list.forEach(exam => {
        const option = document.createElement("option");
        option.value = exam.exam_id;
        option.textContent = exam.exam_title;
        select.appendChild(option);
    });
};

// Toggle dropdown visibility
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";

    if (id === "guidelines-dropdown") {
        populateGuidelines();
    }
}

// Display details of the selected exam
function displayExamDetails() {
    const selectedExamId = document.getElementById("exam-select").value;
    const detailsDiv = document.getElementById("exam-details");
    detailsDiv.innerHTML = ""; // Clear previous content

    if (selectedExamId) {
        const exam = examination_list.find(e => e.exam_id === selectedExamId);
        if (exam) {
            detailsDiv.innerHTML = `
                <p><strong>Title:</strong> ${exam.exam_title}</p>
                <p><strong>Description:</strong> ${exam.exam_description}</p>
                <p><strong>Release Date:</strong> ${exam.exam_release_date}</p>
                <p><strong>Released By:</strong> ${exam.exam_release_by}</p>
            `;
        }
    }
}
