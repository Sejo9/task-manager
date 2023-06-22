# Task Manager
 A web application for managing various tasks

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- Java 17
- Maven

## Installing Java 17

To install Java 17, follow these steps:

1. Visit the [Oracle website](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) or the website of your preferred JDK provider.
2. Download the JDK installer for your operating system.
3. Run the installer and follow the installation instructions.
4. Set up the `JAVA_HOME` environment variable to point to the installation directory of Java 17.

You can verify the installation by opening a terminal and running the following command:

```bash
java --version
```

If Java 17 is successfully installed, you should see the version information.

## Installing Maven

To install Maven, follow these steps:

1. Visit the [Apache Maven website](https://maven.apache.org/download.cgi).
2. Download the latest binary zip archive for your operating system.
3. Extract the downloaded archive to a directory of your choice.
4. Set up the `MAVEN_HOME` environment variable to point to the extracted Maven directory.
5. Add the `bin` directory of Maven to your system's `PATH` environment variable.

You can verify the installation by opening a terminal and running the following command:

```bash
mvn --version
```

If Maven is successfully installed, you should see the version information.

## Creating the  .env file 

To create a .env file, follow these steps:

1. Locate the .env.example file provided in the `backend/src/main/resources` directory of the Task Manager project.

2. Create a new file in the same directory (`backend/src/main/resources`) and name it `.env`. You can use the command line or a file explorer to do this. Alternatively, you can duplicate the .env.example file and rename the duplicate as `.env`.

3. Use a text editor of your choice to open the .env file. This could be a code editor like Visual Studio Code or a simple text editor like Notepad.

4. Inside the .env file, you will find a list of variables. Assign the actual values you want to use for your environment. Make sure to provide valid values for the required configurations.

5. Once you have updated the variables, save the .env file in the `backend/src/main/resources` directory.

6. The application can now utilize the variables defined in the .env file located in the `backend/src/main/resources` directory. 

## Running the Spring Boot Application with Maven

To run the Spring Boot application using Maven, follow these steps:

1. Open a terminal and navigate to the backend directory of the Task Manager project (where the `pom.xml` file is located).
2. Build the project using the following command:

   ```bash
   mvn clean install
   ```

   This will compile the source code, and package the application into a JAR file.

3. Once the build is successful, you can run the application using the following command:

   ```bash
   mvn spring-boot:run
   ```

   This will start the Spring Boot application, and you should see the application logs in the terminal.

4. Open a web browser and navigate to `http://localhost:8080/api/v1/tasks` to access the running application.
