// Data for various careers
const careerData = {
  "Mechanic": {
    "universities": [
      "Universal Technical Institute",
      "Lincoln Tech",
      "WyoTech"
    ],
    "companies": [
      "Local Auto Repair",
      "Jiffy Lube",
      "Pep Boys"
    ],
    "highSchoolClasses": [
      "Auto Shop",
      "Mechanics",
      "Math"
    ],
    "internships": [
      "Internship at a local repair shop",
      "Auto mechanic apprenticeship",
      "Summer workshop at an auto service center"
    ]
  },
  "Nurse": {
    "universities": [
      "Johns Hopkins School of Nursing",
      "University of Pennsylvania",
      "Duke University"
    ],
    "companies": [
      "Mayo Clinic",
      "Cleveland Clinic",
      "Kaiser Permanente"
    ],
    "highSchoolClasses": [
      "Biology",
      "Chemistry",
      "Health Science"
    ],
    "internships": [
      "Nursing internship at a local hospital",
      "Patient care summer program",
      "Healthcare shadowing program"
    ]
  },
  "Judge": {
    "universities": [
      "Harvard Law School",
      "Yale Law School",
      "Stanford Law School"
    ],
    "companies": [
      "Federal Court",
      "State Court",
      "Local Court"
    ],
    "highSchoolClasses": [
      "Government",
      "History",
      "English"
    ],
    "internships": [
      "Intern at a local courthouse",
      "Judicial internship program",
      "Shadowing a judge"
    ]
  },
  "Police Officer": {
    "universities": [
      "University of California, Irvine (Criminal Justice)",
      "Boston University",
      "FBI Academy (specialized training)"
    ],
    "companies": [
      "Local Police Department",
      "Sheriff's Office",
      "Federal Agencies"
    ],
    "highSchoolClasses": [
      "Physical Education",
      "Criminal Justice",
      "Government"
    ],
    "internships": [
      "Internship with a local police department",
      "Ride-along program",
      "Security internship"
    ]
  },
  "Astronaut": {
    "universities": [
      "MIT",
      "Stanford University",
      "Caltech"
    ],
    "companies": [
      "NASA",
      "SpaceX",
      "Blue Origin"
    ],
    "highSchoolClasses": [
      "Physics",
      "Advanced Math",
      "Computer Science"
    ],
    "internships": [
      "NASA internship",
      "SpaceX summer program",
      "Aerospace research internship"
    ]
  },
  "Firefighter": {
    "universities": [
      "Community College Fire Science Programs",
      "Technical Institute for Fire Training",
      "Local Fire Academy"
    ],
    "companies": [
      "Local Fire Department",
      "Volunteer Fire Department",
      "Federal Fire Service"
    ],
    "highSchoolClasses": [
      "Physical Education",
      "Health Science",
      "Emergency Preparedness"
    ],
    "internships": [
      "Internship with a local fire department",
      "Firefighter training program",
      "Emergency response internship"
    ]
  },
  "Architect": {
    "universities": [
      "Harvard Graduate School of Design",
      "MIT Architecture",
      "Columbia University"
    ],
    "companies": [
      "Gensler",
      "Foster + Partners",
      "Skidmore, Owings & Merrill"
    ],
    "highSchoolClasses": [
      "Art",
      "Mathematics",
      "Computer-Aided Design"
    ],
    "internships": [
      "Internship at an architectural firm",
      "Design internship",
      "Construction internship"
    ]
  },
  "Musician": {
    "universities": [
      "Berklee College of Music",
      "Juilliard",
      "USC Thornton School of Music"
    ],
    "companies": [
      "Local Orchestra",
      "Recording Studio",
      "Music Production Company"
    ],
    "highSchoolClasses": [
      "Music",
      "Art",
      "Drama"
    ],
    "internships": [
      "Intern at a local radio station",
      "Music studio internship",
      "Performance internship"
    ]
  },
  "Chef": {
    "universities": [
      "Culinary Institute of America",
      "Le Cordon Bleu",
      "Johnson & Wales University"
    ],
    "companies": [
      "Local Restaurant",
      "Catering Company",
      "Hotel Chain"
    ],
    "highSchoolClasses": [
      "Home Economics",
      "Chemistry",
      "Business"
    ],
    "internships": [
      "Restaurant internship",
      "Culinary apprenticeship",
      "Food service internship"
    ]
  },
  "Carpenter": {
    "universities": [
      "Construction Trade Schools",
      "Community College Carpentry Programs",
      "Apprenticeship Programs"
    ],
    "companies": [
      "Local Construction Company",
      "Home Renovation Firms",
      "Custom Furniture Makers"
    ],
    "highSchoolClasses": [
      "Shop Class",
      "Woodworking",
      "Math"
    ],
    "internships": [
      "Carpentry apprenticeship",
      "Internship with a construction firm",
      "Workshop training"
    ]
  },
  "Author": {
    "universities": [
      "Iowa Writers' Workshop",
      "Columbia University",
      "University of Iowa"
    ],
    "companies": [
      "Publishing House",
      "Literary Agency",
      "Freelance"
    ],
    "highSchoolClasses": [
      "English",
      "Creative Writing",
      "History"
    ],
    "internships": [
      "Publishing house internship",
      "Literary magazine internship",
      "Book editing internship"
    ]
  },
  "Animator": {
    "universities": [
      "CalArts",
      "Savannah College of Art and Design",
      "Ringling College of Art and Design"
    ],
    "companies": [
      "Pixar",
      "DreamWorks Animation",
      "Walt Disney Animation"
    ],
    "highSchoolClasses": [
      "Art",
      "Computer Graphics",
      "Design"
    ],
    "internships": [
      "Animation studio internship",
      "Digital art internship",
      "Storyboard internship"
    ]
  },
  "Director": {
    "universities": [
      "USC School of Cinematic Arts",
      "NYU Tisch School",
      "UCLA School of Theater, Film and Television"
    ],
    "companies": [
      "Hollywood Studios",
      "Independent Film Production",
      "Television Networks"
    ],
    "highSchoolClasses": [
      "Film",
      "Theater",
      "English"
    ],
    "internships": [
      "Film set internship",
      "Production assistant program",
      "Directing workshop"
    ]
  },
  "Game Tester": {
    "universities": [
      "DigiPen Institute of Technology",
      "University of Utah (Game Design)",
      "Rochester Institute of Technology"
    ],
    "companies": [
      "Electronic Arts",
      "Ubisoft",
      "Activision Blizzard"
    ],
    "highSchoolClasses": [
      "Computer Science",
      "Mathematics",
      "Digital Media"
    ],
    "internships": [
      "Game testing internship",
      "Quality assurance internship",
      "Video game development internship"
    ]
  },
  "Actor": {
    "universities": [
      "Juilliard",
      "New York Film Academy",
      "USC School of Dramatic Arts"
    ],
    "companies": [
      "Broadway Productions",
      "Hollywood Studios",
      "Television Networks"
    ],
    "highSchoolClasses": [
      "Theater",
      "Drama",
      "English"
    ],
    "internships": [
      "Local theater internship",
      "Film set internship",
      "Acting workshop"
    ]
  },
  "Baker": {
    "universities": [
      "Culinary Institute of America",
      "Le Cordon Bleu",
      "Local Community College Programs"
    ],
    "companies": [
      "Local Bakery",
      "Restaurant Chain",
      "Food Production Company"
    ],
    "highSchoolClasses": [
      "Home Economics",
      "Business",
      "Chemistry"
    ],
    "internships": [
      "Bakery internship",
      "Food production internship",
      "Culinary apprenticeship"
    ]
  },
  "Zookeeper": {
    "universities": [
      "University of Wisconsin-Madison (Zoo Studies)",
      "Lincoln Park Zoo Programs",
      "Arizona State University (Wildlife)"
    ],
    "companies": [
      "Local Zoo",
      "Wildlife Park",
      "Animal Rescue Organizations"
    ],
    "highSchoolClasses": [
      "Biology",
      "Environmental Science",
      "Physical Education"
    ],
    "internships": [
      "Internship at a local zoo",
      "Wildlife conservation internship",
      "Animal care internship"
    ]
  },
  "Interior Designer": {
    "universities": [
      "Rhode Island School of Design",
      "Savannah College of Art and Design",
      "Parsons School of Design"
    ],
    "companies": [
      "Interior Design Firms",
      "Architectural Firms",
      "Freelance"
    ],
    "highSchoolClasses": [
      "Art",
      "Design",
      "Computer-Aided Design"
    ],
    "internships": [
      "Interior design internship",
      "Design firm internship",
      "Staging internship"
    ]
  },
  "Veterinarian": {
    "universities": [
      "Cornell University College of Veterinary Medicine",
      "University of California, Davis",
      "Colorado State University"
    ],
    "companies": [
      "Animal Hospitals",
      "Veterinary Clinics",
      "Research Institutions"
    ],
    "highSchoolClasses": [
      "Biology",
      "Chemistry",
      "Animal Science"
    ],
    "internships": [
      "Veterinary clinic internship",
      "Animal hospital internship",
      "Wildlife rehabilitation internship"
    ]
  },
  "Therapist (Physical)": {
    "universities": [
      "University of Southern California",
      "University of Pittsburgh",
      "University of Delaware"
    ],
    "companies": [
      "Rehabilitation Centers",
      "Hospitals",
      "Private Practices"
    ],
    "highSchoolClasses": [
      "Biology",
      "Health Science",
      "Psychology"
    ],
    "internships": [
      "Physical therapy internship",
      "Rehabilitation internship",
      "Patient care internship"
    ]
  },
  "Psychologist": {
    "universities": [
      "Stanford University",
      "University of California, Berkeley",
      "Harvard University"
    ],
    "companies": [
      "Mental Health Clinics",
      "Hospitals",
      "Research Institutions"
    ],
    "highSchoolClasses": [
      "Psychology",
      "Biology",
      "English"
    ],
    "internships": [
      "Psychology research internship",
      "Counseling internship",
      "Clinical internship"
    ]
  },
  "Electrician": {
    "universities": [
      "Technical Trade Schools",
      "Community College Electrical Programs",
      "Apprenticeship Programs"
    ],
    "companies": [
      "Local Electrical Contractors",
      "Utility Companies",
      "Construction Firms"
    ],
    "highSchoolClasses": [
      "Physics",
      "Math",
      "Technical Drawing"
    ],
    "internships": [
      "Electrical apprenticeship",
      "Contractor internship",
      "Utility internship"
    ]
  },
  "Construction Worker": {
    "universities": [
      "Community College Construction Programs",
      "Technical Trade Schools",
      "Apprenticeship Programs"
    ],
    "companies": [
      "Local Construction Companies",
      "Contractors",
      "Renovation Firms"
    ],
    "highSchoolClasses": [
      "Shop Class",
      "Mathematics",
      "Technical Drawing"
    ],
    "internships": [
      "Construction internship",
      "On-site internship",
      "Contractor apprenticeship"
    ]
  },
  "Programmer": {
    "universities": [
      "MIT",
      "Stanford University",
      "Carnegie Mellon University"
    ],
    "companies": [
      "Google",
      "Microsoft",
      "Apple"
    ],
    "highSchoolClasses": [
      "Computer Science",
      "Mathematics",
      "Physics"
    ],
    "internships": [
      "Software development internship",
      "Tech startup internship",
      "Coding bootcamp internship"
    ]
  },
  "Real Estate Agent": {
    "universities": [
      "University of Southern California",
      "University of Texas",
      "University of Pennsylvania"
    ],
    "companies": [
      "Real Estate Firms",
      "Property Management Companies",
      "Brokerages"
    ],
    "highSchoolClasses": [
      "Economics",
      "Business",
      "Government"
    ],
    "internships": [
      "Real estate internship",
      "Property management internship",
      "Brokerage internship"
    ]
  },
  "Dietician": {
    "universities": [
      "Cornell University",
      "University of California, Davis",
      "University of North Carolina"
    ],
    "companies": [
      "Hospitals",
      "Wellness Centers",
      "Food Service Companies"
    ],
    "highSchoolClasses": [
      "Biology",
      "Chemistry",
      "Health Science"
    ],
    "internships": [
      "Dietician internship",
      "Nutrition research internship",
      "Wellness center internship"
    ]
  },
  "Detective": {
    "universities": [
      "University of California, Irvine (Criminal Justice)",
      "FBI Academy (specialized training)",
      "Boston University"
    ],
    "companies": [
      "Local Police Departments",
      "Sheriff's Offices",
      "Federal Agencies"
    ],
    "highSchoolClasses": [
      "Criminal Justice",
      "Government",
      "English"
    ],
    "internships": [
      "Internship with a local PD",
      "Investigative internship",
      "Criminal justice internship"
    ]
  },
  "Rocket Scientist": {
    "universities": [
      "Caltech",
      "MIT",
      "Stanford University"
    ],
    "companies": [
      "NASA",
      "SpaceX",
      "Blue Origin"
    ],
    "highSchoolClasses": [
      "Physics",
      "Advanced Math",
      "Computer Science"
    ],
    "internships": [
      "NASA internship",
      "SpaceX internship",
      "Aerospace research internship"
    ]
  },
  "Surgeon": {
    "universities": [
      "Harvard Medical School",
      "Johns Hopkins University",
      "Stanford School of Medicine"
    ],
    "companies": [
      "Mayo Clinic",
      "Cleveland Clinic",
      "Massachusetts General Hospital"
    ],
    "highSchoolClasses": [
      "Biology",
      "Chemistry",
      "Health Science"
    ],
    "internships": [
      "Surgical internship",
      "Hospital internship",
      "Medical research internship"
    ]
  },
  "Anesthesiologist": {
    "universities": [
      "Duke University",
      "Johns Hopkins University",
      "University of Pennsylvania"
    ],
    "companies": [
      "Local Hospitals",
      "Medical Centers",
      "Surgical Centers"
    ],
    "highSchoolClasses": [
      "Biology",
      "Chemistry",
      "Health Science"
    ],
    "internships": [
      "Hospital internship",
      "Medical assistant internship",
      "Anesthesia research internship"
    ]
  },
  "Chemist": {
    "universities": [
      "MIT",
      "Stanford University",
      "University of California, Berkeley"
    ],
    "companies": [
      "Pharmaceutical Companies",
      "Research Labs",
      "Chemical Manufacturers"
    ],
    "highSchoolClasses": [
      "Chemistry",
      "Biology",
      "Mathematics"
    ],
    "internships": [
      "Lab research internship",
      "Chemical industry internship",
      "University research internship"
    ]
  },
  "Government Official/Politician": {
    "universities": [
      "Harvard University",
      "Yale University",
      "Georgetown University"
    ],
    "companies": [
      "Local Government",
      "State Government",
      "Federal Agencies"
    ],
    "highSchoolClasses": [
      "Government",
      "History",
      "English"
    ],
    "internships": [
      "Government internship",
      "Political campaign internship",
      "Public policy internship"
    ]
  },
  "Journalist": {
    "universities": [
      "Columbia University",
      "Northwestern University",
      "University of Missouri"
    ],
    "companies": [
      "News Agencies",
      "Broadcast Networks",
      "Newspapers"
    ],
    "highSchoolClasses": [
      "English",
      "History",
      "Social Studies"
    ],
    "internships": [
      "Newspaper internship",
      "Broadcast internship",
      "Media internship"
    ]
  },
  "CEO/CFO": {
    "universities": [
      "Harvard Business School",
      "Wharton School at UPenn",
      "Stanford Graduate School of Business"
    ],
    "companies": [
      "Fortune 500 Companies",
      "Global Corporations",
      "Multinational Firms"
    ],
    "highSchoolClasses": [
      "Economics",
      "Business",
      "Mathematics"
    ],
    "internships": [
      "Corporate internship",
      "Business leadership internship",
      "Management internship"
    ]
  },
  "Manager": {
    "universities": [
      "MIT Sloan",
      "Harvard Business School",
      "INSEAD"
    ],
    "companies": [
      "Fortune 500 Companies",
      "Large Corporations",
      "Tech Companies"
    ],
    "highSchoolClasses": [
      "Business",
      "Economics",
      "Mathematics"
    ],
    "internships": [
      "Management internship",
      "Business administration internship",
      "Corporate internship"
    ]
  },
  "Historian": {
    "universities": [
      "Harvard University",
      "Yale University",
      "Princeton University"
    ],
    "companies": [
      "Museums",
      "Historical Societies",
      "Research Institutions"
    ],
    "highSchoolClasses": [
      "History",
      "English",
      "Social Studies"
    ],
    "internships": [
      "Museum internship",
      "Historical research internship",
      "Archives internship"
    ]
  },
  "Photographer": {
    "universities": [
      "Rhode Island School of Design",
      "School of Visual Arts",
      "Parsons School of Design"
    ],
    "companies": [
      "Photography Studios",
      "Media Companies",
      "Freelance"
    ],
    "highSchoolClasses": [
      "Art",
      "Photography",
      "Design"
    ],
    "internships": [
      "Photography internship",
      "Media internship",
      "Studio internship"
    ]
  },
  "Videographer": {
    "universities": [
      "University of Southern California",
      "New York University",
      "Columbia University"
    ],
    "companies": [
      "Film Production Companies",
      "Broadcast Networks",
      "Media Agencies"
    ],
    "highSchoolClasses": [
      "Film",
      "Media Studies",
      "English"
    ],
    "internships": [
      "Video production internship",
      "Media internship",
      "Film set internship"
    ]
  },
  "Principal": {
    "universities": [
      "Harvard University",
      "Columbia University",
      "University of Pennsylvania"
    ],
    "companies": [
      "School Districts",
      "Educational Institutions",
      "Private Schools"
    ],
    "highSchoolClasses": [
      "Education",
      "Psychology",
      "Government"
    ],
    "internships": [
      "School administration internship",
      "Educational leadership internship",
      "Principal shadowing"
    ]
  },
  "Athletic Coach": {
    "universities": [
      "University of Michigan",
      "University of Florida",
      "Ohio State University"
    ],
    "companies": [
      "College Athletic Departments",
      "Professional Sports Teams",
      "High School Sports Programs"
    ],
    "highSchoolClasses": [
      "Physical Education",
      "Health",
      "Business"
    ],
    "internships": [
      "Coaching internship",
      "Sports management internship",
      "Athletic training internship"
    ]
  },
  "Fashion Designer": {
    "universities": [
      "Parsons School of Design",
      "Fashion Institute of Technology",
      "Rhode Island School of Design"
    ],
    "companies": [
      "Fashion Houses",
      "Retail Brands",
      "Design Studios"
    ],
    "highSchoolClasses": [
      "Art",
      "Design",
      "Business"
    ],
    "internships": [
      "Fashion design internship",
      "Retail internship",
      "Design studio internship"
    ]
  }
};

// Function to handle the case-insensitive job search
function searchJob() {
  const jobInput = document
    .getElementById("job-search")
    .value.trim()
    .toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const jobFound = Object.keys(careerData).find(
    (job) => job.toLowerCase() === jobInput
  );

  if (jobFound) {
    const career = careerData[jobFound];
    resultsContainer.innerHTML = `
      <h2>Resources for ${jobFound}</h2>
      <h3>Top Universities:</h3>
      <ul>
        ${career.universities.map((u) => `<li>${u}</li>`).join("")}
      </ul>
      <h3>Top Companies/Organizations:</h3>
      <ul>
        ${career.companies.map((c) => `<li>${c}</li>`).join("")}
      </ul>
      <h3>Recommended High School Classes:</h3>
      <ul>
        ${career.highSchoolClasses.map((cls) => `<li>${cls}</li>`).join("")}
      </ul>
      <h3>Internship/Apprenticeship Opportunities:</h3>
      <ul>
        ${career.internships.map((i) => `<li>${i}</li>`).join("")}
      </ul>
    `;
  } else {
    resultsContainer.innerHTML = `<p>No resources found for "${jobInput}". Please try another career.</p>`;
  }
}
