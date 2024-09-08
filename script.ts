// Data for different sections
const resumeData = {
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
function populateSection(sectionId: string, data: string[]): void {
   const section = document.getElementById(sectionId);
   if (section) {
       if (sectionId === 'skills-content') {
           const skillList = data.map(skill => `<li>${skill}</li>`).join('');
           section.innerHTML = `<h2>Skills</h2><ul class="skill-list">${skillList}</ul>`;
       } else {
           const content = data.map(item => `<p>${item}</p>`).join('');
           section.innerHTML = `<h2>${sectionId.replace('-content', '').replace('-', ' ').toUpperCase()}</h2>${content}`;
       }
   }
}

// Function to show the selected section and hide others
function showSection(sectionId: string): void {
   // Hide all sections
   const sections = document.querySelectorAll('.content-section');
   sections.forEach(section => {
       (section as HTMLElement).classList.add('hidden');
   });

   // Show the selected section and populate it with data
   const selectedSection = document.getElementById(sectionId);
   if (selectedSection) {
       (selectedSection as HTMLElement).classList.remove('hidden');
       if (sectionId === 'education-content') {
           populateSection(sectionId, resumeData.education);
       } else if (sectionId === 'skills-content') {
           populateSection(sectionId, resumeData.skills);
       } else if (sectionId === 'work-experience-content') {
           populateSection(sectionId, resumeData.experience);
       }
   }
}

// Event listeners for tabs
document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('education-tab')?.addEventListener('click', () => {
       showSection('education-content');
   });

   document.getElementById('skills-tab')?.addEventListener('click', () => {
       showSection('skills-content');
   });

   document.getElementById('experience-tab')?.addEventListener('click', () => {
       showSection('work-experience-content');
   });

   // Initially display no sections
   document.querySelectorAll('.content-section').forEach(section => {
       (section as HTMLElement).classList.add('hidden');
   });
});

