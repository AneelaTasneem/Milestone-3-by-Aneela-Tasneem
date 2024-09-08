var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type assertions
    var profilepictureInput = document.getElementById("profilepicture");
    var nameElement = document.getElementById("name");
    var surnameElement = document.getElementById("surname");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilepictureInput && nameElement && surnameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var surname = surnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile picture handling
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        // Resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, " </p>\n            <p><strong>Surname:</strong> ").concat(surname, " </p>\n            <p><strong>Email:</strong> ").concat(email, " </p>\n            <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n            <p><strong>Address:</strong> ").concat(address, " </p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Resume output element is missing");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
