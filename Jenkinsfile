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
        sh 'node --max-old-space-size=3000 ./node_modules/@angular/cli/bin/ng build'
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
