const fs = require('fs').promises;

class ToDoList { 
    constructor() { 
        this.tasks = [];
        this.init();
        
    }
    async init(){
        try{
            const data = await fs.readFile('./my.json', 'utf-8');
            if(data.trim()) this.tasks = JSON.parse(data);
            else this.tasks = []
        }
        catch(err) {
            if(err.code === 'ENOENT') {
                this.tasks = []
                await this.writeFile()
            }
            else if (err.code === 'SyntaxError') {
                this.tasks = []
                await this.writeFile()
            }
            else console.log('Crap happens in read', err)
        }
    }
    addTask(task) { 
        this.tasks.push(task);
        this.writeFile() 
    } 
    removeTask(task) { 
        this.tasks = this.tasks.filter(t => t !== task); 
        this.writeFile()
    } 
    listTasks() { 
        return this.tasks; 
    }
    writeFile() {
        require('fs').writeFile(
            './my.json', 
            JSON.stringify(this.tasks, null, 2),
            function(err) {
                if (err) console.log('Crap happens in write', err)
            }
        );
    }
} 
// Example usage 
(async () => {
    const myToDoList = new ToDoList(); 
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('list = ', myToDoList.listTasks()); 

    myToDoList.addTask('Learn JavaScript');
    myToDoList.addTask('Build a project');
    console.log('After adding tasks = ', myToDoList.listTasks());

    myToDoList.removeTask('Learn JavaScript'); 
    console.log(myToDoList.listTasks()); 
})();
// const myToDoList = new ToDoList(); 
// myToDoList.addTask('Learn JavaScript'); 
// myToDoList.addTask('Build a project'); 

// console.log('list = ', myToDoList.listTasks()); 
// Output: ['Learn JavaScript', 'Build a project'] 
// myToDoList.removeTask('Learn JavaScript'); 
// console.log(myToDoList.listTasks()); 
// Output: ['Build a project']
// myToDoList.writeFile()