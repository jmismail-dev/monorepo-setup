/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    tools { nodejs 'NodeJs' }
    stages {
        stage('Test Npm') {
            steps {
                sh '''
                    npm --version
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                   npm install
                   cd client/
                   npm install
                   npm run build
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo rm -rf /var/www/jenkins-monorepo'
                sh "cd ${WORKSPACE} && ls"
                sh "sudo cp -r ${WORKSPACE}/client/dist/ /var/www/jenkins-monorepo"
                sh 'sudo pm2 restart 0'
            }
        }
    }
}
