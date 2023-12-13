document.title = 'Random Quiz'; //Changes title of page and tab

//variables
var quiz = [];
quiz[0] = new Question("In the AI Builder, I want to create a model which detects spam.  What model should I use?", "Text Category classification model", "Prediction model", "Form processing model","Object detection model");
quiz[1] = new Question("In Power BI, I want to create a new report from an Excel data source.  What can I use?", "Both Power BI Desktop and the Power BI Service","Neither Power BI desktop nor the Power BI Service", "Power BI desktop but not Power BI Service", "Power BI Service but not Power BI desktop");
quiz[2] = new Question("I want to use Power Automate desktop.  Which of the following is NOT true?", "You cannot install it onto a computer which uses macOS as the operating system", "It is installed by default in Windows 11", "You cannot install it onto a computer which uses Linux as the operating system","You can download and install it onto a computer that uses Windows 10 as the operating system");
quiz[3] = new Question("In canvas apps, what is a gallery?", "It contains components which make up all (or part of) a row of data", "It contains the separate screens that we have used (Browse, Detail and Edit)", "It contains a series of pictures or photos only","You should use a model-driven app instead");
quiz[4] = new Question("I have created a canvas app that uses tables from Dataverse and includes a column for employee pay.  I accidentally entered a value of $10 million for an employee.  What is the best way to prevent this from happening again?", "Create a business rule", "Create a Power Automate flow to correct the mistake", "Alter the canvas app","Create a relationship to a table with acceptable values");
quiz[5] = new Question("In Power BI's Power Query Editor, I want to find out how many or what proportion of values in the sample data is blank.  Which one of these do I NOT use?", "Column distribution", "Column quality", "Column profile","None of these");
quiz[6] = new Question("In Power BI's Power Query Editor,I have a column with some text which includes some leading and trailing spaces such as ' HELLO THERE '. What do I use to easily remove these spaces?", "Trim", "Pivot", "Parse","Extract");
quiz[7] = new Question("I want my Power Platform apps to work together.  Which of the following CANNOT happen?", "Run a canvas app from a Power Automate flow", "Add a model-driven app into Teams", "Embed canvas apps on a form in a model-driven app","Integrate AI Builder content in a canvas app");
quiz[8] = new Question("In Power BI, I would like a graph that shows time in the horizontal (X-axis) and sales in the vertical (Y-axis).  Which visualization should I NOT use?", "Pie chart", "Area chart", "Line chart","Stacked column chart");
quiz[9] = new Question("Which of these table types require a Dynamics 365 license?", "Restricted and Complex", "Complex and Custom", "Custom and Standard","Standard and Restricted");
quiz[10] = new Question("In Power BI, I want to find out how many rows are in my data.  Which aggregation should I use?", "Count", "Count (Distinct)", "Average","Sum");
quiz[11] = new Question("In Power BI, I have 2 queries each with 2000 rows.  I want to bring in the rows from one query into the other so I end up with 4000 rows.  What should I use?", "Power Query Editor - Append Queries", "Power Query Editor - Merge Queries", "Model tab","Calculated Columns");
quiz[12] = new Question("Which of these are not directly used in Power Virtual Agents?", "Forms", "Topics", "Artificial Intelligence","Entities");
quiz[13] = new Question("What does a Data Loss Prevention (DLP) policy do?", "It can stop 2 connectors from transferring data between them", "It can stop rows from being deleted from Dataverse tables", "It can stop certain users from reading specified tables","It can stop certain users from running specified Power Apps");
quiz[14] = new Question("I want to link 2 queries together, but I do not want to alter the columns contained in each query.  What should I use?", "Model tab","Merge queries","Append queries", "Measure");
quiz[15] = new Question("I create an environment with the Power Platform.  Which of the following apps does NOT use a Power Platform environment to store?", "Power BI", "Power Automate", "Power Virtual Agents","Power Apps");
quiz[16] = new Question("In Power Apps, you can insert an image, camera, barcode, scanner, video or audio components in our canvas app by going to which menu?", "Insert Menu - Media", "Insert Menu - Gallery", "Insert Menu - Charts","Insert Menu - Input");
quiz[17] = new Question("Which app can only directly use the AI Builder Business Card Reader model, but not other models directly?", "Model-driven app", "Canvas app", "Power Automate flow","Power BI report");
quiz[18] = new Question("In Power Virtual Agents, where would you be able to download the transcript of previous conversations", "Analytics", "Topics", "Entities","Publish");
quiz[19] = new Question("I want to classify the Dataverse in the Data Loss Prevention (DLP) polices.  Which classification can I NOT use?", "Blocked", "Non-Business", "Business","All of these");
quiz[20] = new Question("Which of these is correct with regards to Dynamics 365?", "Some Dynamics 365 apps use the Dataverse to store data", "You cannot use Dynamics 365 with Power Automate", "A license for Power Apps also includes Dynamics 365","The Dynamics 365 interface uses the same interface of canvas apps");
quiz[21] = new Question("In Power Virtual Agents, which of the following is NOT ideal as a trigger phrase?", "Give me details about your new desktop computer", "Return product", "Store opening hours","Make a complaint");
quiz[22] = new Question("Which of the following can connect to the Dataverse?", "All of these", "Power BI", "Power Automate","Power Apps");
quiz[23] = new Question("In Power BI, which of the following is true?", "A dashboard consists of pinned visualizations from one or more reports", "A dashboard consists of pinned visualizations, but only from a single report", "A workspace consists of pinned visualizations from one or more reports","A workspace consists of pinned visualizations, but only from a single report");
quiz[24] = new Question("In Power Automate, I wish to create an Approval process.  Which of these is not a standard Approval Type?", "Approve/Reject - Two must approve", "Approve/Reject - Everyone must approve", "Approve/Reject - First to respond","Custom responses - Wait for one response");
quiz[25] = new Question("In Power Automate, I want a flow to start when new data arrives.  What type of flow is this?", "Automated flow", "Button flow", "Instant flow","Scheduled flow");
quiz[26] = new Question("In Power BI, I want to allow the end user to be able to restrict what data is shown on the page.  Which of the following will allow the end user this interaction?", "Slicers", "Get and Transform", "Model","Filters");
quiz[27] = new Question("What is an aggregation?", "It is a summary of data", "It is a type of visualization", "It is a data source","It is a filter");
quiz[28] = new Question("I have 3 categories and I want a visualization which shows these in a circle, with the size of each slice being proportionate to the value.  Which visualization should I use?", "Pie Chart", "Stacked Bar Chart", "Area Chart","Line Chart");
quiz[29] = new Question("I want to compare 2 numbers against each other for various categories, so that there are lots of circles in the graph.  Which visualization should I use?", "Scatter graph", "Gauge", "Decomposition tree","Key Influencers");
quiz[30] = new Question("Which of these is NOT a filter?", "Dataset filter", "Visual filter", "Page filter","All pages filter");
quiz[31] = new Question("What is a drill through?", "It allows you to go from one page of a report to another, filtering on the second page", "It allows you to change the level of hierarchy in a visualization - so you start off with year, then quarter, then month", "It summarizes the data","All of these");
quiz[32] = new Question("In the Power Query editor, what does the operations in the Transform menu do?", "They take an existing column, do something to the data and give you the answer in the same column", "They take an existing column, do something to the data and give you the answer in a new column", "They delete an existing column","None of the above");
quiz[33] = new Question("I want some statistics for every column.  Which one of these will only give me statistics for one column at a time?", "Column profile", "Column distribution", "Column quality","Column quantity");
quiz[34] = new Question("I have 2 different data sources and I want to bring in one query into another through Power Query Editor.  What do I use?", "Merge queries", "Append queries", "Model","Report");
quiz[35] = new Question("What is a dashboard?", "Extracts from reports", "Extracts from datasets", "A group of multiple reports and datasets","A Power BI report");
quiz[36] = new Question("What is an app in Power BI terms?", "A published workspace", "A certified dataset", "A published report","A published dashboard");
quiz[37] = new Question("I want to say that a particular dataset contains good data, and should be relied on.  What is a technical name that I could use for this dataset?", "Promoted", "Advanced", "Expert","Checked");
quiz[38] = new Question("Does a specific environment have a geographical location?", "Yes-you choose the geographic area", "No-it is worldwide", "Yes-Microsoft chooses the geographic area","None of these");
quiz[39] = new Question("You have created your first trial environment.  How many days do you have until it expires (unless you convert it to a production environment)?", "30", "7", "90","It doesn't expire if you are on the paid-for version of Power Apps");
quiz[40] = new Question("I do not have Dynamics 365.  Which of these types of tables cannot be created?", "Complex", "Custom", "Standard","All of these");
quiz[41] = new Question("I have 100,000 products, each of which are described in terms of name, size, color, etc.  What is this contained in?", "A table", "A column", "A row","A relationship");
quiz[42] = new Question("I have a table which contains a column with the type of products ordered.  I want to show or hide the color fields in a model-driven app depending on the type of product.  What do I need?", "Business rule", "Visual filter", "Relationship","Data type");
quiz[43] = new Question("Which of these is NOT a screen in a canvas app?", "Upload screen", "Browse screen", "Detail screen","Edit screen");
quiz[44] = new Question("In canvas apps, you can add new components such as new text, input and media controls using which menu?", "Insert", "Home", "View","Action");
quiz[45] = new Question("I have just shared my canvas app with Susan and made her a co-owner.  Which of these actions can she NOT do?", "Delete the app", "Edit the app", "Use the app","Share the app");
quiz[46] = new Question("In a model-driven app, what does a view look like?", "A table", "A graph", "A canvas app","Edit screen");
quiz[47] = new Question("Which of these can I NOT directly add to a model-driven app using the editor?", "Charts", "Views", "Forms","Dashboards");
quiz[48] = new Question("I want to share a model-driven app, but I only want them to have permissions to view tables that they create (unless they have permissions from elsewhere).  What role should I give them?", "System Customizer", "System Administrator", "Environment Maker","None of these");
quiz[49] = new Question("What is another name for a button flow?", "An instant flow", "An automated flow", "A scheduled flow","A Nintex workflow");
quiz[50] = new Question("What does a Switch control do?", "It does different things depending on the value of a variable", "It runs a loop until a variable has reached a certain figure", "It runs a loop for every item in a table","It turns on and off a light");
quiz[51] = new Question("What does the Flow Checker do?", "Evaluates your flow against best practices", "Allows you to go into past runs and check whether they worked", "Allows you to do a test of the flow, to check whether it works","It makes sure there is water running in your house");
quiz[52] = new Question("What is the purpose of the Do Until loop?", "To do the loop until a certain condition is true", "To do the loop until a certain condition is false", "To do the loop until a certain condition is both true and false","To do the loop until you stop it manually");
quiz[53] = new Question("What is a Business Process?", "It guides the user through various stages", "It stops invalid values from being entered into the Dataverse", "It is a process which requires Approval or Rejection from multiple people","There is no such thing");
quiz[54] = new Question("I have Dynamics 365.  Which of these portal templates have I just made up?", "Payroll portal", "Partner portal", "Community portal","Customer self-service portal");
quiz[55] = new Question("How many Starter Portals (or Portals from Blank) can you have per environment?", "50", "Zero", "One per language", "10");
quiz[56] = new Question("What is a topic?", "It defines how a bot conversation plays out","A phrase which the end user enters to launch a conversation", "It asks the end user for a response", "10");
quiz[57] = new Question("What are entities in Power Virtual Agents?", "They help extract references to real world objects or concepts in conversations","They are tables which contain columns, relationships and ata", "They are a group of phrases that can start a conversation in a topic", "None of these");
quiz[58] = new Question("On which channel can you NOT publish a chatbot?", "Twitter","Facebook messenger", "Microsoft Teams", "A mobile app");
quiz[59] = new Question("I have several hundred invoices in JPG format that I want processing with the information extracted from them.  Which AI model should I use?", "Form procesing","Business Card reader", "Object detection", "Text category classification");
quiz[60] = new Question("I want to stop a Dataverse from connecting to an email connector in Power Automate.  What do I need to use?", "Data Loss Prevention policies","Security Roles", "A different environment", "Google Chrome");
quiz[61] = new Question("What does the Microsoft 365 Admin Center allow you to administer?", "Users","Environments", "Portals", "Power Automate");
quiz[62] = new Question("You plan to use Power Automate to perform data management tasks when users interact with sales opportunities in Dynamics 365.  You need to identify three events to trigger the tasks.  Which three are best?  When a record is...", "Created, Updated, Deleted","Read, Viewed, Deleted", "Viewed, Deleted, Created", "Updated, Read, Viewed");
quiz[63] = new Question("You create a Power App portal.  When a user signs into the portal the following error displays: User not found.  You confirm that user's sign in information is correct.  What should you do to determine the cause of the error?", "Disable custom error messages","Create a custom error message", "Enable diagnostic tools in Lifecycle Services", "Enable Maintenance Mode");
quiz[64] = new Question("Your company uses Dynamics 365.  When a service ticket is created, a technician visit to the customer is required.  These visits need manager consent.  How do you ensure this process is followed?", "Approval flow","Scheduled flow", "Business rule", "Button flow");
quiz[65] = new Question("A company has a Power App that is used by most employees.  The company is expanding to other countries/regions.  You need a solution to translate text generated within the app.  What should you recommend?", "Azure Cognitive Services","Azure Synapse Analytics", "Power BI", "Power Automate");
quiz[66] = new Question("What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?", "You can implement Single Sign-On (SSO)","You do not need to manually back-up data", "Both will use the same time zone", "You can use Power BI to display data that comes from both environments");
quiz[67] = new Question("The Common Data Model (CDM) is a standard and extensible collection of schemas, including entities, attributes and relationships that represents business concepts and activities with well-defined schematics.  Does this definition actually apply to CDM or does it fit another term better?", "No change is needed","Common Data Services (CDS)", "Business Process flow", "Dynamics 365 Business Central");
quiz[68] = new Question("What two ways are best to share a Power BI dashboard with co-workers and allow collaboration?", "Create a shared Power BI workspace or publish the dashboard as an app to share","Export the report to Excel or export to PDF", "Create a flow or store the data in a SQL Server Database", "None of these");
quiz[69] = new Question("Users within a company use Power Automate for personal productivity.  Users often overwrite their working flows by editing the definitions and are unable to undo changes after saving a flow.  You need to ensure that users can revert a flow back to the current state.  Which two options can you use?", "Export, Save As","Rename, Share", "Share, Export", "Save As, Rename");
quiz[70] = new Question("A company has a website.  The website includes a form that allows the company to collect information about leads.  You need to set up a process to place those leads in Dynamics 365 Sales.  What should you create?", "Power Automate","Task Flow", "Dynamics 365 workflow", "Business Process flow");
quiz[71] = new Question("Your company has an on-premise SQL server database that contains legacy sales data.  You must display information from that database in a new Power App.  What should you use?", "Gateway","Data source", "App", "Power Automate");
quiz[72] = new Question("You are the Power Platform admin in your company.  You want to create new users and manage licenses.  What should you use?", "Microsoft 365 Admin Center","Dynamics 365 Admin Center", "Power Apps Admin Center", "Power Platform Admin Center");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
	this.wrongAnswer3 = wrongAnswer3;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
	
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

function answerD_clicked() {
  var answerD = document.getElementById("answerD").value;
  	
		checkAnswer(answerD);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}


function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Incorrect");
    adjustScore(false);
  }	  
}