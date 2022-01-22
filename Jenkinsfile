pipeline {
   agent any
   stages {
        stage('Checkout') {
            steps {
                    sshagent(['ssh-ec2']) {
                        sh "rm -rf web-site"
                        sh "git clone https://github.com/robertasolimandonofreo/web-site.git"
                        sh "cd web-site"
                        sh "git pull"
                    }
                }                
            }
        stage('Docker Down') {
            steps {
                    sshagent(['ssh-ec2']) {
                        sh "chmod +x -R stop.sh"
                        sh "./push.sh"
                    }
                }                
            }
        }
   }
