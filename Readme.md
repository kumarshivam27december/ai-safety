AI SAFETY INCIDENT LOG API - README

This is a backend system to record and manage AI safety issues. It lets you add, view, and delete incident reports.

HOW TO SET UP:

1. Install needed software:
   - Install Node.js from nodejs.org
   - Install MongoDB from mongodb.com

2. Setup the project:
   - Download this project folder
   - Open terminal in this folder
   - Run command: 
        npm install

3. Setup database:
   - Start MongoDB (usually runs automatically after installation)
   - Create a .env file in the project folder
   - Add this line to the .env file:
     MONGO_URL=mongodb://localhost:27017/backend_assignment
     PORT=5000

4. Add sample data:
   - Run command: 
        npm run seed
   - This adds 3 example incidents to the database

5. Start the server:
   - Run command: npm start
   - The server will start on port 5000

HOW TO USE THE API:

1. To add new incident:
   Send POST request to:
   http://localhost:5000/api/incidents
   With JSON data like:
   {
     "title": "Problem name",
     "description": "What happened",
     "severity": "High/Medium/Low"
   }

2. To see all incidents:
   Send GET request to:
   http://localhost:5000/api/incidents

3. To see one incident:
   Send GET request to:
   http://localhost:5000/api/incidents/ID-NUMBER-HERE

4. To delete incident:
   Send DELETE request to:
   http://localhost:5000/api/incidents/ID-NUMBER-HERE

EXAMPLE COMMANDS:

To test using curl:

1. Create incident:
curl -X POST http://localhost:5000/api/incidents -H "Content-Type: application/json" -d '{"title":"Test","description":"Test issue","severity":"Low"}'

2. View all incidents:
curl http://localhost:5000/api/incidents

TROUBLESHOOTING:

If MongoDB doesn't connect:
1. Check if MongoDB is running
2. Check .env file has correct connection string
3. Restart the server after making changes

