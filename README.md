# GitHub Clone

A GitHub clone built with SolidJS, providing a modern, fast, and reactive user experience similar to GitHub.

## Features

- User authentication
- Repository management
- Issue tracking
- Pull request workflow
- Code browsing and syntax highlighting
- Project boards
- User profiles
- Notifications system

## Technologies

- [SolidJS](https://www.solidjs.com/) - A declarative JavaScript library for building user interfaces
- [Solid Router](https://github.com/solidjs/solid-router) - For application routing
- [SolidJS/Store](https://github.com/solidjs/solid/tree/main/packages/store) - For state management
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Development environment

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/srimadhavn/githubClone.git
cd githubClone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/      # Reusable components
├── pages/           # Application pages
├── hooks/           # Custom hooks
├── services/        # API services
├── stores/          # State management
├── utils/           # Utility functions
├── App.jsx          # Main application component
└── index.jsx        # Entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by GitHub
- SolidJS team for the awesome framework