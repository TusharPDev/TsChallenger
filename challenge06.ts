//The "in" operator

export type thriller = { missionImpossible: () => string };
export type comedy = { mrBean: () => string };


export const genre = (choice: thriller | comedy) => {
  if ("missionImpossible" in choice) {
    return choice.missionImpossible();
  } else if("mrBean" in choice) {
    return choice.mrBean();
  }
}
