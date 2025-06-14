# TaskFlow - Modern Task Manager

A beautiful, responsive task management application built with vanilla JavaScript, Bootstrap 5, and modern CSS. TaskFlow helps you organize your daily tasks with an intuitive interface and powerful features.

![TaskFlow Logo](https://img.shields.io/badge/TaskFlow-Task%20Manager-blue?style=for-the-badge&logo=task&logoColor=white)

## ✨ Features

### Core Functionality
- **Create Tasks**: Add tasks with title, description, priority, due date, and category
- **Task Management**: Mark tasks as complete/incomplete, delete tasks
- **Priority Levels**: High, Medium, and Low priority classification with visual indicators
- **Smart Filtering**: Filter tasks by priority level and completion status
- **Real-time Statistics**: Live dashboard showing task metrics

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Toast Notifications**: Real-time feedback for user actions
- **Overdue Detection**: Visual indicators for overdue tasks

### Technical Features
- **Local Storage**: Tasks persist in browser memory during session
- **Sample Data**: Pre-loaded sample tasks for demonstration
- **Form Validation**: Input validation with user-friendly error messages
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https:https://github.com/NoxiousTorpedo2230/Task-Manager-Web-App.git
   cd Task-Manager-Web-App
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   double-click index.html
   ```

3. **Start using TaskFlow**
   - The application will load with sample tasks
   - Start creating your own tasks immediately

## 📁 Project Structure

```
taskflow/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

### File Overview

- **`index.html`**: Contains the complete HTML structure with Bootstrap components
- **`style.css`**: Custom CSS with modern design system, gradients, and responsive styles
- **`script.js`**: Vanilla JavaScript handling all task operations and UI interactions

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Purple-blue gradient)
- **Success**: `#48bb78` (Green)
- **Warning**: `#ed8936` (Orange)
- **Danger**: `#f56565` (Red)
- **Info**: `#4299e1` (Blue)

### Key Design Elements
- **Glassmorphism**: Frosted glass effects with backdrop filters
- **Gradient Backgrounds**: Modern gradient combinations
- **Card-based Layout**: Clean, organized content sections
- **Micro-animations**: Subtle hover and interaction effects

## 🔧 Technical Implementation

### JavaScript Architecture
```javascript
// Core data structure
let tasks = [];
let taskIdCounter = 1;

// Main functions
- init()              // Initialize application
- addTask()           // Create new task
- toggleTask()        // Toggle task completion
- deleteTask()        // Remove task
- filterTasks()       // Apply filters
- updateStats()       // Update dashboard statistics
```

### Dependencies
- **Bootstrap 5.3.2**: UI components and grid system
- **Font Awesome 6.4.0**: Icons and visual elements
- **Google Fonts (Inter)**: Typography
- **Vanilla JavaScript**: No additional frameworks required

## 📱 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 80+     | ✅ Full |
| Firefox | 75+     | ✅ Full |
| Safari  | 13+     | ✅ Full |
| Edge    | 80+     | ✅ Full |

## 🎯 Usage Guide

### Creating Tasks
1. Fill in the task title (required)
2. Select priority level (required)
3. Add description (optional)
4. Set due date (optional)
5. Specify category (optional, defaults to "General")
6. Click "Add Task"

### Managing Tasks
- **Complete**: Click the green "Complete" button
- **Undo**: Click the orange "Undo" button on completed tasks
- **Delete**: Click the red "Delete" button
- **Filter**: Use dropdown menus to filter by priority or status

### Dashboard Statistics
- **Total Tasks**: Count of all tasks
- **Completed**: Number of finished tasks
- **Pending**: Remaining active tasks
- **High Priority**: Urgent tasks requiring attention

## 🔄 Data Management

### Storage Method
- Tasks are stored in JavaScript memory during the session
- No persistent storage (refreshing will reset data)
- Sample tasks are automatically loaded on first visit

### Task Object Structure
```javascript
{
  id: 1,
  title: "Task Title",
  priority: "high|medium|low",
  description: "Task description",
  dueDate: "YYYY-MM-DD",
  category: "Category Name",
  completed: false,
  createdAt: "MM/DD/YYYY"
}
```

## 🎨 Customization

### Modifying Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #667eea;
  --success-color: #48bb78;
  --warning-color: #ed8936;
  /* ... more variables */
}
```

### Adding Features
- Extend the `addTask()` function for new fields
- Modify `createTaskHTML()` for additional display elements
- Update `updateStats()` for new metrics

## 🚀 Performance Features

- **Optimized Animations**: CSS transitions with hardware acceleration
- **Efficient DOM Updates**: Minimal re-rendering
- **Responsive Images**: Scalable vector icons
- **Lightweight**: No heavy frameworks or libraries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Future Enhancements

- [ ] Persistent storage with localStorage
- [ ] Task categories with colors
- [ ] Drag-and-drop task reordering
- [ ] Task search functionality
- [ ] Export/import tasks
- [ ] Dark/light theme toggle
- [ ] Task reminders and notifications
- [ ] Subtasks support
- [ ] Task templates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Moses Stephen Arulraj S**
- GitHub: [@NoxiousTorpedo2230](https://github.com/NoxiousTorpedo2230)
- LinkedIn: [Moses Stephen](https://www.linkedin.com/in/moses-stephen-arulraj-s-3480372b1)

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter typography
- Inspiration from modern task management applications

---

<div align="center">
  <p>Made with ❤️ by Stephen</p>
  <p>
    <a href="#taskflow---modern-task-manager">Back to Top</a>
  </p>
</div>
