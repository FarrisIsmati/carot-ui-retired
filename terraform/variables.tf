variable "AWS_REGION" {}
variable "PAT" {}
variable "GITHUB_REPO" {}
variable "APP_NAME" {
    default = "carot-ui"
}
variable "ENVIRONMENT" {
    default = "DEVELOPMENT"
}
variable "GITHUB_TRIGGER_BRANCH" {
    default = "main"
}