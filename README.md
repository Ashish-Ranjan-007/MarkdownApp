Technologies Used : TailwindCSS, ReactJS, NodeJS, Vite

Markdown APP : A simple project to take markdown syntax as an input and convert it to HTML.



FrontEnd Components : The App comprises of three elementary components

	<APP>---<Landing>----<Input>
			-----<Output>
  
Input Component : The input component consist of input box that take  Markdown syntax as an input, an input box from Tailwind is used.
                  stores the data in a State variable and the API is called using axios as POST request with the State data.
                  The response is then stored in Global variable that is declared using Context API so that Output component can utilize the data.

Output Component : The Output component is also very simple, as it access the Context API data and displays the data in the Preview Panel.

{view? <div>{view.newdata}</div>


Server Side : In the server side, express server has been setup and markdown-it library has been installed and imported. Post API has been defined 
to get the syntax as req.body , this data is then utilized by the markdown library's render method and result is generated.

	const result = await md.render(req.body.mddata);

The response is then send back as JSON object with status code 200 for sucess and 500 for failure respectively.

Server Dependencies : cors , dotenv, express, markdown-it, nodemon.
Client Dependencies : axios, dotenv


Installation : 

1. Clone the repo to your local Storage.
2. Run "npm i" inside client and server folder to install all the dependencies.
3. Run "npm run dev" to start the client.
4. Run "nodemon src/index.js" to start the server.
5. Open any browser and visit the URL mentioned in the commandline/bash.
	
