# Merge and Sort

This is a command line application that takes two sorted arrays as arguments and outputs a single sorted array.

```
$ ./index.js [1,2,3] [4,5,6]
> [1, 2, 3, 4, 5, 6]
```

## Setup

This application be run either as as a standalone script or in a Docker container. The example above shows how
to run it as a standalone script. To build the docker container run:

```
$ docker build -t mergeSort:latest
```

To run the containerized function:

```
$ docker run mergeSort:latest [1,2,3] [4,5,6]
> [1, 2, 3, 4, 5, 6]
```

## Tests

To run the tests:

```
$ npm test
```

