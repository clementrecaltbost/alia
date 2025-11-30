const fs = require('fs');
const path = require('path');

const files = [
  { name: 'AthleteFinancement.jsx', stepId: 5 },
  { name: 'AthleteServices.jsx', stepId: 6 },
  { name: 'AthleteCalendrier.jsx', stepId: 7 },
  { name: 'AthleteStatistiques.jsx', stepId: 8 },
  { name: 'AthleteCollaborations.jsx', stepId: 9 },
];

files.forEach(({ name, stepId }) => {
  const filePath = path.join('src', 'components', name);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the start of the stepper block
  const stepperStart = content.indexOf('{/* Stepper - Left Sidebar');
  if (stepperStart === -1) {
    console.log(`Skipping ${name} - stepper not found`);
    return;
  }
  
  // Find the end of the stepper block (before "Container - Right Column")
  const containerStart = content.indexOf('{/* Container - Right Column', stepperStart);
  if (containerStart === -1) {
    console.log(`Skipping ${name} - container not found`);
    return;
  }
  
  // Find the line before the container comment
  let lineStart = containerStart;
  while (lineStart > 0 && content[lineStart - 1] !== '\n') {
    lineStart--;
  }
  
  // Find the start of the stepper comment line
  let stepperLineStart = stepperStart;
  while (stepperLineStart > 0 && content[stepperLineStart - 1] !== '\n') {
    stepperLineStart--;
  }
  
  // Replace the entire stepper block
  const before = content.substring(0, stepperLineStart);
  const after = content.substring(lineStart);
  const replacement = `      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={${stepId}} />
`;
  
  content = before + replacement + after;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${name} with stepId ${stepId}`);
});

console.log('Done!');



