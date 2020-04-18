import github from "@actions/github"
import core from "@actions/github"
import cp from "child_process"

const onError = (error: Error) => {}

const run = async () => {}

process.setUncaughtExceptionCaptureCallback(onError)

run().catch(onError)
