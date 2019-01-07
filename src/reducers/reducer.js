const initialState = {
  startingToDoList: [],
  workingToDoList: [],
  finishToDoList: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_TODO') {
    let keys = Object.keys(action.ToDoList);
    let newStartingToDoList = []
    let newWorkingToDoList = []
    let newFinishToDoList = []

    keys.forEach((val) => {
      if (action.ToDoList[val]['status'] === 'starting') {
        newStartingToDoList.push({...action.ToDoList[val], id:val})
      } else if (action.ToDoList[val]['status'] === 'working') {
        newWorkingToDoList.push({...action.ToDoList[val], id:val})
      } else if (action.ToDoList[val]['status'] === 'finish') {
        newFinishToDoList.push({ ...action.ToDoList[val], id: val})
      }
    })

    return {
      ...state,
      startingToDoList: newStartingToDoList,
      workingToDoList: newWorkingToDoList,
      finishToDoList: newFinishToDoList
    }
  }

  return {
    ...state
  }
}

export default reducer;