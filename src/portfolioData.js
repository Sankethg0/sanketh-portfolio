export const profile = {
  name: 'Sanketh Gunasekara',
  role: 'Software Engineer | Master of IT Student',
  location: 'Tasmania, Australia',
  summary:
    'Software engineer with 2.4 years of full-stack experience and a Master of Information Technology background at the University of Tasmania. I build practical web, mobile, and cloud-based applications using React, Node.js, AWS, Flutter, Firebase, and modern software engineering practices.',
  email: 'your.email@example.com',
  github: 'https://github.com/your-github-username',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-username',
  resume: '/Sanketh_Gunasekara_Resume.pdf'
};

export const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive UI', 'Flutter', 'UIKit / Swift']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Firebase', 'Firestore', 'MySQL', 'SQLite']
  },
  {
    title: 'Cloud & Tools',
    items: ['AWS', 'GitHub', 'Vercel', 'Firebase Storage', 'Postman', 'VS Code']
  },
  {
    title: 'Software Practices',
    items: ['Agile/Scrum', 'UI/UX Principles', 'Testing', 'Documentation', 'Project Management']
  }
];

export const projects = [
  {
    title: 'QuoteCrafter',
    type: 'Mobile Application',
    description:
      'A cross-platform interior design quoting app that helps users manage houses, rooms, floor/window spaces, product selections, images, and customer quotes.',
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Firebase Storage', 'Provider', 'Dart'],
    highlights: [
      'Created full CRUD flows for houses, rooms, and spaces',
      'Built product selection with category filtering and quote calculation',
      'Added image upload, CSV export, and share functionality'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'GridMind AI',
    type: 'AI / Cloud Platform',
    description:
      'An AI-powered document pre-review platform designed to help technical writers check document readiness before human review.',
    technologies: ['AWS Lambda', 'S3', 'DynamoDB', 'API Gateway', 'Amazon Bedrock', 'React'],
    highlights: [
      'Designed backend upload and analysis workflow using pre-signed S3 URLs',
      'Created job processing flow with DynamoDB status tracking',
      'Integrated AI analysis output including scores and recommended actions'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Seer365 Project Experience',
    type: 'Professional Experience',
    description:
      'Contributed to production software during professional software engineering experience, focusing mainly on frontend development and system integration.',
    technologies: ['React.js', 'Node.js', 'AWS', 'JavaScript'],
    highlights: [
      'Developed and maintained frontend features',
      'Collaborated with engineering team members in a production environment',
      'Worked with cloud-based and full-stack application components'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Mobile App Development Projects',
    type: 'University Projects',
    description:
      'Built mobile applications across Android, iOS, and Flutter as part of Master of IT coursework, focusing on usability, database integration, and clean UI design.',
    technologies: ['Kotlin', 'Swift', 'UIKit', 'Flutter', 'Firebase'],
    highlights: [
      'Implemented native and cross-platform mobile app screens',
      'Applied usability principles and responsive mobile layouts',
      'Used Firebase and local databases for data handling'
    ],
    github: '#',
    demo: '#'
  }
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'One Billion Technology',
    period: '2.4 years',
    points: [
      'Developed frontend features using React.js and JavaScript.',
      'Worked with Node.js and AWS-based application components.',
      'Contributed to full-stack product development and team-based delivery.',
      'Built practical experience in production software, debugging, and system integration.'
    ]
  },
  {
    role: 'Master of Information Technology Student',
    company: 'University of Tasmania',
    period: 'Current',
    points: [
      'Specialising in Software Development and Cybersecurity.',
      'Completed projects in mobile application development, cloud-backed apps, project management, and cybersecurity.',
      'Focused on building job-ready software engineering skills for the Australian technology market.'
    ]
  }
];
