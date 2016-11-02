#### frontend
- vuex : placeholders structured after https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
- vue-resource : client/src/api/api.js for details
- semantic ui : as script tags because i'm too lazy to rebuild it all the time

#### backend
- docker : there's a dockerfile in there
- aws elasticbeanstalk : there's a Dockerrun.aws.json in there


##### developing
    // start up the front-end
    cd client
    npm install // only do this for the first time
    npm run dev // start up nice hot-reloading frontend. all hail vue-cli. more (better) info in client/README.md

    // open another terminal tab and start up the backend
    cd server
    python app.py // in the front-end, hit localhost:8000.

##### deploying
    cd client
    npm run build // should put all the goodies into server/static and server/template

    cd ../server
    python app.py // just run it on localhost:8000
    // OR
    docker build -t COOL_APP . ; docker run -p 8000:8000 COOL_APP; // run it locally with docker
    // OR
    // zip up the contents and upload it to AWS ElasticBeanstalk (I can't use eb-cli because i use python 3 :'( )
