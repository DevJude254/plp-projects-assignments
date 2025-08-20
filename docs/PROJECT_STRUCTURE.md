# 📂 Project Structure

This document outlines the complete organization of the PLP Assignments repository.

## Repository Tree

```
plp-assignments/
├── 📁 python/                    # Python programming module
│   ├── week1/
│   │   ├── assignment1.py        # Basic variables and data types
│   │   ├── assignment2.py        # Control structures
│   │   └── README.md             # Week 1 summary and objectives
│   ├── week2/
│   │   ├── assignment1.py        # Functions and modules
│   │   ├── assignment2.py        # Error handling
│   │   └── README.md
│   ├── week3/
│   │   ├── calculator.py         # Featured project
│   │   ├── file_handler.py       # File operations
│   │   └── README.md
│   └── projects/                 # Larger Python projects
│       ├── todo_app/
│       └── mini_games/
│
├── 📁 web-development/           # Web development module
│   ├── week1/
│   │   ├── index.html            # HTML fundamentals
│   │   ├── styles.css            # Basic CSS styling
│   │   └── README.md
│   ├── week2/
│   │   ├── portfolio/            # Portfolio website project
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   ├── script.js
│   │   │   └── assets/
│   │   └── README.md
│   └── projects/                 # Web development projects
│       ├── responsive_layout/
│       └── interactive_forms/
│
├── 📁 databases/                 # Database management module
│   ├── week1/
│   │   ├── student_management.sql # Database design project
│   │   ├── basic_queries.sql      # SELECT, INSERT, UPDATE, DELETE
│   │   └── README.md
│   ├── week2/
│   │   ├── joins_practice.sql     # Table relationships
│   │   └── README.md
│   └── schemas/                   # Database schemas and designs
│       └── library_system.sql
│
├── 📁 docs/                      # Documentation files
│   ├── PROJECT_STRUCTURE.md      # This file
│   ├── MODULES.md                 # Module details
│   ├── NAVIGATION.md              # How to navigate
│   ├── GOALS.md                   # Learning objectives
│   └── CONTRIBUTING.md            # Contribution guidelines
│
├── 📁 assets/                    # Shared resources
│   ├── images/                   # Screenshots, diagrams
│   └── templates/                # Reusable code templates
│
├── .gitignore                    # Git ignore rules
├── LICENSE                       # Repository license
└── README.md                     # Main repository overview
```

## Folder Conventions

### Week Folders
Each week folder follows this structure:
- `assignmentN.py/html/sql` - Individual assignments
- `README.md` - Week summary, concepts learned, and challenges faced
- `projects/` - Larger assignments or mini-projects

### Project Folders
Larger projects include:
- `README.md` - Project description, setup instructions, features
- `src/` or main files - Source code
- `assets/` - Images, data files, etc.
- `docs/` - Project-specific documentation

### Documentation Standards
- Each module has a main README explaining the learning path
- Week READMEs include concepts covered and reflection notes
- Project READMEs include setup instructions and feature descriptions

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Python files | `snake_case.py` | `user_authentication.py` |
| HTML files | `kebab-case.html` | `contact-form.html` |
| CSS files | `kebab-case.css` | `main-styles.css` |
| SQL files | `snake_case.sql` | `create_tables.sql` |
| Documentation | `UPPERCASE.md` | `SETUP_GUIDE.md` |

## Growth Strategy

As the repository grows:
1. **New modules** get their own top-level folders
2. **Complex projects** move to dedicated repositories and get linked here
3. **Shared utilities** go in the `assets/` folder
4. **Documentation** stays comprehensive and up-to-date