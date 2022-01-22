pipeline {
   agent any
   stages {
        stage('Checkout') {
            steps {
            git branch: 'main', url: 'https://github.com/robertasolimandonofreo/web-site.git'
                }
            }
        stage('Build DockerHub') {
            steps {
            dir("portfolio-frontend"){  
                sh "chmod +x -R push.sh" 
                sh "./push.sh"
                }
            }
        }
        stage('Build image') {
            steps {
            dir("portfolio-frontend"){  
                sh "docker pull robertasolimandonofreo/frontend:latest"
                    }               
                }
            }   
        stage('Start container') {
            steps {
            dir("portfolio-frontend"){  
                sh "docker run -it -p 3000:3000 robertasolimandonofreo/frontend:latest"
                    }               
                }
            } 
        }
    }   