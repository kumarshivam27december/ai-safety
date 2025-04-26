// seed.js
const mongoose = require('mongoose');
const Incident = require('./models/Incidents');
require('dotenv').config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB for seeding...');

    await Incident.deleteMany({});
    console.log('Cleared existing incidents...');

    const sampleIncidents = [
      {
        title: "Unauthorized Data Access",
        description: "AI system accessed user data without proper authorization",
        severity: "High"
      },
      {
        title: "Bias in Hiring Algorithm",
        description: "Model showed gender bias in resume screening",
        severity: "Medium"
      },
      {
        title: "Incorrect Medical Diagnosis",
        description: "AI system provided incorrect treatment recommendation",
        severity: "High"
      }
    ];

    const createdIncidents = await Incident.insertMany(sampleIncidents);
    console.log(`Added ${createdIncidents.length} sample incidents:`);
    console.log(createdIncidents);

    await mongoose.disconnect();
    process.exit(0);

  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();