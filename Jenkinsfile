pipeline {
   agent any
   stages {
        stage('Checkout') {
            steps {
                    sshagent(credentials: ['ssh-ec2']) {
                        sh '''
                        rm -rf web-site
                        git clone https://github.com/robertasolimandonofreo/web-site.git
                        cd web-site
                        git pull 
                    '''
                    }
                }                
            }
        stage('Docker Stop') {
            steps {
                    sshagent(credentials: ['ssh-ec2']) {
                        sh ''' 
                        cd web-site
                        chmod +x -R stop.sh
                        sh ./stop.sh
                    '''
                    }
                }                
            }
        stage('Build in DockerHub') {
            steps {
                    sshagent(credentials: ['ssh-ec2']) {
                        sh ''' 
                        cd web-site
                        chmod +x -R push.sh
                        ./push.sh
                    '''
                    }
                }                
            }
        stage('Deploy') {
            steps {
                    sshagent(credentials: ['ssh-ec2']) {
                        sh ''' 
                        docker pull robertasolimandonofreo/frontend:latest
                        docker run -it -p 3000:3000 robertasolimandonofreo/frontend:latest
                    '''
                    }
                }                
            }
        stage('Test') {
            steps {
                    sshagent(credentials: ['ssh-ec2']) {
                        sh ''' 
                            cd web-site
                            chmod +x -R site.sh
                            ./site.sh
                    '''
                    }
                }                
            }
        }
   }