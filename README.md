# ApolloViewer

This sample application is used in [Andrew Connell](https://www.github.com/andrewconnell)'s Angular workshops. Students in the workshops are encouraged to follow along and build the same application demonstrated in the workshop.

However it is easy for students to either fall behind or mistakenly do something incorrect resulting in a wrecked project and hard to figure out the problem.

To address this, you can use this git repo's tags to jump to specific checkpoints called out during the workshop.

## To Jump to a Specific Checkpoint

From the command line enter the following commands:

```shell
git checkout [tagname]
git clean -fd
```

For example, to jump to "checkpoint-05":

```shell
git checkout checkpoint-05
git clean -fd
```

This will do the following: 

1. Checkout a specific git tag, used to name a checkpoint while creating the project
1. Remove any changed files, including empty folders. This is done because after jumping back to a previous commit, you might have extra files and folders that are added later.

## To Jump to the Final Working Project

```shell
git checkout checkpoint-11
git clean -fd
```
