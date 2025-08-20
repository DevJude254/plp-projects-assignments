# 🔗 Navigation Guide

This guide helps you quickly find specific assignments, projects, and learning resources within the repository.

## 🎯 Quick Access

### By Module
- [**🐍 Python Programming**](../python/) - All Python assignments and projects
- [**🌐 Web Development**](../web-development/) - HTML, CSS, JavaScript work
- [**🗄️ Databases**](../databases/) - SQL queries and database projects

### By Week
Use this format to access specific week content:
```
/{module}/week{number}/
```

**Examples:**
- [Python Week 2](../python/week2/) - Functions and modules
- [Web Development Week 1](../web-development/week1/) - HTML fundamentals
- [Databases Week 1](../databases/week1/) - SQL basics

## 🔍 Finding Specific Content

### Search Strategies

1. **By Topic**
   ```bash
   # Search for specific concepts
   grep -r "function" python/
   grep -r "flexbox" web-development/
   grep -r "JOIN" databases/
   ```

2. **By File Type**
   ```bash
   find . -name "*.py"    # All Python files
   find . -name "*.html"  # All HTML files
   find . -name "*.sql"   # All SQL files
   ```

3. **By Assignment Number**
   ```bash
   find . -name "assignment1.*"  # All assignment1 files
   ```

### File Naming Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| `assignment{N}.{ext}` | Weekly assignments | `assignment2.py` |
| `project_name.{ext}` | Named projects | `calculator.py` |
| `week{N}/README.md` | Week summaries | `week3/README.md` |

## 📍 Direct Links to Key Content

### Featured Assignments

#### Python
- **[Variables & Data Types](../python/week1/assignment1.py)** - Basic Python syntax
- **[Control Structures](../python/week1/assignment2.py)** - if-else and loops
- **[Functions Practice](../python/week2/assignment1.py)** - Function definitions and calls
- **[Error Handling](../python/week2/assignment2.py)** - Try-catch blocks

#### Web Development  
- **[HTML Basics](../web-development/week1/assignment1.html)** - Document structure
- **[CSS Styling](../web-development/week1/assignment2.css)** - Visual design
- **[Portfolio Project](../web-development/week2/portfolio/)** - Complete website

#### Databases
- **[Basic Queries](../databases/week1/assignment1.sql)** - SELECT statements
- **[Student Management](../databases/week1/student_management.sql)** - Full database project

### Project Showcases

| Project | Module | Week | Description |
|---------|--------|------|-------------|
| [**Calculator App**](../python/week3/calculator.py) | Python | 3 | GUI calculator with advanced operations |
| [**Portfolio Website**](../web-development/week2/portfolio/) | Web Dev | 2 | Responsive personal showcase |
| [**Student Database**](../databases/week1/student_management.sql) | Database | 1 | Complete CRUD system |

## 🗂️ Weekly Learning Structure

Each week follows this consistent pattern:

```
week{N}/
├── assignment1.{ext}     # Core concept practice
├── assignment2.{ext}     # Advanced application  
├── project/ (optional)   # Larger implementation
└── README.md            # Week summary & reflection
```

### What's in Each README
- **Learning objectives** for the week
- **Key concepts** covered
- **Challenges faced** during implementation
- **Resources used** for additional learning
- **Next steps** and areas for improvement

## 🎨 Visual Navigation

### Repository Map
```
📁 Repository Root
├── 🐍 python/           ← Start here for programming fundamentals
├── 🌐 web-development/  ← Move here for frontend skills  
├── 🗄️ databases/        ← Then learn data management
├── 📚 docs/             ← Reference documentation
└── 🎯 assets/           ← Shared resources
```

### Learning Path Flowchart
```
Start → Python Basics → Web Fundamentals → Database Concepts
  ↓           ↓              ↓                ↓
Week 1-3   Week 4-6       Week 7-9        Week 10-12
  ↓           ↓              ↓                ↓
Projects   Web Projects   Full-Stack      Integration
```

## 🔖 Bookmark These Links

### Daily Use
- [**Current Week Progress**](../python/week3/) - Where you left off
- [**Project Templates**](../assets/templates/) - Reusable code structures
- [**Learning Resources**](../docs/GOALS.md) - External references

### Weekly Reviews
- [**Module Overviews**](MODULES.md) - Big picture learning
- [**Progress Tracking**](GOALS.md) - Goal assessment
- [**Code Standards**](../docs/CONTRIBUTING.md) - Quality guidelines

## 💡 Pro Navigation Tips

1. **Use GitHub's file finder** (press `t` in any repo view)
2. **Star important files** for quick access
3. **Use branch comparison** to see progress over time
4. **Clone locally** and use your IDE's project navigation
5. **Bookmark specific commit hashes** for milestone versions

## 🆘 Need Help Finding Something?

If you can't locate a specific assignment or project:

1. Check the [**Project Structure**](PROJECT_STRUCTURE.md) documentation
2. Use GitHub's search functionality (press `/`)
3. Review week-specific README files for detailed contents
4. Look in the `assets/` folder for shared resources

**Still stuck?** Open an issue with the `help-wanted` label!