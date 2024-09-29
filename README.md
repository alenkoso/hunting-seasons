# Hunting Seasons Checker

## Overview

Hunting Seasons Checker is a web application designed to help hunters in Slovenia quickly check which species can be hunted on any given day. The app provides an easy-to-use interface with a date picker, allowing users to select any date and view the active hunting seasons for that day.

[... rest of the README content ...]

## Features

- Mobile-friendly design for easy access on smartphones
- Date picker for selecting any date
- Displays active hunting seasons for the selected date
- Fast and reliable performance
- Simple and intuitive user interface

## Technology Stack

- [Svelte](https://svelte.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/alenkoso/huntingseasons.git
   cd hunting-seasons-checker
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Development

To run the development server:

```
pnpm run dev
```

Visit `http://localhost:5173` in your browser to see the application.

### Building for Production

To create a production build:

```
pnpm run build
```

The built files will be in the `dist` directory.

## Usage

1. Open the application in your web browser.
2. Use the date picker to select a date.
3. View the list of species that can be hunted on the selected date.
4. Each species will show the specific types or categories that are permitted for hunting.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for a quick and easy way to check hunting seasons in Slovenia.