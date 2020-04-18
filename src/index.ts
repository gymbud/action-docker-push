import * as github from "@actions/github"
import * as core from "@actions/core"
import { exec } from "@actions/exec"

const onError = (error: Error) => {
   core.setFailed(error.message)
}

const run = async () => {
   const username = core.getInput("username")
   const password = core.getInput("password")
   const image = core.getInput("image")
   const tag = core.getInput("tag")

   console.log("Login to docker hub")
   await exec(`docker login -u ${username} -p ${password}`)

   console.log("Push to docker hub")
   await exec(`docker push ${image}:${tag}`)

   console.log("All done!")
}

process.setUncaughtExceptionCaptureCallback(onError)

run().catch(onError)
