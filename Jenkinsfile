pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                sh '''
                        rm -rf web-site
                        git clone https://github.com/robertasolimandonofreo/web-site.git
                        cd web-site
                        git pull 
                '''
            }
        }
        stage('Docker Stop') {
            steps {
                sh '''
                        cd web-site
                        docker stop frontend
                        docker system prune -a -f
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                        docker pull robertasolimandonofreo/frontend:latest
                        docker run -d --name frontend -p 3000:3000 robertasolimandonofreo/frontend:latest
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                            curl -I "https://www.robertasoliman.tech"
                '''
            }
        }
    }
}