
node { // run on any available node
  stage ('Cloning Git') { // first stage
    git 'https://github.com/Moji-7/react-compare-products.git' // clone the repository
  }
  stage ('Install dependencies') { // second stage
    tool name: 'node', type: 'nodejs' // use the node tool with the name "node"
    sh 'npm install' // install the dependencies
  }
  stage ('Test') { // third stage
    sh 'npm test' // run the tests
  }
  stage ('Deploy') { // fourth stage
    sh 'npm run deploy' // deploy the application
  }
}
