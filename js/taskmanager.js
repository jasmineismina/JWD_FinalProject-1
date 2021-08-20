// Create a TaskManager class
class TaskManager {
  // Set up the tasks and currentId property in the contructor
  constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
  }

  // Create the addTask method
  addTask(name, description, assignedTo, dueDate) {
      const task = {
          // Increment the currentId property
          id: this.currentId++,
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: ('TODO','IN PROGRESS','DONE','REVIEW')
      };

      // Push the task to the tasks property
      this.tasks.push(task);
  }

 // Create the deleteTask method
 deleteTask(taskId) {
  // Create an empty array and store it in a new variable, newTasks
  const newTasks = [];

  // Loop over the tasks
  for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Check if the task id is not the task id passed in as a parameter
      if (task.id !== taskId) {
          // Push the task to the newTasks array
          newTasks.push(task);
      }
  }

  // Set this.tasks to newTasks
  this.tasks = newTasks;
}


getTaskById(taskId) {
  let foundTask;

  for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id === taskId) {
          foundTask = task;
      }
  }

  return foundTask;
}

render() {
  const tasksHtmlList = [];

  for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

      tasksHtmlList.push(taskHtml);
  }

  const tasksHtml = tasksHtmlList.join('\n');

  const tasksList = document.querySelector('#tasksList');
  tasksList.innerHTML = tasksHtml;
}

save() {
  const tasksJson = JSON.stringify(this.tasks);

  localStorage.setItem('tasks', tasksJson);

  const currentId = String(this.currentId);

  localStorage.setItem('currentId', currentId);
}

load() {
  if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');

      this.tasks = JSON.parse(tasksJson);
  }

  if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');

      this.currentId = Number(currentId);
  }
}
};




/*const task1 = {
  id: 1,
  name: 'Food Website',
  description: 'Create a responsive website for fast food chain Ronalds',
  assignedTo: 'Raul Ramirez',
  dueDate: '2021-08-20',
  status: 'IN PROGRESS'
};

const task2 = {
  id: 2,
  name: 'Form Correction',
  description: "Debug form on McNeil's landing page",
  assignedTo: 'Jasmine Patel',
  dueDate: '2021-09-20',
  status: 'DONE'
};

const task3 = {
  id: 3,
  name: 'Create Web Banner',
  description: 'Create web banner for Yosemite Printing',
  assignedTo: 'Manny Wyler',
  dueDate: '2021-02-20',
  status: 'TODO'
};

const task4 = {
  id: 4,
  name: 'Open House Ad',
  description: 'Add tables and form with bootstrap',
  assignedTo: 'Danny Caruso',
  dueDate: '2021-08-20',
  status: 'REVIEW'
};

const task5 = {
  id: 5,
  name: 'Link CSS File',
  description: 'link CSS file and add other assets to repository',
  assignedTo: 'Michael Corleone',
  dueDate: '2021-10-15',
  status: 'IN PROGRESS'
};*/













