export const testPreparationData = [
  {
    id: "IELTS",
    overview:
      "The International English Language Testing System (IELTS) is a widely recognized English proficiency test. It was first introduced in 1980 and has since become one of the most popular English language tests worldwide.  \n The test is designed to assess an individual’s ability to understand and use the English language in academic and general contexts.",
    testFormat: [
      [
        "Test Section",
        "Time Allocation",
        "Total No. of Questions",
        "Item Types",
      ],
      [
        "Listening",
        "30 minutes",
        "40 items",
        [
          "Multiple Choice, Matching, Plan/Map/Diagram Labeling",
          "Form/Narrative/Note/Flowchart/Summary Completion",
          "Sentence Completion",
        ],
      ],
      [
        "Reading",
        "60 minutes",
        "40 items",
        [
          "Multiple Choice, Matching, Plan/Map/Diagram Labeling",
          "Summary/Idea/Information/Opinion Completion",
          "True/False/, Yes/No",
          "Sentence/Summary/Note/Table/Flowchart/Matching",
          "Diagram/Chart/Graph/Figure Classification",
        ],
      ],
      [
        "Writing",
        "60 minutes",
        "1 task",
        [
          "Task 1: Graph/Table/Chart/Diagram Description",
          "Task 2: Essay Writing",
        ],
      ],
      [
        "Speaking",
        "30 minutes",
        "40 items",
        [
          "Part 1: Introduction and Interview",
          "Part 2: Individual Long Turn (Cue card)",
          "Part 3: Two-way Discussion",
        ],
      ],
    ],
    faq: [
      {
        ques: "What skills are tested in Listening?",
        ans: [
          "Locating and understanding specific information.",
          "Recognizing the writer’s opinions and attitudes.",
          "Understanding the logical structure of a text.",
        ],
      },
      {
        ques: "What skills are tested in Reading?",
        ans: [
          "Locating and understanding specific information.",
          "Recognizing the writer’s opinions and attitudes.",
          "Understanding the logical structure of a text.",
        ],
      },
      {
        ques: "What skills are tested in Writing?",
        ans: [
          "Describing, summarizing, or explaining visual information   (graphs, charts, and diagrams)",
          "Presenting a written argument or opinion on a given topic",
          "Understanding the logical structure of a text.",
        ],
      },
      {
        ques: "What skills are tested in Speaking?",
        ans: [
          "Fluency and coherence",
          "Lexical resource (vocabulary usage)",
          "Grammatical range and accuracy",
          "Pronunciation",
        ],
      },
    ],
    register: [
      "First, find an authorized IELTS test center near you.",
      "Then, choose a convenient test date from the available options.",
      "Complete the registration process online or in person, providing your personal details and selecting the test type (Academic or General Training).",
      "Pay the required test fee, and you will receive a confirmation email with your test details.",
      "Prepare for the test by familiarizing yourself with the format and practicing sample questions.",
      "On the test day, arrive early at the designated test center with your identification document.",
    ],
  },
  {
    scoreScale: [
      ["Band Score", "Level of Proficiency"],
      ["9", "Expert user"],
      ["8", "Very good user"],
      ["7", "Good user "],
      ["5", "Modest user"],
      ["4", "Limited user"],
      ["2", "Intermittent user"],
      ["1", "Non-user"],
      ["0", "Did not attempt the test"],
    ],
  },
  {
    id: "PTE",
    overview:
      "Korean, spoken by 77 million people in South Korea, uses the Hangul alphabet created in the 15th century. It has a subject-object-verb structure, grammatical particles, and a complex honorific system. Its vocabulary includes native, Sino-Korean, and English loanwords. The Seoul dialect is standard in South Korea, with regional variations. Respect and hierarchy are key cultural aspects, celebrated on Hangul Day every October 9th. Learners use resources like the TOPIK test, university courses, and online platforms.",
    testFormat: [
      ["Part", "Item Types", "Total No. of Questions"],
      [
        "Part 1: Speaking",
        [
          "Personal Introduction (unscored)",
          "Read Aloud",
          "Repeat Sentence",
          "Describe Image",
          "Re-tell Lecture",
          "Answer Short Questions",
        ],
        
        ["1", "6-7", "10-12", "3-4", "1-2", "5-6"],
      ],
      [
        "Part 2: Writing",
        ["Summarize Written Text", "Write Essay"],

        ["1-2", "1-2"],
      ],
      [
        "Part 3: Reading",
        [
          "Multiple-Choice: Single Option",
          "Multiple-Choice: Multiple Options",
          "Re-order Paragraphs",
          "Reading: Fill in the Blanks(drag and drop)",
          "Reading and Writing: Fill in the Blanks(drop-down list)",
        ],

        ["1-2", "1-2", "2-3", "4-5", "5-6"],
      ],
      [
        "Part 4: Listening",
        [
          "Summarize Spoken Test",
          "Multiple-Choice: Multiple Options",
          "Fill in the Blanks",
          "Highlight Correct Summary",
          "Multiple-choice: Single Option",
          "Select Missing Word",
          "Highlight Incorrect Words",
          "Write from Dictation",
        ],

        ["1-2", "1-2", "2-3", "1-2", "1-2", "1-2", "2-3", "3-4"],
      ],
    ],

    note: "Note:Most of the items are integrated. So, the scoring criteria differ from item to item and section to section.",
    faq: [
      {
        ques: "What skills are tested in Speaking?",
        ans: ["Oral Fluency", "Pronunciation", "Content"],
      },
      {
        ques: "What skills are tested in Writing?",
        ans: [
          "Content",
          "Form",
          "Development",
          "Structure and Coherence",
          "Grammar",
          "Spelling",
          "General Linguistic Range",
          "Vocabulary",
        ],
      },
      {
        ques: "What skills are tested in Summarize Written Test?",
        ans: ["Content", "Form", "Grammar", "Vocabulary", "Spelling"],
      },
    ],
    register: [
      "Visit the official PTE website and create an account.",
      "Log in to your account and select your preferred test location and date.",
      "Fill in your personal information, including your name, contact details, and identification document.",
      "Review the terms and conditions, then proceed to make the payment for the test fee.",
      "Once your payment is confirmed, you will receive a confirmation email with your test details.",
      "On the test day, arrive at the designated test center with your identification document (e.g., passport).",
      "Follow the instructions provided by the test center staff and complete the PTE exam.",
    ],
  },
  {
    scoreScale: [
      ["PTE", "Level of Proficiency"],
      ["86 and above", "Expert user"],
      ["83-85", "Very good user"],
      ["79-82", "Good user "],
      ["73-78", "Modest user"],
      ["65-72", "Limited user"],
      ["59-64", "Intermittent user"],
      ["51-58", "Non-user"],
      ["43-50", "Did not attempt the test"],
      ["35-42", "Did not attempt the test"],
      ["30-34", "Did not attempt the test"],
    ],
  },
  {
    id: "Duolingo",
    overview:
      "Duolingo is a popular language-learning platform that offers courses in over 30 languages. Launched in 2011, it utilizes gamified lessons and exercises to teach vocabulary, grammar, listening, and speaking skills through interactive modules. \n Duolingo is accessible via web browsers and mobile apps, making it convenient for users to learn languages at their own pace.",

    testFormat: [
      [
        "Test Section",
        "Time Allocation",
        "Total No. of Questions",
        "Item Types",
      ],
      [
        "Listening",
        "30 minutes",
        "1 task",
        [
          "Listening to audio clips or spoken sentences and answering multiple-choice questions or matching tasks.",
        ],
      ],
      ["Reading", "30 minutes", "20-25 items", ["Multiple Choice", "Passages"]],
      [
        "Writing",
        "30 minutes",
        "1 task",
        ["Task 1: Write a short response or essay based on a prompt provided."],
      ],
      [
        "Speaking",
        "10-15 minutes  ",
        "6 task",
        [
          "Task 1: Speak into the microphone in response to prompts.",
          "Task 2: Describe images or graphs.",
          "Task 3: Engage in conversation simulations with computer-generated scenarios.",
        ],
      ],
    ],
    faq: [
      {
        ques: "What skills are tested in Listening?",
        ans: [
          "Listening comprehension in English",
          "Ability to understand spoken English in various contexts",
          "Recognition of main ideas and specific details",
        ],
      },
      {
        ques: "What skills are tested in Reading?",
        ans: [
          "Comprehension of written passages in English",
          "Ability to understand main ideas and details",
          "Vocabulary understanding and context usage",
        ],
      },
      {
        ques: "What skills are tested in Writing?",
        ans: [
          "Ability to write coherently and effectively in English",
          "Grammar and sentence structure",
          "Vocabulary usage and appropriateness",
        ],
      },
      {
        ques: "What skills are tested in Speaking?",
        ans: [
          "Ability to speak fluently and coherently in English",
          "Pronunciation and intonation",
          "Responding to prompts and engaging in simulated conversations",
        ],
      },
    ],
    register: [
      "Visit the Duolingo English Test website and create an account.",
      "Log in to your account and select your preferred test location and date.",
      "Make the payment for the test fee online using a credit card or other accepted payment methods.",
      "On the test day, log in to your account, ensure you have a stable internet connection, and complete the test in a quiet environment.",
      "Scores are typically available within 48 hours of completing the test, and an official score report can be sent to institutions or organizations as required.",
    ],
  },

  {
    id: "TOPIK",
    overview:
      "The Test of Proficiency in Korean (TOPIK) is a widely recognized Korean proficiency test. It was first introduced in 1997 and has since become one of the most popular Korean language tests worldwide.\nThe test is designed to assess an individual's ability to understand and use the Korean language in academic and general contexts.",
    testFormat: [
      [
        "Test Section",
        "Time Allocation",
        "Total No. of Questions",
        "Item Types",
      ],
      [
        "Listening",
        "60 minutes",
        "50 items",
        ["Multiple Choice", "Task-based ", "Summary"],
      ],
      [
        "Reading",
        "70 minutes",
        "50 items",
        ["Multiple Choice", "Cloze Test", "Task-based", "Summary"],
      ],
      [
        "Writing",
        "60 minutes",
        "4 task",
        [
          "Task 1: Sentence Composition",
          "Task 2: Short Answer/Question",
          "Task 3: Guided Writing",
          "Task 4: Essay",
        ],
      ],
    ],
    faq: [
      {
        ques: "What skills are tested in Reading?",
        ans: [
          "Identification of main ideas",
          "Understanding of details",
          "Inference of meaning from context",
        ],
      },
      {
        ques: "What skills are tested in Writing?",
        ans: [
          "Sentence completion",
          "Short responses",
          "Essay composition",
          "Grammar and vocabulary use",
          "Coherence and logical organization",
        ],
      },
    ],
    register: [
      "Go to the official TOPIK website and create an account.",
      "Log in to your account and select your preferred test location and date.",
      "Fill in your personal information, including your name, contact details, and identification document.",
      "Review the terms and conditions, then proceed to make the payment for the test fee.",
      "Once your payment is confirmed, you will receive a confirmation email with your test details.",
      "On the test day, arrive at the designated test center with your identification document (e.g., passport).",
      "Follow the instructions provided by the test center staff and complete the TOPIK exam.",
    ],
  },

  {
    id: "JLPT",
    overview:
      "Japanese is a language spoken by approximately 128 million people primarily in Japan and by Japanese emigrant communities around the world. \nIt belongs to the Japonic language family and is known for its complex writing system that includes kanji (Chinese characters), hiragana, and katakana. Japanese culture, literature, and arts have had a significant global influence, making the language a valuable skill for cultural exchange and business opportunities.",
    testFormat: [
      [
        "Test Section",
        "Time Allocation",
        "Total No. of Questions",
        "Item Types",
      ],
      [
        "Listening",
        "30-50 minutes",
        "30-40 items",
        [
          "Listening to audio clips or spoken sentences and answering multiple-choice questions or matching tasks.",
        ],
      ],
      [
        "Reading",
        "60-110 minutes",
        "30-60 items",
        ["Multiple Choice", "Passages"],
      ],
      [
        "Writing",
        "30-60 minutes",
        "1 task",
        [
          "Task 1: Writing short responses or essays based on given prompts, assessing grammar, vocabulary, and coherence.",
        ],
      ],
      [
        "Speaking",
        "10-30 minutes",
        "6 task",
        [
          "Task 1: Speak into the microphone in response to prompts.",
          "Task 2: Describe images or graphs.",
          "Task 3: Engage in conversation simulations with computer-generated scenarios.",
        ],
      ],
    ],
    faq: [
      {
        ques: "What skills are tested in Reading?",
        ans: [
          "Identification of main ideas",
          "Understanding of details",
          "Inference of meaning from context",
        ],
      },
      {
        ques: "What skills are tested in Writing?",
        ans: [
          "Sentence completion",
          "Short responses",
          "Essay composition",
          "Grammar and vocabulary use",
          "Coherence and logical organization",
        ],
      },
    ],
    register: [
      "Visit the Official JLPT Website",
      "Create an Account",
      "Log In and Select Test Location",
      "Provide Personal Information",
      "Review Terms and Conditions",
      "Make Payment",
      "Confirmation Email Received",
      "Prepare for Test Day",
      "Follow Test Center Instructions",
      "Complete the JLPT Exam",
    ],
  },
];
