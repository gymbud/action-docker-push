import * as core from "@actions/core"
import { context } from "@actions/github"
import { exec } from "@actions/exec"

const onError = (error: Error) => core.setFailed(error.message)

const run = async () => {
   const username = core.getInput("username")
   const password = core.getInput("password")
   const image = core.getInput("image")
   const tag = core.getInput("tag")
   const onPr = core.getInput("on-pr")

   if (context.eventName === "pull_request" && onPr !== "true") {
      console.log("Abort due to config")
      return
   }

   console.log("Login to docker hub")
   await exec(`echo ${password} | docker login -u ${username} --password-stdin`)

   console.log("Push to docker hub")
   await exec(`docker push ${image}:${tag}`)

   console.log("All done!")
}

process.setUncaughtExceptionCaptureCallback(onError)

run().catch(onError)
