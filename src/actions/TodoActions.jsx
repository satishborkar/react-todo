import Dispatcher from '../dispatcher/Dispatcher.jsx';

export function actionAddTodo(todo) {
    var action = {
        type: "ADD_NEW_TODO",
        item: todo
    }
    // console.log(todo);
    // console.log(Dispatcher)
    Dispatcher.dispatch(action);
}

export function actionDeleteTodo(todo) {
    var action = {
        type: "DELETE_TODO",
        item: todo
    }
    Dispatcher.dispatch(action)
}

export function actionEditTodo(todo){
    var action = {
        type:"EDIT_TODO",
        item : todo
    }
    Dispatcher.dispatch(action)
}