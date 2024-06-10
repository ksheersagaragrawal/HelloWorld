# naval - totd
Deploying a "naval-totd" Node.js Application on AWS ECS/Fargate with Terraform and GitHub Actions CI/CD Pipeline

Here is my approach on building this project.

### Commit 1: Create a hello world program using express with proper project structure.

Installing [express generator](https://expressjs.com/en/starter/generator.html) ```npm install -g express-generator```

Creating project structure ```express --view=ejs naval-totd --git```

Installing dependencies ```npm install```

Installing nodemon```npm install --save nodemon```

Running express application ```DEBUG=naval-totd:* npm start```

Get request ```http://localhost:3000/```


### Commit 2:  test code using jest and added node.js actions worlflow

I will do the build and publish setup later. 

Installing [testing](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/) dev dependenciess ```npm install --save-dev babel-cli babel-preset-env jest supertest superagent``` for express application

**Note:** the above dependency takes time to install, i faced socket time out, in that case run the command again.

Adding test directory with one root path test

Adding script ```"test": "jest"``` 

Adding github actions continuous integration workflow [node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

Modifying the workflow [```runs-on```](https://www.youtube.com/watch?v=R8_veQiYBjI)

### Commit 3:  add business logic – bulk jobs updateChapterQuotes and get naval totd

I will add code coverage github action & optimising current business logic in next commits.

Adding scraping script ```updateChapterUrls.js``` : bulk job to update chapter urls

Adding scraping script ```updateChapterQuotes.js``` : bulk job to update chapter quotes

Adding express router ```chapter.js``` : dynamically generates routes based on ```chapterStructure.json``` & quotes using ```getRandomQuote``` function.

Adding ejs template ```chapter.ejs``` : renders individual chapter with title & quotes.

> Thanks to Claude.ai and GPT-4o ♥️