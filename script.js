// Data for careers
const careerData = {
    "Doctor": {
        "universities": [
            "Harvard Medical School",
            "Johns Hopkins University",
            "Stanford School of Medicine"
        ],
        "companies": [
            "Mayo Clinic",
            "Cleveland Clinic",
            "Medtronic"
        ],
        "highSchoolClasses": [
            "Biology",
            "Chemistry",
            "Health Science"
        ],
        "internships": [
            "Intern at Local Hospital",
            "Medical Research Internship at Johns Hopkins",
            "Intern at Mayo Clinic"
        ]
    },
    "Engineer": {
        "universities": [
            "MIT (Massachusetts Institute of Technology)",
            "Stanford University",
            "California Institute of Technology"
        ],
        "companies": [
            "Tesla",
            "Google",
            "SpaceX"
        ],
        "highSchoolClasses": [
            "Advanced Math",
            "Physics",
            "Computer Science"
        ],
        "internships": [
            "Summer Internship at NASA",
            "Engineering Internship at Google",
            "Tesla Engineering Internship"
        ]
    },
    "Lawyer": {
        "universities": [
            "Harvard Law School",
            "Yale Law School",
            "Stanford Law School"
        ],
        "companies": [
            "Baker McKenzie",
            "Skadden, Arps, Slate, Meagher & Flom",
            "Latham & Watkins"
        ],
        "highSchoolClasses": [
            "Government",
            "English",
            "History"
        ],
        "internships": [
            "Intern at a Law Firm",
            "Clerkship at a local court",
            "Legal Internship at a non-profit"
        ]
    },
    "Pilot": {
        "universities": [
            "Embry-Riddle Aeronautical University",
            "University of North Dakota",
            "Purdue University"
        ],
        "companies": [
            "Delta Airlines",
            "American Airlines",
            "United Airlines"
        ],
        "highSchoolClasses": [
            "Math",
            "Physics",
            "Computer Science"
        ],
        "internships": [
            "Flight training internship",
            "Intern at an aviation company",
            "Airline internship"
        ]
    },
    "NASCAR Driver": {
        "universities": [
            "University of North Carolina",
            "University of Alabama",
            "Auburn University"
        ],
        "companies": [
            "Team Penske",
            "Hendrick Motorsports",
            "Joe Gibbs Racing"
        ],
        "highSchoolClasses": [
            "Engineering",
            "Physics",
            "Auto Mechanics"
        ],
        "internships": [
            "Intern at a race team",
            "Pit crew internship",
            "Car design internship"
        ]
    },
    "Soccer Player": {
        "universities": [
            "University of North Carolina",
            "Stanford University",
            "University of California, Los Angeles"
        ],
        "companies": [
            "FC Barcelona",
            "Real Madrid",
            "Manchester United"
        ],
        "highSchoolClasses": [
            "Physical Education",
            "Health",
            "Sports Science"
        ],
        "internships": [
            "Intern at a local soccer club",
            "Training camp internship",
            "Intern with a professional team"
        ]
    },
    "Scientist": {
        "universities": [
            "Caltech",
            "Princeton University",
            "Oxford University"
        ],
        "companies": [
            "NASA",
            "National Institutes of Health (NIH)",
            "Genentech"
        ],
        "highSchoolClasses": [
            "Biology",
            "Chemistry",
            "Physics"
        ],
        "internships": [
            "Intern at a local laboratory",
            "NASA summer research internship",
            "Genetics research internship"
        ]
    },
    "Marine Biologist": {
        "universities": [
            "University of California, San Diego",
            "University of Miami",
            "University of Washington"
        ],
        "companies": [
            "Woods Hole Oceanographic Institution",
            "National Oceanic and Atmospheric Administration (NOAA)",
            "Marine Conservation Group"
        ],
        "highSchoolClasses": [
            "Biology",
            "Environmental Science",
            "Oceanography"
        ],
        "internships": [
            "Intern with NOAA",
            "Marine research internship",
            "Intern at an ocean conservation organization"
        ]
    },
    "Teacher": {
        "universities": [
            "University of California, Berkeley",
            "Columbia University",
            "University of Michigan"
        ],
        "companies": [
            "Teach for America",
            "Khan Academy",
            "Coursera"
        ],
        "highSchoolClasses": [
            "English",
            "Psychology",
            "History"
        ],
        "internships": [
            "Intern at a local high school",
            "Summer camp teacher internship",
            "Tutor at community center"
        ]
    }
};

// Function to handle the job search
function searchJob() {
    const jobInput = document.getElementById("job-search").value.trim().toLowerCase(); // Convert input to lowercase
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Loop through the career data keys
    const jobFound = Object.keys(careerData).find(job => job.toLowerCase() === jobInput);

    // Check if the job exists in the data
    if (jobFound) {
        const career = careerData[jobFound];

        // Display the job results
        resultsContainer.innerHTML = `
            <h2>Resources for ${jobFound}</h2>
            <h3>Top Universities:</h3>
            <ul>
                ${career.universities.map(university => `<li>${university}</li>`).join('')}
            </ul>
            <h3>Top Companies:</h3>
            <ul>
                ${career.companies.map(company => `<li>${company}</li>`).join('')}
            </ul>
            <h3>Recommended High School Classes:</h3>
            <ul>
                ${career.highSchoolClasses.map(className => `<li>${className}</li>`).join('')}
            </ul>
            <h3>Summer Internships:</h3>
            <ul>
                ${career.internships.map(internship => `<li>${internship}</li>`).join('')}
            </ul>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No resources found for "${jobInput}". Try another job!</p>`;
    }
}
