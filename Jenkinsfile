pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Example') {
      steps {
        sh 'npm version';
        sh 'echo moji'
      }
    }
  }
}