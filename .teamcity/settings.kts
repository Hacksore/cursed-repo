project {
    buildType {
        name = "Test"
        steps {
            script { scriptContent = "npm test" }
        }
    }
}
