import database from '../assets/config';

export const addToDo = (todo) => {
  return () => {
    database.ref('/').push(todo, function(err) {
      if(err) 
        console.log(err)
    })
  }
}

export const removeToDo = (id) => {
  return () => {
    database.ref('/' + id).remove()
  }
}

export const updateStatus = (todo, newStatus) => {
  const ref = database.ref('/' + todo.id)
  return dispatch => {
    ref.set({
      ...todo,
      status: newStatus
    })
  }
}

export const getDataFromFirebase = () => {
  const leadsRef = database.ref('/')
  return dispatch => {
    leadsRef.on('value', function (snapshot) {
      dispatch(set_todo(snapshot.val()))
    })
  }
}

export const set_todo = (ToDoList) => {
  return {
    type: 'SET_TODO',
    ToDoList: ToDoList
  }
}