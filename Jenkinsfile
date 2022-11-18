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
        sh 'sudo azcopy copy --from-to=LocalBlob "dist/**" "hhttps://storageangular.blob.core.windows.net/$web?sp=racwdli&st=2022-11-18T01:15:42Z&se=2022-11-18T09:15:42Z&sv=2021-06-08&sr=c&sig=2AVOfU7na0cqxLL1EJ0ImTUWjwGX%2FY6xI3mKkG2blHE%3D" --recursive'
      }
    }
  
  tools {
    nodejs 'NodeJsAngular'
  }
}
