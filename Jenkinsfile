pipeline {
    /*when the agent is dockerfile use the following syntax*/
    agent {
        dockerfile{
            filename 'Dockerfile.build'
            dir 'build'
            label 'dockerfile-label'
            registryUrl 'https://registry.hub.docker.com'
            registryCredentialsId 'docker-hub-credentials'
        }
    }
    stages {
        stage('Clone repository'){

        }

        stage('Build image'){

        }

        stage('Test image'){

        }

        stage('Push image'){

        }


    }
}