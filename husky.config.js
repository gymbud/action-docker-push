const join = (arr) => arr.join(" && ")

module.exports = {
   "hooks": {
      "pre-commit": join(["npm run fix", "npm run build", "git add ."]),
   },
}
