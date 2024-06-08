# HelloWorld
Deploying a "Hello World" Node.js Application on AWS ECS/Fargate with Terraform and GitHub Actions CI/CD Pipeline

Here is my approach on building this project.

## Commit 1: Create a hello world program using express with proper project structure.

Installing [express generator](https://expressjs.com/en/starter/generator.html) ```npm install -g express-generator```

Creating project structure ```express --view=ejs myapp --git```

Installing dependencies ```npm install```

Installing nodemon```npm install nodemon```

Running express application ```DEBUG=myapp:* npm start```

Get request ```http://localhost:3000/```

