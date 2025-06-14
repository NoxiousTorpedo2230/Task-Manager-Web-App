let tasks = [];
let taskIdCounter = 1;

function init() {
    setCurrentDate();
    bindEvents();
    updateStats();
    addSampleTasks();
}

function setCurrentDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('en-US', options);
}

function bindEvents() {
    document.getElementById('taskForm').addEventListener('submit', handleTaskSubmit);
    document.getElementById('filterPriority').addEventListener('change', filterTasks);
    document.getElementById('filterStatus').addEventListener('change', filterTasks);
}

function handleTaskSubmit(e) {
    e.preventDefault();
    addTask();
}

function addTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const priority = document.getElementById('taskPriority').value;
    const description = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('taskDueDate').value;
    const category = document.getElementById('taskCategory').value.trim();

    if (!title || !priority) {
        showNotification('Please fill in the task title and priority!', 'bg-danger');
        return;
    }

    const task = {
        id: taskIdCounter++,
        title,
        priority,
        description,
        dueDate,
        category: category || 'General',
        completed: false,
        createdAt: new Date().toLocaleDateString()
    };

    tasks.unshift(task);
    renderTasks();
    updateStats();
    clearForm();
    showNotification('Task added successfully! 🎉', 'bg-success');
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
        updateStats();
        showNotification('Task deleted successfully!', 'bg-warning');
    }
}

function toggleTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
        showNotification(
            task.completed ? 'Task completed! Well done! 🎉' : 'Task marked as pending', 
            task.completed ? 'bg-success' : 'bg-info'
        );
    }
}

function renderTasks(tasksToRender = tasks) {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');

    if (tasksToRender.length === 0) {
        taskList.innerHTML = '';
        taskList.appendChild(emptyState);
        return;
    }

    taskList.innerHTML = tasksToRender.map(task => createTaskHTML(task)).join('');
}

function createTaskHTML(task) {
    const dueDateFormatted = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date';
    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;
    
    return `
        <div class="task-item ${task.completed ? 'completed' : ''} ${task.priority}-priority">
            <div class="task-header">
                <h5 class="task-title ${task.completed ? 'completed' : ''}">${task.title}</h5>
                <span class="priority-badge priority-${task.priority}">${task.priority}</span>
            </div>
            
            ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
            
            <div class="task-meta">
                <span>
                    <i class="fas fa-tag"></i>
                    ${task.category}
                </span>
                <span ${isOverdue ? 'style="color: #ef4444; font-weight: 600;"' : ''}>
                    <i class="fas fa-calendar-alt"></i>
                    ${dueDateFormatted}
                    ${isOverdue ? '(Overdue!)' : ''}
                </span>
                <span>
                    <i class="fas fa-clock"></i>
                    Created: ${task.createdAt}
                </span>
            </div>
            
            <div class="task-actions">
                <button class="task-btn ${task.completed ? 'task-btn-undo' : 'task-btn-complete'}" 
                        onclick="toggleTask(${task.id})">
                    <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="task-btn task-btn-delete" onclick="deleteTask(${task.id})">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div>
    `;
}

function filterTasks() {
    const priorityFilter = document.getElementById('filterPriority').value;
    const statusFilter = document.getElementById('filterStatus').value;

    let filteredTasks = tasks;

    if (priorityFilter) {
        filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
    }

    if (statusFilter) {
        filteredTasks = filteredTasks.filter(task => 
            statusFilter === 'completed' ? task.completed : !task.completed
        );
    }

    renderTasks(filteredTasks);
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    const highPriority = tasks.filter(task => task.priority === 'high' && !task.completed).length;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
    document.getElementById('highPriorityTasks').textContent = highPriority;
}

function clearForm() {
    document.getElementById('taskForm').reset();
}

function showNotification(message, bgClass) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    
    notificationMessage.textContent = message;
    notification.className = `toast ${bgClass}`;
    
    const toast = new bootstrap.Toast(notification);
    toast.show();
}

function addSampleTasks() {
    const sampleTasks = [
        {
            title: 'Complete Project Proposal',
            priority: 'high',
            description: 'Finalize the project proposal document for the client meeting next week',
            category: 'Work',
            dueDate: '2025-06-20'
        },
        {
            title: 'Team Code Review',
            priority: 'medium',
            description: 'Review pull requests from team members and provide feedback',
            category: 'Work',
            dueDate: '2025-06-18'
        },
        {
            title: 'Grocery Shopping',
            priority: 'low',
            description: 'Buy groceries for the week including vegetables and fruits',
            category: 'Personal',
            dueDate: '2025-06-16'
        },
        {
            title: 'Learn New Technology',
            priority: 'medium',
            description: 'Study React hooks and practice building components',
            category: 'Learning',
            dueDate: '2025-06-25'
        }
    ];

    sampleTasks.forEach(task => {
        tasks.push({
            id: taskIdCounter++,
            ...task,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        });
    });

    renderTasks();
    updateStats();
}

document.addEventListener('DOMContentLoaded', init);