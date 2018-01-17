import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher.jsx';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.allTodos = [
            { id: 1514558370743, task: "Taks 01", dateOfExpiry: "12/01/2018", assingedTo: "Varsha", assingedBy: "Satish" },
            { id: 1514558370744, task: "Taks 02", dateOfExpiry: "12/01/2018", assingedTo: "Girija", assingedBy: "Sandeep" },
            { id: 1514558370745, task: "Taks 03", dateOfExpiry: "12/01/2018", assingedTo: "Kallyani", assingedBy: "Pradip" },
            { id: 1514558370746, task: "Taks 04", dateOfExpiry: "12/01/2018", assingedTo: "Mieeshka", assingedBy: "Ganesh" }

        ]
    }
    getAllTodos() {
        return this.allTodos;
    }

    addChangeListener(addChangeListener) {
        this.on('change', addChangeListener)
    }

    removeChangeListener(addChangeListener) {
        this.removeListener('change', addChangeListener)
    }

    addNewTodo(todo) {
        // if(typeof todo != undefined){
        //     this.allTodos.push(todo);
        // }

        this.allTodos.push(todo);

        //console.log(todoStore);
        this.emit('change');
    }

    deleteTodo(todo) {
        const indexMap = this.allTodos.indexOf(todo);
        this.allTodos.splice(indexMap, 1);
        this.emit('change');
    }

    updateEditTodo(todo) {
        var indexdTodo ="";

        for (var i = 0; i < this.allTodos.length; i++) {
            if (this.allTodos[i].id === todo.id) {
                indexdTodo = this.allTodos.indexOf(this.allTodos[i])
            }
        };

        this.allTodos[indexdTodo] = todo;

        //console.log(this.allTodos[indexdTodo], todo);

        this.emit('change');
    }


    ActionHandler(action) {
        //console.log(action);
        switch (action.type) {
            case "ADD_NEW_TODO":
                this.addNewTodo(action.item);
                break

            case "DELETE_TODO":
                this.deleteTodo(action.item)
                break

            case "EDIT_TODO":
                this.updateEditTodo(action.item)
                break
        }
    }
}

const todoStore = new TodoStore;

TodoStore.dispatchToken = Dispatcher.register(todoStore.ActionHandler.bind(todoStore));

//window.todoStore = todoStore;


export default todoStore;