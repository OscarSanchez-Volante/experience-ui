pipeline {
  agent any
  stages {
    stage('Test npm') {
      steps {
        sh 'node --version'
      }
    }

    stage('Install node') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'ng build'
      }
    }
    
    stage('test') {
      steps {   
        sh 'ng test --progress=false --watch false'
      }
    }

  }
  tools {
    nodejs 'NodeJsAngular'
  }
}
