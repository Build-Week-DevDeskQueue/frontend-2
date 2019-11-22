    // // THe STORE should have four parts
    // // 1. The state
    // // 2. Get the state.
    // // 3. Listen to changes on the state.
    // // 4. Update the state. think of updating the state as an nfl playbook. Your state is the playbook, and each player can get, listen and update it. Game on ;)

    // // action / use cases
    // {
    //     type: 'ADD_TODO'
    //     todo: {
    //         id: 0
    //         name: 'Learn Redux'
    //         complete: false
    //     }
    // }
    
    // {
    //     type: 'REMOVE_TODO'
    //     id: 0
    // }
    
    // {
    //     type: 'TOGGLE_TODO'
    //     id: 0
    // }
    
    // {
    //     type: 'ADD_GOAL'
    //     goal: {
    //         id: 0
    //         name: 'Run A Marathon'
    //     }
    // }
    
    // {
    //     type: 'REMOVE_GOAL'
    //     id: 0
    // }
    
    // function createStore () {
    
    // // (1) state that is local to the createStore() function
    //     let state 
    // // (3) looping through all of your listeners when changes made on the state.
    //     let listeners = []
    // // (2) getState function/method that is getting the state.
    //     const getState = () => state
    // // (3) Listen to changes on the state. recieves listerner callback function when invoked.
    //     const subscribe = (listener) => {
    //         listeners.push(listener)
    //         // return new function from sunscribe 
    //         return () => {
    //             // seeing if true. 
    //             listeners = listeners.filter((l) => l !== listener)
    //         }
    //     }
    // // (2) properties/methods in the store
    //     return {
    //         getState,
    //         subscribe,
    //     }
    // }
    
    // // store function is creating the store
    // const store = createStore()
    // //  create one for admin and user unsubscribe function.
    // const unsubscribe = store.subscribe(() => {
    
    // })
    // // calling subscribe and passing any changes in that method. Just need to keep track of these functions and invoke each of them
    // store.subscribe(() => {
    
    // })
    // store.subscribe(() => {
    
    // })