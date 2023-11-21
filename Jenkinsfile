pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Example') {
      steps {
        sh 'npm config ls'
      }
    }
    stage ('Install dependencies') { // second 
    tool name: 'node', type: 'nodejs' 
    sh 'npm install' 
  }
  }
}