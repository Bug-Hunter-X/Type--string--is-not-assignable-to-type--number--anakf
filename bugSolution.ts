function combine(a: number, b: string): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (!isNaN(numB)) {
      return a + numB; 
    } else {
      throw new Error('Invalid input: b must be a number or a parsable string');
    }
  } else {
      throw new Error('Invalid input: b must be a string or a number');
  }
} 