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
        sh 'sudo azcopy copy "dist/**" "https://storageangular.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-11-18T08:46:32Z&st=2022-11-18T00:46:32Z&spr=https&sig=G3qVyye94Hb%2BK6wlMy1RdmZoNfqT%2FDGzoQXweDEo2fI%3D/$web" -recursive'
      }
    }

  }
  tools {
    nodejs 'NodeJsAngular'
  }
}
