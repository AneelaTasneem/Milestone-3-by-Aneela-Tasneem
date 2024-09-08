document.getElementById('resumeForm')?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Type assertions
    const profilepictureInput = document.getElementById("profilepicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const surnameElement = document.getElementById("surname") as HTMLInputElement; 
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (profilepictureInput && nameElement && surnameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const surname = surnameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Profile picture handling
        const profilepicturefile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

        // Resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong> ${name} </p>
            <p><strong>Surname:</strong> ${surname} </p>
            <p><strong>Email:</strong> ${email} </p>
            <p><strong>Phone Number:</strong> ${phone} </p>
            <p><strong>Address:</strong> ${address} </p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("Resume output element is missing");
        }
    } else {
        console.error("One or more input elements are missing");
    }
});
