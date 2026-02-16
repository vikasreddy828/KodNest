// Simple client-side router and renderer for Job Notification Tracker routes

(function () {
  var JOBS = [
    {
      id: 1,
      title: "SDE Intern",
      company: "Amazon India",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Java", "Data Structures", "Algorithms", "AWS"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/amazon-sde-intern-bangalore-1",
      description:
        "Work with senior engineers on highly available services used by millions of customers.\nContribute to design discussions and code reviews in a mentored environment.\nYou will write clean, well-tested code and learn Amazon engineering practices.\nIdeal for final-year students with strong CS fundamentals and curiosity.",
    },
    {
      id: 2,
      title: "Graduate Engineer Trainee",
      company: "Infosys",
      location: "Hyderabad",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Spring Boot", "SQL"],
      source: "Naukri",
      postedDaysAgo: 3,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-infosys-graduate-engineer-trainee-hyderabad-2",
      description:
        "Join Infosys as a Graduate Engineer Trainee and work with global clients on enterprise applications.\nYou will be trained on Java, cloud fundamentals, and modern development practices.\nThe role involves coding, basic debugging, and collaborating with senior team members.\nGood communication and willingness to learn are essential.",
    },
    {
      id: 3,
      title: "Frontend Intern",
      company: "Flipkart",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["React", "TypeScript", "CSS"],
      source: "LinkedIn",
      postedDaysAgo: 0,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/flipkart-frontend-intern-bangalore-3",
      description:
        "Work with the consumer web team to build high-performing user experiences.\nImplement responsive UI components using React and TypeScript.\nCollaborate with designers and backend engineers to ship incremental improvements.\nA strong eye for detail and comfort with Git workflows is expected.",
    },
    {
      id: 4,
      title: "Junior Backend Developer",
      company: "Razorpay",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Microservices"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/razorpay-junior-backend-developer-bangalore-4",
      description:
        "Build and maintain backend services that power payment experiences for merchants.\nOwn small services end-to-end with guidance from senior engineers.\nEnsure reliability, observability, and performance of APIs in production.\nComfort with debugging, logging, and incremental refactoring is required.",
    },
    {
      id: 5,
      title: "Data Analyst Intern",
      company: "Swiggy",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Excel", "Python", "Tableau"],
      source: "LinkedIn",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/swiggy-data-analyst-intern-5",
      description:
        "Support the analytics team with dashboards and ad-hoc insights for business stakeholders.\nWork with large datasets to identify patterns in user and partner behaviour.\nPrepare clean, well-documented queries and simple visualizations.\nIdeal for final-year students comfortable with SQL and basic statistics.",
    },
    {
      id: 6,
      title: "QA Intern",
      company: "Zoho",
      location: "Chennai",
      mode: "Onsite",
      experience: "Fresher",
      skills: ["Manual Testing", "Test Cases", "Bug Reporting"],
      source: "Naukri",
      postedDaysAgo: 5,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.naukri.com/job-listings-zoho-qa-intern-chennai-6",
      description:
        "Work with product teams to validate new features across web and mobile.\nCreate, execute, and maintain functional test cases.\nLog clear, reproducible bugs and verify fixes before release.\nAttention to detail and patience with repetitive scenarios are important.",
    },
    {
      id: 7,
      title: "Python Developer (Fresher)",
      company: "Freshworks",
      location: "Chennai",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Python", "Django", "REST APIs"],
      source: "Indeed",
      postedDaysAgo: 1,
      salaryRange: "3–5 LPA",
      applyUrl: "https://in.indeed.com/viewjob-freshworks-python-developer-fresher-7",
      description:
        "Join the engineering team to build and maintain internal tools and microservices.\nWrite clean, testable Python code with guidance from senior developers.\nParticipate in code reviews and follow team coding standards.\nGood understanding of basic web concepts and REST is expected.",
    },
    {
      id: 8,
      title: "Java Developer (0-1)",
      company: "TCS",
      location: "Pune",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Spring", "SQL"],
      source: "Naukri",
      postedDaysAgo: 6,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-tcs-java-developer-pune-8",
      description:
        "Work as part of a project team delivering modules for enterprise clients.\nImplement business logic in Java under the guidance of senior engineers.\nWrite basic unit tests and maintain simple documentation.\nCandidates should be comfortable with object-oriented programming and SQL basics.",
    },
    {
      id: 9,
      title: "React Developer (1-3)",
      company: "CRED",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["React", "TypeScript", "Performance Optimisation"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "10–18 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/cred-react-developer-bangalore-9",
      description:
        "Build and iterate on consumer-facing features with a strong focus on polish.\nCollaborate closely with design to implement accessible and responsive interfaces.\nOptimise bundle size and runtime performance for critical flows.\nPrior experience with modern React patterns and state management is required.",
    },
    {
      id: 10,
      title: "SDE Intern",
      company: "Cognizant",
      location: "Kolkata",
      mode: "Remote",
      experience: "Fresher",
      skills: ["C#", ".NET", "SQL"],
      source: "LinkedIn",
      postedDaysAgo: 7,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/cognizant-sde-intern-kolkata-10",
      description:
        "Assist in building internal line-of-business applications for global clients.\nSupport senior engineers with bug fixes and small enhancements.\nLearn how enterprise change management and reviews work.\nSuited for candidates with good problem-solving and basic C# knowledge.",
    },
    {
      id: 11,
      title: "Graduate Engineer Trainee",
      company: "Capgemini",
      location: "Mumbai",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Cloud Basics", "Git"],
      source: "Naukri",
      postedDaysAgo: 8,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-capgemini-get-mumbai-11",
      description:
        "Start your career on client delivery teams working on digital transformation projects.\nParticipate in structured training on cloud platforms and core Java.\nContribute to implementation tasks with close supervision.\nComfort with learning pace and collaboration across time zones is key.",
    },
    {
      id: 12,
      title: "Frontend Intern",
      company: "PhonePe",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["React", "JavaScript", "Testing"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/phonepe-frontend-intern-12",
      description:
        "Work with senior UI engineers to build high-traffic user journeys.\nWrite modular components and snapshot tests.\nCollaborate closely with product managers on small experiments.\nA solid understanding of JavaScript fundamentals is required.",
    },
    {
      id: 13,
      title: "Data Analyst Intern",
      company: "Paytm",
      location: "Noida",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["SQL", "Excel", "Power BI"],
      source: "Indeed",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://in.indeed.com/viewjob-paytm-data-analyst-intern-13",
      description:
        "Support business teams with recurring reports and simple dashboards.\nWork on campaign performance analysis and cohort views.\nDocument assumptions and communicate clearly with non-technical stakeholders.\nSuitable for candidates comfortable with spreadsheets and basic BI tools.",
    },
    {
      id: 14,
      title: "Junior Backend Developer",
      company: "Juspay",
      location: "Bangalore",
      mode: "Remote",
      experience: "1-3",
      skills: ["Java", "Kotlin", "Distributed Systems"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/juspay-junior-backend-developer-14",
      description:
        "Implement and maintain payment infrastructure components.\nHandle integrations with banks and payment gateways.\nFocus on correctness, observability, and graceful failure modes.\nIdeal for developers who enjoy deep systems and rigorous reviews.",
    },
    {
      id: 15,
      title: "React Developer (1-3)",
      company: "Zoho",
      location: "Chennai",
      mode: "Onsite",
      experience: "1-3",
      skills: ["React", "Redux", "HTML/CSS"],
      source: "Naukri",
      postedDaysAgo: 5,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.naukri.com/job-listings-zoho-react-developer-chennai-15",
      description:
        "Build admin consoles and configuration interfaces for SaaS products.\nWork end-to-end from UI design handoff to implementation.\nHelp keep the UI layer maintainable through refactors.\nClear communication and attention to accessibility are valued.",
    },
    {
      id: 16,
      title: "Python Developer (Fresher)",
      company: "Infosys",
      location: "Mysore",
      mode: "Onsite",
      experience: "Fresher",
      skills: ["Python", "APIs", "Unit Testing"],
      source: "Indeed",
      postedDaysAgo: 9,
      salaryRange: "3–5 LPA",
      applyUrl: "https://in.indeed.com/viewjob-infosys-python-developer-fresher-16",
      description:
        "Join a delivery unit focused on internal automation and tooling.\nImplement simple services and helper scripts in Python.\nWrite basic unit tests and follow coding standards.\nGood debugging skills and curiosity about systems are important.",
    },
    {
      id: 17,
      title: "Java Developer (0-1)",
      company: "Wipro",
      location: "Hyderabad",
      mode: "Hybrid",
      experience: "0-1",
      skills: ["Java", "Spring Boot", "REST"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/wipro-java-developer-hyderabad-17",
      description:
        "Be part of a cross-functional team delivering microservices.\nContribute to coding, code reviews, and documentation.\nLearn containerisation and CI/CD basics on the job.\nIdeal for early-career engineers with strong fundamentals.",
    },
    {
      id: 18,
      title: "SDE Intern",
      company: "Razorpay",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Go", "MySQL", "Microservices"],
      source: "LinkedIn",
      postedDaysAgo: 0,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/razorpay-sde-intern-18",
      description:
        "Work alongside experienced engineers on payment-critical services.\nPick up Go and internal tooling with close mentorship.\nParticipate in on-call shadowing and incident reviews.\nCuriosity and ownership mindset are more important than prior stack experience.",
    },
    {
      id: 19,
      title: "Graduate Engineer Trainee",
      company: "IBM India",
      location: "Pune",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Cloud", "DevOps Basics"],
      source: "Naukri",
      postedDaysAgo: 6,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-ibm-graduate-engineer-trainee-pune-19",
      description:
        "Join IBM consulting teams delivering solutions on cloud platforms.\nWork on configuration, integration, and light development tasks.\nGain exposure to client communication and structured delivery.\nGood analytical skills and adaptability are required.",
    },
    {
      id: 20,
      title: "Junior Backend Developer",
      company: "Oracle",
      location: "Bangalore",
      mode: "Onsite",
      experience: "1-3",
      skills: ["Java", "Oracle DB", "REST"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/oracle-junior-backend-developer-20",
      description:
        "Implement backend components for cloud-based enterprise products.\nWork closely with architects to understand design constraints.\nContribute to performance tuning and query optimisation.\nStrong SQL fundamentals will be helpful in this role.",
    },
    {
      id: 21,
      title: "Frontend Intern",
      company: "Dell Technologies",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["React", "CSS", "Accessibility"],
      source: "Indeed",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://in.indeed.com/viewjob-dell-frontend-intern-21",
      description:
        "Support the web experience team with component library enhancements.\nFix UI bugs and accessibility issues in existing flows.\nLearn corporate engineering practices and documentation.\nAttention to detail and willingness to iterate on feedback are key.",
    },
    {
      id: 22,
      title: "QA Intern",
      company: "Accenture",
      location: "Gurgaon",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Test Planning", "Regression Testing"],
      source: "LinkedIn",
      postedDaysAgo: 5,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/accenture-qa-intern-22",
      description:
        "Work with delivery teams to run regression cycles before releases.\nExecute test scenarios and capture results in standard tools.\nSupport automation engineers by identifying repeatable flows.\nMethodical thinking and thoroughness are critical.",
    },
    {
      id: 23,
      title: "Data Analyst Intern",
      company: "Capgemini",
      location: "Mumbai",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["SQL", "Excel", "Python"],
      source: "Naukri",
      postedDaysAgo: 7,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.naukri.com/job-listings-capgemini-data-analyst-intern-23",
      description:
        "Join analytics pods supporting international clients.\nWork on routine reports and basic ad-hoc analysis.\nDocument assumptions and ensure reproducibility of work.\nComfort with deadlines and multiple stakeholders is important.",
    },
    {
      id: 24,
      title: "React Developer (1-3)",
      company: "Freshworks",
      location: "Chennai",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["React", "TypeScript", "Design Systems"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/freshworks-react-developer-24",
      description:
        "Help evolve and maintain the internal design system across products.\nBuild reusable components and documentation examples.\nCollaborate with designers and product engineers across squads.\nStrong communication and empathy for other developers are valued.",
    },
    {
      id: 25,
      title: "Junior Backend Developer",
      company: "PhonePe",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["Java", "Kotlin", "Kafka"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "10–18 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/phonepe-junior-backend-developer-25",
      description:
        "Work on high-throughput services powering payments and offers.\nCollaborate on design, coding, and production readiness reviews.\nParticipate in on-call rotation with gradual responsibility.\nYou should be comfortable reasoning about distributed systems basics.",
    },
    {
      id: 26,
      title: "SDE Intern",
      company: "Zoho",
      location: "Chennai",
      mode: "Onsite",
      experience: "Fresher",
      skills: ["C++", "Data Structures"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/zoho-sde-intern-26",
      description:
        "Contribute to core product modules under guidance from senior engineers.\nWrite efficient, low-level code with a focus on correctness.\nParticipate in design discussions and internal tech talks.\nIdeal for candidates who enjoy algorithmic thinking and systems work.",
    },
    {
      id: 27,
      title: "Graduate Engineer Trainee",
      company: "Wipro",
      location: "Chennai",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Testing", "SQL"],
      source: "Naukri",
      postedDaysAgo: 8,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-wipro-get-chennai-27",
      description:
        "Start as a generalist across development and testing tracks.\nWork on internal tools and client modules.\nParticipate in structured training and certifications.\nOpen to graduates with strong fundamentals and willingness to relocate.",
    },
    {
      id: 28,
      title: "Python Developer (Fresher)",
      company: "Accenture",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Python", "ETL", "APIs"],
      source: "Indeed",
      postedDaysAgo: 5,
      salaryRange: "3–5 LPA",
      applyUrl: "https://in.indeed.com/viewjob-accenture-python-developer-fresher-28",
      description:
        "Support data engineering teams with pipeline glue code.\nWrite small services and data quality checks.\nFollow coding standards and peer review practices.\nComfortable with reading documentation and working independently on small tasks.",
    },
    {
      id: 29,
      title: "Data Analyst Intern",
      company: "Amazon India",
      location: "Hyderabad",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["SQL", "Redshift", "Excel"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/amazon-data-analyst-intern-29",
      description:
        "Assist with metrics and deep dives for marketplace teams.\nBuild simple datasets and validate data quality.\nDocument assumptions and edge cases clearly.\nStrong ownership and attention to detail will help you succeed.",
    },
    {
      id: 30,
      title: "React Developer (1-3)",
      company: "Flipkart",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["React", "Performance", "Webpack"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "10–18 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/flipkart-react-developer-30",
      description:
        "Optimise performance for key growth journeys on the web platform.\nProfile and fix rendering bottlenecks and bundle issues.\nCollaborate with backend and infra teams on end-to-end improvements.\nIdeal for engineers with a performance-first mindset.",
    },
    // Additional realistic roles from established firms and believable startups
    {
      id: 31,
      title: "SDE Intern",
      company: "CRED",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Node.js", "PostgreSQL", "Kafka"],
      source: "LinkedIn",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/cred-sde-intern-31",
      description:
        "Work with the platform team to maintain internal services.\nPick up production debugging skills with a strong review culture.\nWrite small features and tests under mentorship.\nCuriosity about system behaviour under load is beneficial.",
    },
    {
      id: 32,
      title: "Junior Backend Developer",
      company: "Juspay",
      location: "Remote",
      mode: "Remote",
      experience: "1-3",
      skills: ["Java", "Functional Programming"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.linkedin.com/jobs/view/juspay-junior-backend-developer-32",
      description:
        "Contribute to mission-critical payment systems in a functional stack.\nLearn rigorous engineering practices and deep domain reasoning.\nParticipate in pair programming and design reviews.\nStrong fundamentals and patience with complex problems are needed.",
    },
    {
      id: 33,
      title: "Frontend Intern",
      company: "Razorpay",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["React", "Storybook", "CSS"],
      source: "LinkedIn",
      postedDaysAgo: 6,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/razorpay-frontend-intern-33",
      description:
        "Help maintain the internal design system and documentation.\nImplement UI components and fix issues reported by product teams.\nWrite small visual regression tests.\nSuited for candidates with interest in design systems and UI craft.",
    },
    {
      id: 34,
      title: "Data Analyst Intern",
      company: "Swiggy",
      location: "Hyderabad",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Python", "Dashboards"],
      source: "Indeed",
      postedDaysAgo: 7,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://in.indeed.com/viewjob-swiggy-data-analyst-intern-34",
      description:
        "Support ops teams with weekly performance views and exceptions.\nPrepare clean datasets and reconcile numbers across sources.\nRaise data quality issues with upstream owners.\nGood communication and structured thinking are essential.",
    },
    {
      id: 35,
      title: "Java Developer (0-1)",
      company: "Infosys",
      location: "Pune",
      mode: "Hybrid",
      experience: "0-1",
      skills: ["Java", "Spring Boot", "REST"],
      source: "Naukri",
      postedDaysAgo: 2,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-infosys-java-developer-pune-35",
      description:
        "Work on microservices for banking and insurance clients.\nImplement enhancements and small features.\nParticipate in peer reviews and knowledge-sharing sessions.\nComfortable with reading and understanding large existing codebases.",
    },
    {
      id: 36,
      title: "React Developer (1-3)",
      company: "Zoho",
      location: "Tenkasi",
      mode: "Onsite",
      experience: "1-3",
      skills: ["React", "JavaScript", "HTML/CSS"],
      source: "Naukri",
      postedDaysAgo: 5,
      salaryRange: "6–10 LPA",
      applyUrl: "https://www.naukri.com/job-listings-zoho-react-developer-tenkasi-36",
      description:
        "Build and maintain UI for niche product lines with small teams.\nTake ownership of features from spec to deployment.\nOccasionally collaborate directly with customers on feedback.\nIdeal for developers who like end-to-end responsibility.",
    },
    {
      id: 37,
      title: "SDE Intern",
      company: "Freshworks",
      location: "Chennai",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Java", "Kotlin", "APIs"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.linkedin.com/jobs/view/freshworks-sde-intern-37",
      description:
        "Join product teams to build features on customer-facing modules.\nFix bugs, write tests, and participate in design discussions.\nRotate across smaller projects to gain breadth.\nGood debugging skills and curiosity about product impact are important.",
    },
    {
      id: 38,
      title: "Graduate Engineer Trainee",
      company: "Cognizant",
      location: "Coimbatore",
      mode: "Onsite",
      experience: "0-1",
      skills: ["Java", "Testing", "Documentation"],
      source: "Naukri",
      postedDaysAgo: 9,
      salaryRange: "3–5 LPA",
      applyUrl: "https://www.naukri.com/job-listings-cognizant-get-coimbatore-38",
      description:
        "Be part of long-running engagements in healthcare and finance domains.\nWork across development, testing, and defect triage.\nFollow well-defined processes and documentation standards.\nSuited for candidates who are organised and process-driven.",
    },
    {
      id: 39,
      title: "Python Developer (Fresher)",
      company: "Capgemini",
      location: "Noida",
      mode: "Hybrid",
      experience: "Fresher",
      skills: ["Python", "APIs", "Databases"],
      source: "Indeed",
      postedDaysAgo: 6,
      salaryRange: "3–5 LPA",
      applyUrl: "https://in.indeed.com/viewjob-capgemini-python-developer-fresher-39",
      description:
        "Help implement connectors and small services for integration projects.\nWork closely with senior developers on code reviews.\nWrite simple tests and maintain internal documentation.\nGood problem-solving and openness to feedback are expected.",
    },
    {
      id: 40,
      title: "Data Analyst Intern",
      company: "TCS",
      location: "Delhi",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Excel", "Reporting"],
      source: "Naukri",
      postedDaysAgo: 8,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://www.naukri.com/job-listings-tcs-data-analyst-intern-delhi-40",
      description:
        "Support client teams with scheduled reports and health checks.\nCoordinate data pulls with internal system owners.\nEscalate inconsistencies and document resolutions.\nComfort with repetitive analysis and process improvement is helpful.",
    },
    // Believable startup roles
    {
      id: 41,
      title: "SDE Intern",
      company: "Stacklane Labs",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Node.js", "MongoDB", "React"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://stacklanelabs.example/jobs/sde-intern-41",
      description:
        "Work in a small product team shipping features weekly.\nOwn well-scoped tasks across frontend and backend with mentorship.\nParticipate in standups and async design reviews.\nIdeal for self-driven interns comfortable with ambiguity.",
    },
    {
      id: 42,
      title: "Frontend Intern",
      company: "PixelRiver Technologies",
      location: "Pune",
      mode: "Remote",
      experience: "Fresher",
      skills: ["React", "Tailwind CSS"],
      source: "LinkedIn",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://pixelriver.example/jobs/frontend-intern-42",
      description:
        "Help refine marketing and onboarding flows for a SaaS dashboard.\nWork closely with design on pixel-accurate components.\nShip small improvements and track impact with analytics.\nSuited for candidates who care about visual details.",
    },
    {
      id: 43,
      title: "Junior Backend Developer",
      company: "LedgerLoop",
      location: "Remote",
      mode: "Remote",
      experience: "1-3",
      skills: ["Node.js", "TypeScript", "PostgreSQL"],
      source: "LinkedIn",
      postedDaysAgo: 1,
      salaryRange: "6–10 LPA",
      applyUrl: "https://ledgerloop.example/jobs/junior-backend-43",
      description:
        "Implement core APIs for a B2B billing platform.\nWork with founders to prioritise and ship small iterations.\nParticipate in lightweight RFC discussions.\nComfort with ownership and fast feedback cycles is required.",
    },
    {
      id: 44,
      title: "React Developer (1-3)",
      company: "NimbusStack",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["React", "Redux", "APIs"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "6–10 LPA",
      applyUrl: "https://nimbusstack.example/jobs/react-developer-44",
      description:
        "Build dashboards and configuration screens for a developer tooling product.\nCollaborate with backend and design on clear contracts.\nHelp maintain a shared component library.\nIdeal for engineers who enjoy product thinking.",
    },
    {
      id: 45,
      title: "Data Analyst Intern",
      company: "MetricHive",
      location: "Hyderabad",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Python", "Dashboards"],
      source: "Indeed",
      postedDaysAgo: 5,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://metrichive.example/jobs/data-analyst-intern-45",
      description:
        "Work with customer success teams to measure product adoption.\nPrepare simple cohort analyses and funnel views.\nWrite clear summaries for non-technical stakeholders.\nStrong written communication is valued.",
    },
    {
      id: 46,
      title: "Java Developer (0-1)",
      company: "FlowEdge Systems",
      location: "Chennai",
      mode: "Hybrid",
      experience: "0-1",
      skills: ["Java", "Spring Boot", "REST APIs"],
      source: "LinkedIn",
      postedDaysAgo: 6,
      salaryRange: "3–5 LPA",
      applyUrl: "https://flowedge.example/jobs/java-developer-46",
      description:
        "Help implement backend modules for a logistics optimisation product.\nWork with senior engineers on design and code reviews.\nWrite integration tests for critical workflows.\nCuriosity about operations and reliability is useful.",
    },
    {
      id: 47,
      title: "Python Developer (Fresher)",
      company: "DataSpring",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Python", "Pandas", "APIs"],
      source: "Indeed",
      postedDaysAgo: 1,
      salaryRange: "3–5 LPA",
      applyUrl: "https://dataspring.example/jobs/python-developer-fresher-47",
      description:
        "Build and maintain small services for a reporting pipeline.\nWork with senior engineers to improve performance and stability.\nParticipate in code reviews and documentation.\nIdeal for candidates who like data-heavy applications.",
    },
    {
      id: 48,
      title: "React Developer (1-3)",
      company: "HireCraft",
      location: "Remote",
      mode: "Remote",
      experience: "1-3",
      skills: ["React", "Hooks", "Design Systems"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "6–10 LPA",
      applyUrl: "https://hirecraft.example/jobs/react-developer-48",
      description:
        "Implement recruiter and candidate-facing flows for a hiring SaaS.\nContribute to a shared component library with clear API contracts.\nMeasure UI performance and improve slow paths.\nSuited for engineers who enjoy working closely with product managers.",
    },
    {
      id: 49,
      title: "SDE Intern",
      company: "CloudNest",
      location: "Pune",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Go", "Kubernetes", "APIs"],
      source: "LinkedIn",
      postedDaysAgo: 4,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://cloudnest.example/jobs/sde-intern-49",
      description:
        "Join a small infra team building tools for multi-tenant clusters.\nWork on simple controllers and automation scripts.\nLearn observability and incident response from seniors.\nComfort with reading docs and experimenting is key.",
    },
    {
      id: 50,
      title: "Junior Backend Developer",
      company: "LedgerLoop",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["Node.js", "PostgreSQL", "Queues"],
      source: "LinkedIn",
      postedDaysAgo: 5,
      salaryRange: "6–10 LPA",
      applyUrl: "https://ledgerloop.example/jobs/junior-backend-50",
      description:
        "Extend billing logic and reporting features.\nWork closely with founders to scope small, iterative changes.\nFocus on correctness around money movement.\nStrong testing discipline is appreciated.",
    },
    {
      id: 51,
      title: "Data Analyst Intern",
      company: "PixelRiver Technologies",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Looker Studio"],
      source: "Indeed",
      postedDaysAgo: 6,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://pixelriver.example/jobs/data-analyst-intern-51",
      description:
        "Assist marketing with campaign performance dashboards.\nPrepare standardised reports and simple deep dives.\nCollaborate with engineers to validate data sources.\nGood sense for clear visualisations helps.",
    },
    {
      id: 52,
      title: "Java Developer (0-1)",
      company: "NimbusStack",
      location: "Hyderabad",
      mode: "Hybrid",
      experience: "0-1",
      skills: ["Java", "Spring", "REST APIs"],
      source: "LinkedIn",
      postedDaysAgo: 7,
      salaryRange: "3–5 LPA",
      applyUrl: "https://nimbusstack.example/jobs/java-developer-52",
      description:
        "Implement backend endpoints for an observability product.\nWork with senior engineers on schemas and data flows.\nWrite unit tests and basic integration tests.\nAttention to detail and curiosity about infra tooling are important.",
    },
    {
      id: 53,
      title: "React Developer (1-3)",
      company: "Stacklane Labs",
      location: "Remote",
      mode: "Remote",
      experience: "1-3",
      skills: ["React", "TypeScript", "Charts"],
      source: "LinkedIn",
      postedDaysAgo: 3,
      salaryRange: "6–10 LPA",
      applyUrl: "https://stacklanelabs.example/jobs/react-developer-53",
      description:
        "Build dashboards and reporting views for engineering leaders.\nShape UX for complex, data-heavy screens.\nOwn features end-to-end with founder input.\nIdeal for engineers who enjoy product and UX discussions.",
    },
    {
      id: 54,
      title: "Python Developer (Fresher)",
      company: "MetricHive",
      location: "Chennai",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Python", "ETL", "APIs"],
      source: "Indeed",
      postedDaysAgo: 8,
      salaryRange: "3–5 LPA",
      applyUrl: "https://metrichive.example/jobs/python-developer-fresher-54",
      description:
        "Help maintain ingestion pipelines for SaaS metrics.\nWrite and debug simple connectors.\nDocument edge cases and operational runbooks.\nGood written communication and patience are key.",
    },
    {
      id: 55,
      title: "SDE Intern",
      company: "HireCraft",
      location: "Gurgaon",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Node.js", "React"],
      source: "LinkedIn",
      postedDaysAgo: 2,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://hirecraft.example/jobs/sde-intern-55",
      description:
        "Support the core product squad on recruiter workflows.\nShip small, user-visible changes with close reviews.\nParticipate in user feedback calls occasionally.\nIdeal for interns interested in product thinking.",
    },
    {
      id: 56,
      title: "Junior Backend Developer",
      company: "CloudNest",
      location: "Bangalore",
      mode: "Hybrid",
      experience: "1-3",
      skills: ["Go", "PostgreSQL", "Kubernetes"],
      source: "LinkedIn",
      postedDaysAgo: 4,
      salaryRange: "6–10 LPA",
      applyUrl: "https://cloudnest.example/jobs/junior-backend-56",
      description:
        "Implement features and APIs for a cloud cost management product.\nWork closely with infra engineers on efficient data flows.\nParticipate in performance reviews and cost analyses.\nComfort with distributed systems basics is helpful.",
    },
    {
      id: 57,
      title: "Data Analyst Intern",
      company: "FlowEdge Systems",
      location: "Pune",
      mode: "Remote",
      experience: "Fresher",
      skills: ["SQL", "Python", "Dashboards"],
      source: "Indeed",
      postedDaysAgo: 5,
      salaryRange: "₹15k–₹40k/month Internship",
      applyUrl: "https://flowedge.example/jobs/data-analyst-intern-57",
      description:
        "Assist product and ops with logistics performance metrics.\nMonitor SLAs and highlight anomalies.\nWork closely with engineers to refine data models.\nIdeal for interns who enjoy connecting numbers to operations.",
    },
    {
      id: 58,
      title: "React Developer (1-3)",
      company: "DataSpring",
      location: "Hyderabad",
      mode: "Remote",
      experience: "1-3",
      skills: ["React", "TypeScript", "Data Visualisation"],
      source: "LinkedIn",
      postedDaysAgo: 6,
      salaryRange: "6–10 LPA",
      applyUrl: "https://dataspring.example/jobs/react-developer-58",
      description:
        "Implement reporting and exploration UIs for analytics customers.\nWork with designers on clear, legible data visualisations.\nCollaborate with backend on efficient data contracts.\nSuited for engineers who like working with charts and UX.",
    },
    {
      id: 59,
      title: "Java Developer (0-1)",
      company: "LedgerLoop",
      location: "Chennai",
      mode: "Hybrid",
      experience: "0-1",
      skills: ["Java", "Spring Boot", "Queues"],
      source: "LinkedIn",
      postedDaysAgo: 7,
      salaryRange: "3–5 LPA",
      applyUrl: "https://ledgerloop.example/jobs/java-developer-59",
      description:
        "Work on backend services handling invoices and reconciliation.\nImplement and test smaller flows with careful reviews.\nParticipate in design discussions for new modules.\nAttention to detail and reliability is critical.",
    },
    {
      id: 60,
      title: "Python Developer (Fresher)",
      company: "Stacklane Labs",
      location: "Bangalore",
      mode: "Remote",
      experience: "Fresher",
      skills: ["Python", "FastAPI", "SQL"],
      source: "Indeed",
      postedDaysAgo: 9,
      salaryRange: "3–5 LPA",
      applyUrl: "https://stacklanelabs.example/jobs/python-developer-fresher-60",
      description:
        "Help build internal APIs and automation scripts.\nWork closely with senior engineers on design and reviews.\nWrite tests and basic monitoring hooks.\nIdeal for candidates who like ownership in a small team.",
    },
  ];

  var ROUTES = {
    "/": {
      title: "Stop Missing The Right Jobs.",
      subtitle: "Precision-matched job discovery delivered daily at 9AM.",
      showCta: true,
      showSettings: false,
    },
    "/dashboard": {
      title: "Dashboard",
      subtitle:
        "No jobs yet. In the next step, you will load a realistic dataset.",
      showCta: false,
      showSettings: false,
    },
    "/settings": {
      title: "Settings",
      subtitle: "This section will be built in the next step.",
      showCta: false,
      showSettings: true,
    },
    "/saved": {
      title: "Saved Jobs",
      subtitle:
        "Nothing saved yet. In the next step, you will keep the roles that matter here.",
      showCta: false,
      showSettings: false,
    },
    "/digest": {
      title: "Daily Digest",
      subtitle:
        "No digests yet. In the next step, you will see a calm daily summary here.",
      showCta: false,
      showSettings: false,
    },
    "/proof": {
      title: "Proof Workspace",
      subtitle:
        "This page will collect proof artifacts for your builds in the next step.",
      showCta: false,
      showSettings: false,
    },
  };

  function getPathFromHash() {
    var hash = window.location.hash || "";
    if (!hash || hash === "#/" || hash === "#") {
      return "/";
    }
    // Expect format "#/path"
    return hash.replace(/^#/, "");
  }

  function setHashForPath(path) {
    if (path === "/") {
      window.location.hash = "#/";
    } else {
      window.location.hash = "#" + path;
    }
  }

  function getSavedIds() {
    try {
      var raw = window.localStorage.getItem("kn_saved_jobs");
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return [];
    } catch (e) {
      return [];
    }
  }

  function setSavedIds(ids) {
    try {
      window.localStorage.setItem("kn_saved_jobs", JSON.stringify(ids));
    } catch (e) {
      // ignore
    }
  }

  function formatPostedDays(days) {
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return days + " days ago";
  }

  function applyFilters() {
    var keywordEl = document.getElementById("filter-keyword");
    var locationEl = document.getElementById("filter-location");
    var modeEl = document.getElementById("filter-mode");
    var expEl = document.getElementById("filter-experience");
    var sourceEl = document.getElementById("filter-source");
    var sortEl = document.getElementById("filter-sort");

    var keyword = (keywordEl && keywordEl.value.trim().toLowerCase()) || "";
    var location = (locationEl && locationEl.value) || "";
    var mode = (modeEl && modeEl.value) || "";
    var exp = (expEl && expEl.value) || "";
    var source = (sourceEl && sourceEl.value) || "";
    var sort = (sortEl && sortEl.value) || "latest";

    var filtered = JOBS.filter(function (job) {
      if (keyword) {
        var haystack =
          (job.title + " " + job.company).toLowerCase();
        if (!haystack.includes(keyword)) return false;
      }
      if (location && job.location !== location) return false;
      if (mode && job.mode !== mode) return false;
      if (exp && job.experience !== exp) return false;
      if (source && job.source !== source) return false;
      return true;
    });

    filtered.sort(function (a, b) {
      if (sort === "latest") {
        return a.postedDaysAgo - b.postedDaysAgo;
      }
      if (sort === "oldest") {
        return b.postedDaysAgo - a.postedDaysAgo;
      }
      return 0;
    });

    return filtered;
  }

  function ensureFilterOptions() {
    var locationEl = document.getElementById("filter-location");
    if (!locationEl || locationEl.dataset.initialised === "true") return;

    var locations = Array.from(
      new Set(JOBS.map(function (j) { return j.location; }))
    ).sort();

    locations.forEach(function (loc) {
      var opt = document.createElement("option");
      opt.value = loc;
      opt.textContent = loc;
      locationEl.appendChild(opt);
    });

    locationEl.dataset.initialised = "true";
  }

  function renderJobsList(jobs) {
    var listEl = document.getElementById("job-list");
    var emptyEl = document.getElementById("jobs-empty");
    if (!listEl || !emptyEl) return;

    if (!jobs.length) {
      listEl.innerHTML = "";
      listEl.hidden = true;
      emptyEl.hidden = false;
      return;
    }

    emptyEl.hidden = true;
    listEl.hidden = false;

    var saved = getSavedIds();

    listEl.innerHTML = jobs
      .map(function (job) {
        var isSaved = saved.indexOf(job.id) !== -1;
        return (
          '<article class="kn-job-card" data-job-id="' + job.id + '">' +
          '<div class="kn-job-card__header">' +
          '<div>' +
          '<h3 class="kn-job-card__title">' + job.title + "</h3>" +
          '<p class="kn-job-card__company">' +
          job.company +
          " · " +
          job.location +
          " · " +
          job.mode +
          "</p>" +
          "</div>" +
          '<span class="kn-badge kn-badge--source">' +
          job.source +
          "</span>" +
          "</div>" +
          '<div class="kn-job-card__meta">' +
          "<span>" +
          job.experience +
          " yrs experience</span>" +
          "<span>· " +
          job.salaryRange +
          "</span>" +
          "<span>· " +
          formatPostedDays(job.postedDaysAgo) +
          "</span>" +
          "</div>" +
          '<div class="kn-job-card__footer">' +
          '<span class="kn-job-card__posted">' +
          "</span>" +
          '<div class="kn-job-card__actions">' +
          '<button type="button" class="kn-button kn-button--secondary" data-action="save" data-job-id="' +
          job.id +
          '">' +
          (isSaved ? "Saved" : "Save") +
          "</button>" +
          '<button type="button" class="kn-button kn-button--primary" data-action="apply" data-job-id="' +
          job.id +
          '">Apply</button>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderSavedJobs() {
    var listEl = document.getElementById("job-list");
    var jobsEmptyEl = document.getElementById("jobs-empty");
    var savedEmptyEl = document.getElementById("saved-empty");
    var filterEl = document.getElementById("filter-bar");
    if (!listEl || !jobsEmptyEl || !savedEmptyEl || !filterEl) return;

    filterEl.hidden = true;
    jobsEmptyEl.hidden = true;

    var savedIds = getSavedIds();
    if (!savedIds.length) {
      listEl.hidden = true;
      savedEmptyEl.hidden = false;
      return;
    }

    savedEmptyEl.hidden = true;
    listEl.hidden = false;

    var savedJobs = JOBS.filter(function (job) {
      return savedIds.indexOf(job.id) !== -1;
    });

    renderJobsList(savedJobs);
  }

  function closeModal() {
    var modal = document.getElementById("job-modal");
    if (!modal) return;
    modal.hidden = true;
  }

  function openModal(jobId) {
    var job = JOBS.find(function (j) {
      return j.id === jobId;
    });
    if (!job) return;

    var modal = document.getElementById("job-modal");
    var titleEl = document.getElementById("job-modal-title");
    var companyEl = document.getElementById("job-modal-company");
    var metaEl = document.getElementById("job-modal-meta");
    var descEl = document.getElementById("job-modal-description");
    var skillsEl = document.getElementById("job-modal-skills");

    if (!modal || !titleEl || !companyEl || !metaEl || !descEl || !skillsEl) {
      return;
    }

    titleEl.textContent = job.title;
    companyEl.textContent =
      job.company + " · " + job.location + " · " + job.mode;
    metaEl.textContent =
      job.experience +
      " yrs · " +
      job.salaryRange +
      " · " +
      job.source +
      " · " +
      formatPostedDays(job.postedDaysAgo);
    descEl.textContent = job.description;

    skillsEl.innerHTML = job.skills
      .map(function (s) {
        return '<span class="kn-modal__skill-pill">' + s + "</span>";
      })
      .join("");

    modal.hidden = false;
  }

  function handleJobListClick(evt) {
    var target = evt.target;
    if (!(target instanceof HTMLElement)) return;

    var action = target.getAttribute("data-action");
    var idAttr = target.getAttribute("data-job-id");
    if (!action || !idAttr) return;

    var jobId = parseInt(idAttr, 10);
    if (!jobId) return;

    if (action === "view") {
      openModal(jobId);
      return;
    }

    if (action === "apply") {
      var job = JOBS.find(function (j) {
        return j.id === jobId;
      });
      if (job && job.applyUrl) {
        window.open(job.applyUrl, "_blank", "noopener");
      }
      return;
    }

    if (action === "save") {
      var saved = getSavedIds();
      if (saved.indexOf(jobId) === -1) {
        saved.push(jobId);
        setSavedIds(saved);
      }
      // Re-render current route to update button state
      var path = getPathFromHash();
      updateRoute(path);
    }
  }

  function updateRoute(path) {
    var titleEl = document.getElementById("route-title");
    var subtitleEl = document.getElementById("route-subtitle");
    var ctaEl = document.getElementById("route-cta");
    var settingsEl = document.getElementById("settings-fields");
    var filterEl = document.getElementById("filter-bar");
    var jobsEl = document.getElementById("job-list");
    var jobsEmptyEl = document.getElementById("jobs-empty");
    var savedEmptyEl = document.getElementById("saved-empty");

    // Unknown route → calm 404 state
    if (!ROUTES[path]) {
      if (titleEl) {
        titleEl.textContent = "Page Not Found";
      }
      if (subtitleEl) {
        subtitleEl.textContent =
          "This section does not exist yet. Use the navigation above to continue.";
      }

      var unknownLinks = document.querySelectorAll(".kn-nav__link");
      unknownLinks.forEach(function (link) {
        link.classList.remove("kn-nav__link--active");
      });

      if (ctaEl) {
        ctaEl.hidden = true;
      }
      if (settingsEl) {
        settingsEl.hidden = true;
      }
      if (filterEl) {
        filterEl.hidden = true;
      }
      if (jobsEl) {
        jobsEl.hidden = true;
      }
      if (jobsEmptyEl) {
        jobsEmptyEl.hidden = true;
      }
      if (savedEmptyEl) {
        savedEmptyEl.hidden = true;
      }

      return;
    }

    var config = ROUTES[path];
    if (titleEl) {
      titleEl.textContent = config.title;
    }
    if (subtitleEl) {
      subtitleEl.textContent = config.subtitle;
    }

    if (ctaEl) {
      ctaEl.hidden = !config.showCta;
    }
    if (settingsEl) {
      settingsEl.hidden = !config.showSettings;
    }

    if (filterEl && jobsEl && jobsEmptyEl && savedEmptyEl) {
      if (path === "/dashboard") {
        // Only dashboard shows filters + dataset
        ensureFilterOptions();
        filterEl.hidden = false;
        savedEmptyEl.hidden = true;
        var jobs = applyFilters();
        renderJobsList(jobs);
      } else {
        // All other routes hide filters and job list
        filterEl.hidden = true;
        jobsEl.hidden = true;
        jobsEmptyEl.hidden = true;
        savedEmptyEl.hidden = true;
        jobsEl.innerHTML = "";
      }
    }

    // Update nav active link
    var links = document.querySelectorAll(".kn-nav__link");
    links.forEach(function (link) {
      var route = link.getAttribute("data-route");
      if (route === path) {
        link.classList.add("kn-nav__link--active");
      } else {
        link.classList.remove("kn-nav__link--active");
      }
    });
  }

  function handleNavClick(evt) {
    var link = evt.target.closest(".kn-nav__link");
    if (!link) return;
    evt.preventDefault();
    var route = link.getAttribute("data-route") || "/";
    setHashForPath(route);
  }

  function setupNavToggle() {
    var nav = document.querySelector(".kn-nav");
    var toggle = document.querySelector(".kn-nav__toggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("kn-nav--open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a nav link is selected (on small screens)
    nav.addEventListener("click", function (evt) {
      if (evt.target.closest(".kn-nav__link")) {
        nav.classList.remove("kn-nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  window.addEventListener("hashchange", function () {
    var path = getPathFromHash();
    updateRoute(path);
  });

  window.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".kn-nav");
    if (nav) {
      nav.addEventListener("click", handleNavClick);
    }

    setupNavToggle();

    var listEl = document.getElementById("job-list");
    if (listEl) {
      listEl.addEventListener("click", handleJobListClick);
    }

    var ctaEl = document.getElementById("route-cta");
    if (ctaEl) {
      ctaEl.addEventListener("click", function () {
        setHashForPath("/settings");
      });
    }

    var filterInputs = [
      "filter-keyword",
      "filter-location",
      "filter-mode",
      "filter-experience",
      "filter-source",
      "filter-sort",
    ];
    filterInputs.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var eventName = el.tagName === "INPUT" ? "input" : "change";
      el.addEventListener(eventName, function () {
        var path = getPathFromHash();
        if (path === "/dashboard") {
          var jobs = applyFilters();
          renderJobsList(jobs);
        }
      });
    });

    var initialPath = getPathFromHash();
    updateRoute(initialPath);
  });
})();

