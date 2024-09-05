class Task {
    constructor(title) {
        const moment = require('moment');
        this.id = 0
        this.title = title
        this.status = 'pending'
        this.date = moment().format("MM/DD/YYYY")
    }
}

class TaskManager {
    constructor() {
        this.tasks= []
    }
    addTask(task) {
        
        if (task instanceof Task) {
            task.id = this.tasksLength() + 1
            this.tasks.push(task) 
        }

        else console.log('Invalid task... Must be an Instance of Task')
    }
    removeTask(id) {
        let del_index = this.tasks.map(e => e.id).indexOf(id)
        if(del_index > -1) this.tasks.splice(del_index, 1)

        console.log('Task with id =', id, 'is removed')

        for (let index = del_index; index < this.tasks.length; index++) 
            this.tasks[index].id = index + 1
    }
    updateStatus(id) {
        let status_index = 0
        let status_value = ''
        
        status_index = this.tasks.map(e => e.id).indexOf(id)
        console.log('status_index = ', status_index);

        
        if (this.tasks[status_index].status == 'pending') 
            this.tasks[status_index].status = 'Completed'
        else if (this.tasks[status_index].status == 'Completed') 
            this.tasks[status_index].status = 'pending'

        console.log('Status of task with id', id, 'is changed to', this.tasks[status_index].status )

    }
    tasksLength() {
        return this.tasks.length
    }
    printTasks() {
        for (let task of this.tasks) console.log(task)
    }
}


const manager = new TaskManager()
manager.addTask(new Task('First'))
manager.addTask(new Task('Second'))
manager.addTask(new Task('Third'))
manager.addTask(new Task('Fourth'))
// console.log(manager.tasksLength())
// manager.printTasks()
manager.removeTask(2)
manager.updateStatus(3)
manager.printTasks()
manager.updateStatus