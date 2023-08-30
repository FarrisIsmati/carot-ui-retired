# Role 1
data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["amplify.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "amplify_role" {
  name               = "${var.APP_NAME}-amplify-task-execution-role"
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
  tags = {
    Name             = "${var.APP_NAME}-iam-role"
  }
}

# Policy 1
resource "aws_iam_role_policy_attachment" "ecs_execution_policy" {
  role       = aws_iam_role.amplify_role.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
}