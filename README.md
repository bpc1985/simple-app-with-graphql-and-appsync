# Simple WebApp With GraphQL and AWS Appsync

1. create-react-app PROJECT_NAME --typescript or clone this project

+ PROJECT_NAME for example: webappraphqlmplify

2. "amplify init" and then choose

	 + Name of project: PROJECT_NAME

	+ Default Editor: Visual Studio Code

	+ Type of app: Javascript

	+ JS framework: React

	+ Source Directory: src

	+ Distribution Directory: build

	+ Build command: npm run-script build

	+ Start command: npm run-script build

3. "amplify add api",

	+ Choose GraphQL

	+ API name: PROJECT_NAME

	+ Authorization type: API Key

	+ Choose No annotated schema

	+ Test with One-to-many relationship

	+ Choose Yes for question "Do you want to edit schema?"

4. "amplify push" to test deployment

	+ Do you want to generate code for your newly created GraphQL API? choose YES

	+ Then choose Typescript

	+ Then all enter to choose default options

	+ Finally, waiting generated code

5. Test with npm run start

6. In order to add Cognito Authentication

    + "amplify add auth"

    + "amplify push" and choose Yes

    + Finally, waiting generated code