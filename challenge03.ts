//Problem Statement :- So we have to filter out an array of mixed types (nummber, string, boolean) and return a new array with only the number types.)

//we will apply truthiness narrowing concepts here!

export const arrayFilterFunel = (arr: (number | string | boolean)[]): number[] => {
  const finteredArrrayWithNumbers: number[] = []

  for (const item of arr) {
    //itemIsNumber demonstrates truthiness narrowing concept.
    const itemIsNumber = typeof item === "number" ? true : false;
    if (itemIsNumber) {
      finteredArrrayWithNumbers.push(item as number)
    }
  }
  return finteredArrrayWithNumbers
}

