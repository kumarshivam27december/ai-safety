AI SAFETY INCIDENT LOG API 

This is a backend system to record and manage AI safety issues. It lets us add, view, and delete incident reports.

HOW TO SET UP:

1. Install needed software:
   - Install Node.js from nodejs.org
   - Install MongoDB from mongodb.com

2. Setup the project:
    Option 1 - Using Downloaded Folder:

        Download the project zip file
        Unzip the folder
        Open terminal in the unzipped folder
        Run command: npm install

    Option 2 - Using GitHub:

        Open terminal on your computer
        Run command to clone the project:
        git clone https://github.com/kumarshivam27december/ai-safety.git
        Go into the project folder:
        cd ai-safety
        Run command: npm install

3. Setup database:
   - Start MongoDB (usually runs automatically after installation)
   - Create a .env file in the project folder
   - Add this line to the .env file:
     MONGO_URL=mongodb://localhost:27017/ai-safety
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
   http://localhost:5000/api/incidents/id

4. To delete incident:
   Send DELETE request to:
   http://localhost:5000/api/incidents/id

Here's the complete testing guide with all operations for both curl and Postman:

TEST USING CURL:

1. Create new incident:
curl -X POST http://localhost:5000/api/incidents -H "Content-Type: application/json" -d '{"title":"Test","description":"Test issue","severity":"Low"}'

2. View all incidents:
curl http://localhost:5000/api/incidents

3. View one incident (replace 123 with real ID):
curl http://localhost:5000/api/incidents/123

4. Update incident (replace 123 with real ID):
curl -X PUT http://localhost:5000/api/incidents/123 -H "Content-Type: application/json" -d '{"title":"Updated","description":"Updated issue","severity":"Medium"}'

5. Delete incident (replace 123 with real ID):
curl -X DELETE http://localhost:5000/api/incidents/123

TEST USING POSTMAN:

1. Download and install Postman from postman.com
2. Open Postman and click "+" to create new request

3. For creating incident:
    Set method to POST
    Enter URL: http://localhost:5000/api/incidents
    Click "Body" tab
    Select "raw" and "JSON"
    Paste:
        {
            "title": "Test",
            "description": "Test issue",
            "severity": "Low"
        }
    Click "Send"

4. For viewing all incidents:
    Set method to GET
    Enter URL: http://localhost:5000/api/incidents
    Click "Send"

    For viewing one incident:
    Set method to GET
    Enter URL: http://localhost:5000/api/incidents/123 (replace 123 with real ID)
    Click "Send"

5. For updating incident:
    Set method to PUT
    Enter URL: http://localhost:5000/api/incidents/123 (replace 123)
    Click "Body" tab
    Select "raw" and "JSON"
    Paste updated data:
        {
            "title": "Updated",
            "description": "Fixed issue",
            "severity": "Medium"
        }
    Click "Send"

6. For deleting incident:
    Set method to DELETE
    Enter URL: http://localhost:5000/api/incidents/123 (replace 123)
    Click "Send"

TROUBLESHOOTING:

If MongoDB doesn't connect:
1. Check if MongoDB is running
2. Check .env file has correct connection string
3. Restart the server after making changes