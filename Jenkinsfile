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

  }
  
  post {
      always {
        sh 'sudo azcopy copy --from-to=LocalBlob "dist/testing/" "https://storageangular.blob.core.windows.net/testing?sp=racwdli&st=2022-11-18T10:03:24Z&se=2022-11-18T18:03:24Z&sv=2021-06-08&sr=c&sig=yOBJJJNX4uHwNH94J4DkRsOQAIChB%2FUvKwHeHx72OiI%3D" --recursive'
      }
    }
  
  tools {
    nodejs 'NodeJsAngular'
  }
}
