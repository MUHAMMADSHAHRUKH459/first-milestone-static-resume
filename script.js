// Data for different sections
var resumeData = {
    education: [
        "Founder at Intellibot Creation Generative AI Engineer",
        "Governor Initiative For Artificial Intelligence and Computing 2024"
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "React",
        "Next.js",
        "Python",
        "Node.js",
        "SaaS",
        "Chatbot",
        "Generative AI"
    ],
    experience: [
        "Software Developer at Internee.pk (2022-2023)",
        "Founder & Chatbot Developer at Intellibot Creation (2023-Present)"
    ]
};
// Function to populate a section with data
function populateSection(sectionId, data) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (sectionId === 'skills-content') {
            var skillList = data.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
            section.innerHTML = "<h2>Skills</h2><ul class=\"skill-list\">".concat(skillList, "</ul>");
        }
        else {
            var content = data.map(function (item) { return "<p>".concat(item, "</p>"); }).join('');
            section.innerHTML = "<h2>".concat(sectionId.replace('-content', '').replace('-', ' ').toUpperCase(), "</h2>").concat(content);
        }
    }
}
// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.classList.add('hidden');
    });
    // Show the selected section and populate it with data
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        if (sectionId === 'education-content') {
            populateSection(sectionId, resumeData.education);
        }
        else if (sectionId === 'skills-content') {
            populateSection(sectionId, resumeData.skills);
        }
        else if (sectionId === 'work-experience-content') {
            populateSection(sectionId, resumeData.experience);
        }
    }
}
// Event listeners for tabs
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    (_a = document.getElementById('education-tab')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        showSection('education-content');
    });
    (_b = document.getElementById('skills-tab')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        showSection('skills-content');
    });
    (_c = document.getElementById('experience-tab')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        showSection('work-experience-content');
    });
    // Initially display no sections
    document.querySelectorAll('.content-section').forEach(function (section) {
        section.classList.add('hidden');
    });
});
