export const errorHandler = (error: Error): void => {
  switch (error.constructor) {
    case TypeError: {
      console.error(
        `An error ocurred in the execution of the program. Error: ${error.message}`,
      );
      break;
    }
    default: {
      console.error(
        `An error ocurred in the execution of the program. Error: ${error.message}`,
      );
    }
  }
};
