/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    tools : { nodejs 'NodeJs' }
    stages {
        stage('Test Environment') {
            steps {
                sh '''
                    npm --version
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                   cd client/
                   npm install
                   npm run build
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo rm -rf /var/www/monorepo'
                sh "cd ${WORKSPACE}/dist && ls"
                sh "sudo cp -r ${WORKSPACE}/dist/ /var/www/monorepo/"
            }
        }
    }
}
