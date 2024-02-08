//The "in" operator

type thriller = {missionImpossible: ()=> void};
type comedy = {mrBean: ()=> void};


function genre(choice: thriller | comedy){
  if("missionImpossible" in choice){
    return choice.missionImpossible();
  }else{
    choice.mrBean()
  }
}