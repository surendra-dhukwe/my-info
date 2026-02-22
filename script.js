function downloadResume() {

const resume = document.getElementById("resume");

// Temporarily show resume
resume.style.display = "block";

html2pdf().set({
margin: 0.5,
filename: "Surendra_Dhukwe_Resume.pdf",
html2canvas: { scale: 2 },
jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
}).from(resume).save().then(() => {
    // Hide again after download
    resume.style.display = "none";
});

}