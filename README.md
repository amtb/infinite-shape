# Infinite shape
Infinite shape challenge [![Build Status](https://travis-ci.com/amtb/infinite-shape.svg?token=UgWdXE2QTs8W785ye8Et&branch=master)](https://travis-ci.com/amtb/infinite-shape)

## Algorithm
The implementation is not recursive, and the complexity is `O(n*2)`.

The shape looks like the following:

```
                       filled line
                 <------------------------>+
                                           |
                 +----------------------------------------------------+
             ^   |                         |                          |
padding lines|   |      <----------------> |                          |
             v   |                         |                          |
                 |      +--------------------------------------+      |
                 |      |                  |                   |      |
                 |      |     <----------> |                   |      |
                 |      |                  |                   |      |
                 |      |     +--------------------------+     |      |
            +--------------------+         |             |     |      |
            |    |      |     |  |         |             |     |      |
border      |    |<---> +<--->+  |         |             |     |      |
(repeated pattern)      |     |  |         |             |     |      |
          +------+---------------+-------------------------------------------+ symmetry axis
                 |      |     |            |             |     |      |
                 |      |     |            |             |     |      |
                 |      |     |            |             |     |      |
                 |      |     |            |             |     |      |
                 |      |     |            |             |     |      |
                 |      |     +--------------------------+     |      |
                 |      |                  |                   |      |
                 |      |                  |                   |      |
                 |      +--------------------------------------+      |
                 |                         |                          |
                 |                         |                          |
                 |                         |                          |
                 |                         |                          |
                 +----------------------------------------------------+
                                           |
                                           |
                                           +
                                 symmetry axis


```

- padding lines are the same as the previous filled line with dashes replaced by empty spaces.

The goal was to build that top left quarter of the shape and mirror it (twice).
To build the top left quarter, we:
- build filled lines that reduce in size as we go in depth (reduce the width by padding each iteration)
- build borders (repeated pattern of pipes + padding / 2 times spaces)
- add padding lines 
- and handle last iterations / corner cases.

## Pre-requisites
- Node.js <br/>
The famous one https://nodejs.org/en/

- Yarn <br/>
Alternative/Challenger to `npm`, see https://yarnpkg.com/lang/en/

## Application
The application is available in two modes.
- `console` mode where the app runs in console and draws a fixed set of rectangles.

- `server` mode where the application can be targeted via an http call to build and returned the shape based on the inputs sent by the client.

The server is hosted and accessible at `https://tangled-api.herokuapp.com/`

### Install guide
- Clone the repository
- Install the dependencies using `yarn`
- Build the application using `yarn run build`
- Start the application using
    - `yarn run start:console` for the `console` mode
    - `yarn run start:server` for the `server` mode

### Testing
Once the install guide is followed
- Run the unit tests using `yarn run test`
- Open the `index.html` file inside the `test-report` folder to see the report.

### Development guide
The commands below re-run the app after you modify the source code.

- Use `yarn run test:watch` for the console mode 

To debug, you can use the VSCode launch menu inside the Debugger menu.

- Use `yarn run server:watch` to launch the server in dev mode

## Screenshots
### 20-40-6
![20-40-6](./screenshots/20-40-6.PNG)

### 60-60-10
![60-60-10](./screenshots/60-60-10.PNG)

### 80-20-16
![80-20-16](./screenshots/80-20-16.PNG)

### Built with
- express
- jest
- nodemon
