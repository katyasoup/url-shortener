## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Required for installation:

- [Node.js](https://nodejs.org/en/)
- [PostgresSQL v9.6] (https://www.postgresql.org/download/)


### Installing

Once your prerequisities are installed, run ```npm install``` to download and install all project dependencies. Next, get the SQL database up and running with the script from ```databse.sql```

### Run
- Download and clone the project files: ```$ git clone https://github.com/katyasoup/wiw-challenge.git```
- Adjust database variables in ```server/modules/pool.js``` as needed at line 29
	- Alternatively, create a ```.env``` file to store your Postgres credentials 
- Spin it up! ```$ npm start``` The project will be available on port 5000 by default