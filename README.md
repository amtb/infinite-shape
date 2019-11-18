# Infinite shape
Infinite shape challenge [![Build Status](https://travis-ci.com/amtb/infinite-shape.svg?token=UgWdXE2QTs8W785ye8Et&branch=master)](https://travis-ci.com/amtb/infinite-shape)

## Algorithm
The implementation is not recursive, and the complexity is `O(n*2)`.

The shape could be folded in 4 with symetric lines.
So the goal was to build that top left quarter of the shape and mirror it twice.
  
## Pre-requisites
- Node.js <br/>
The famous one https://nodejs.org/en/

- Yarn <br/>
Alternative/Challenger to `npm`, see https://yarnpkg.com/lang/en/

## Install guide
- Clone the repository
- Install the dependencies using `yarn`
- Build the application using `yarn run build`
- Start the application using `yarn run start`

## Testing
Once the install guide is followed
- Run the unit tests using `yarn run test`
- Open the `index.html` file inside the `test-report` folder to see the report.

## Development guide
- Use `yarn run test:watch`
You can also launch it from VSCode using the Jest All button in the Debugger menu.

## Screenshots
### 20-40-6
![20-40-6](./screenshots/20-40-6.png)

### 60-60-10
![60-60-10](./screenshots/60-60-10.png)

### 80-20-16
![80-20-16](./screenshots/80-20-16.png)



