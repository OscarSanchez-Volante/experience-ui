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
        sh 'sudo azcopy copy "dist/**" "https://storageangular.blob.core.windows.net/$web?sp=r&st=2022-11-18T00:55:14Z&se=2022-11-18T08:55:14Z&spr=https&sv=2021-06-08&sr=c&sig=iT4Hrd%2BKUWbt0VYHaDnpzTUmJuQF38mEAQIJ%2BOwyf0M%3D" -recursive'
      }
    }

  }
  tools {
    nodejs 'NodeJsAngular'
  }
}
