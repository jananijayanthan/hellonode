@Library('pipeline-library-demo')_

node {
    
    stage('Demo') {
    echo 'Hello world'
    sayHello 'Dave'
    }
    
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("jananijayanthan/hellonode")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        sh 'node test.js'

        /* the following shell commands start the service to test it but there is no way to stop it
        need to write separate js file to test server, and if response is given to exit - need to do */
        //sh 'npm start'
        //sh 'curl http://127.0.0.1:8000'
        //sh '^C'

        // step{
        //     sh 'npm test.js'
        // }
        
        // app.inside {
        //     //sh 'echo "Tests passed"'
        //     sh 'node ./test.js'
        // }
        echo 'Running test cases'
        echo "Passed test cases"
        // const shell = require('shelljs')
        // shell.exec('./test.js')
        // steps {
        //     sh './test.js'
        // }

    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        withCredentials([usernamePassword( credentialsId: 'docker-hub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {

            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            sh "docker login -u ${USERNAME} -p ${PASSWORD}"
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            }
        }

      
                
        
        // docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials3') {
        //     app.push("${env.BUILD_NUMBER}")
        //     app.push("latest")
        // }
    }


}
