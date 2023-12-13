var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "1. Microsoft Power Platform solutions can detect faces in images by using?",
    o : [
      "A. Power BI",
      "B. Azure Bot Service",
      "C. Azure Cognitive Services",
      "D. Azure Active Directory"
    ],
    a : 2 // arrays start with 0
  },
  {
    q : "2. To create a Power BI dashboard, you need to use?",
    o : [
      "A. Power BI Service",
      "B. Power BI Desktop",
      "C. Power BI Mobile",
      "D. Power BI Dataset"
    ],
    a : 0
  },
  {
    q : "3. Which Power Query transformation function allows you to unpivot rows from an Excel data source?",
    o : [
      "A. Reverse Rows",
      "B. Transpose",
      "C. Count Rows",
      "D. Delete Rows"
    ],
    a : 1
  },
  {
    q : "4. You are configuring a legacy data source for Power BI that is hosted on a local server.  Which additional component should you use?",
    o : [
      "A. Azure Application Gateway",
      "B. Power BI Desktop",
      "C. Azure Data Factory",
      "D. On-premises data gateway"
    ],
    a : 3
  },
  {
    q : "5. How would you collaborate with colleagues to build Power BI reports and dashboards?",
    o : [
      "A. Create a template app",
      "B. Share a dashboard",
      "C. Share a dataset",
      "D. Share a workspace"
    ],
    a : 3
  },
  {
    q : "6. Which control should you use to display multiple rows from a SharePoint list in a canvas app?",
    o : [
      "A. Data card",
      "B. Form",
      "C. Gallery",
      "D. Label"
    ],
    a : 2
  },
  {
    q : "7. An AI Builder model Object Detector component control can be used within what?",
    o : [
      "A. Canvas app",
      "B. Model-driven app",
      "C. Portal app",
      "D. Power BI dashboard"
    ],
    a : 0
  },
  {
    q : "8. You've built a canvas app and want to share it with others and in turn let them share the app with others.  What permission do they need?",
    o : [
      "A. User",
      "B. Co-Owner",
      "C. Contributor",
      "D. Environment maker"
    ],
    a : 1
  },
  {
    q : "9. How would you create an object that only contains data from a single table?",
    o : [
      "A. Personal Chart",
      "B. Main Form",
      "C. Classic Workflow",
      "D. Public View"
    ],
    a : 1
  },
  {
    q : "10. You create an instant flow by using a Power Apps trigger. The flow sends an email to your team members once you have completed a task.  How can you trigger the flow to run?",
    o : [
      "A. Attach the flow to a button in a canvas app and then select the button",
      "B. Select the button from the Buttons tab of the Power Automate mobile app",
      "C. Update the status of a task in the app",
      "D. Create a business rule to act as a button"
    ],
    a : 0
  },
  {
    q : "11. You are creating a Power Virtual Agent chatbot.  You need to add trigger phrases to the chatbot.  Where can you configure the trigger phrases?",
    o : [
      "A. Authoring Canvas",
      "B. Entities",
      "C. Message node",
      "D. Topic"
    ],
    a : 3
  },
  {
    q : "12. You want to use the Power Platform to boost followers and retweets on your company's Twitter feed.  How could you get more information to better understand and subsequently increase engagement?",
    o : [
      "A. Configure a Power BI report to capture and analyze data from Twitter",
      "B. Power Apps using portals can create a new customer site for followers",
      "C. Power Automate can handle content approvals, reducing the time it takes to produce new content",
      "D. This is not possible in the Power Platform"
    ],
    a : 0
  },
  {
    q : "13. A co-worker has set up a model-driven app using Dataverse.  It captures computer hardware assets data including prices.  They are concerned that users may not fill all the needed information.  How could this be prevented?",
    o : [
      "A. Use Power Automate to validate that the columns are populated",
      "B. Use a Business Rule to make the fields required",
      "C. Use a canvas app instead of a model-driven app",
      "D. Use Power BI to create a dashboard with the needed data displayed"
    ],
    a : 1
  },
  {
    q : "14. You want a mobile app that allows you complete control over the user experience and design.  What type of Power App should you build?",
    o : [
      "A. A model-driven app",
      "B. A portal app",
      "C. A Gantt chart",
      "D. A canvas app"
    ],
    a : 3
  },
  {
    q : "15. You have been tasked with creating a Power App that can scan barcodes that will display the scanned item's information on the screen.  Out of the following control options, which one would the barcode scanner fall under?",
    o : [
      "A. Galleries",
      "B. Media",
      "C. Forms",
      "D. Screens"
    ],
    a : 1
  },
  {
    q : "16. When building a model-driven app, which designer is used to define the navigation of your app?",
    o : [
      "A. App designer",
      "B. View designer",
      "C. Site map designer",
      "D. SharePoint designer"
    ],
    a : 2
  },
  {
    q : "17. Where do you find templates for Power Automate flows?",
    o : [
      "A. You have to build and save templates yourself, there are no pre-built ones",
      "B. Directly from the Power Automate builder website",
      "C. Download the template pack from the Microsoft Learn website",
      "D. Ask your colleagues if they have templates saved on their desktops"
    ],
    a : 1
  },
  {
    q : "18. Your organization has started using lots of approval flows and users are complaining that they have too many approvals to keep track of.  What is the easiest way for them to check?",
    o : [
      "A. Navigate to the Approval Center in Power Automate",
      "B. Set up Outlook rules to catch approvals via email",
      "C. Go to the SharePoint list which holds the records being approved",
      "D. This is not possible in Power Platform"
    ],
    a : 0
  },
  {
    q : "19. In Power Virtual Agents, what defines how a chatbot conversation plays out?",
    o : [
      "A. Publishing",
      "B. Entities",
      "C. Queries",
      "D. Topics"
    ],
    a : 3
  },
  {
    q : "20. Where can you NOT publish a chatbot? (FINAL QUESTION)",
    o : [
      "A. Microsoft Teams",
      "B. Facebook",
      "C. YouTube",
      "D. Mobile Apps"
    ],
    a : 2
  },
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.  To see the answers, click here <a href="quiz_answers.html" target="_blank">Quick Quiz Answers</a>`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
