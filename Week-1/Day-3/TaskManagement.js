class Task {
    constructor(title, date, status) {
        this.id = 0
        this.title = title
        this.status = status
        this.date = date
    }
    updateStatus() {
        this.status = !this.status
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
    // removeTask(id) {

    // }
    tasksLength() {
        return this.tasks.length
    }
    printTasks() {
        for (let task of this.tasks) console.log(task)
    }
}


const manager = new TaskManager()
manager.addTask(new Task('First', '4', false))
console.log(manager.tasksLength())
manager.printTasks()