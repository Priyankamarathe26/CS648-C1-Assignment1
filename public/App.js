
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = React.createElement(
  'h1',
  null,
  'Priyanka Marathe'
);
var imageComponent = React.createElement('img', { id: 'img-st', src: './Priyanka.jpg' });
var introComponent = React.createElement(
  'p',
  null,
  'I am a student pursuing a Masters in Computer Science at San Diego State University. I am working as an Instructional Student Assistant for Data Structues and Algorithms (CS210) course ata SDSU. I worked as a Software developer for 2 years at Tata Consultancy Services, India. I worked on an Advanced Driver Assistant Systems (ADAS) following agile methodologies. I have expertise in programming languages Python, C++, and Java. I also worked on devops tools like Gitlab, Jira, and Jfrog Artifactory for the integration of software components.'
);
var gitComponent = React.createElement(
  'button',
  { id: 'btn' },
  React.createElement(
    'a',
    { href: 'https://github.com/Priyankamarathe26' },
    'VIEW MY GITHUB REPO'
  )
);
ReactDOM.render(nameComponent, nameNode);
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);