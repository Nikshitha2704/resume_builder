document.getElementById("generate-btn").addEventListener("click", function() {
    // Personal Information
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var profileImg = document.getElementById("profile-img").value.trim();

    // Professional Information
    var objective = document.getElementById("objective").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var education = document.getElementById("education").value.trim();

    // Update Profile Preview
    document.getElementById("preview-img").src = profileImg ? profileImg : "default-profile-img.jpg";
    document.getElementById("preview-name").textContent = name ? name : "Your Name";
    document.getElementById("preview-email").textContent = email ? email : "Your Email";
    document.getElementById("preview-phone").textContent = phone ? phone : "Your Phone";
    document.getElementById("preview-address").textContent = address ? address : "Your Address";
    document.getElementById("preview-objective").textContent = objective ? objective : "Your Objective";
    document.getElementById("preview-experience").textContent = experience ? experience : "Your Experience";
    document.getElementById("preview-education").textContent = education ? education : "Your Education";

    // Generate and download resume as PDF
    generatePDF();
});

// Function to generate and download resume as PDF
function generatePDF() {
    var doc = new jsPDF();
    var element = document.getElementById("profile-preview");

    // Use html2canvas to capture the content of the profile-preview div
    html2canvas(element).then((canvas) => {
        var imgData = canvas.toDataURL('image/png');

        // Add image to PDF
        doc.addImage(imgData, 'PNG', 10, 10, 180, 180);

        // Save PDF
        doc.save('resume.pdf');
    });
}

