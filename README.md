# Chef Claude App

Chef Claude App is a modern web application that helps you create delicious recipes based on a list of ingredients you provide. It leverages the power of the Mistral API and Hugging Face models to generate creative and practical cooking instructions. Built using React, TypeScript, and styled with TailwindCSS, Chef Claude App ensures a smooth and responsive user experience.

---

## Features

- **Ingredient-based recipe generation:** Enter a list of ingredients, and Chef Claude App generates a recipe tailored to your input.
- **AI-powered recipe creation:** Uses the Mistral API and Hugging Face models for high-quality recipe suggestions.
- **Modern UI/UX:** Built with React and styled with TailwindCSS for a clean and responsive design.
- **React Markdown Support:** Recipes are displayed with enhanced formatting using React Markdown.
- **Context API:** Efficient state management for seamless user interactions.
- **Error handling:** Provides clear feedback if something goes wrong during recipe generation.
- **Development Tools:** Includes Vite for a fast development environment, ESLint for code linting, and Prettier for consistent code formatting.

---

## Technologies Used

- **React:** For building the user interface.
- **TypeScript:** For type safety and better code quality.
- **TailwindCSS:** For modern, utility-first styling.
- **React Markdown:** For rendering recipe content with markdown support.
- **Context API:** For state management.
- **Mistral API:** For generating recipe instructions.
- **Hugging Face models:** For enhanced language processing and creativity in recipe generation.
- **Vite:** For a fast and efficient development environment.
- **ESLint:** For maintaining clean and error-free code.
- **Prettier:** For consistent code formatting.

---

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 14.x or higher)
- npm or Yarn

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:carabetcorneliu/Chef-Claude-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Chef-Claude-App
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn start
   ```

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## Usage

1. Enter a list of ingredients in the input field.
2. Click the "Get a Recipe" button.
3. Wait a moment as the AI processes your input.
4. View the generated recipe displayed on the screen with formatted markdown.

---

## Project Structure

```
Chef-Claude-App/
├── public/             # Public assets
├── src/                # Application source code
│   ├── ai/             # AI utility functions, including models and utils
│   ├── components/     # Reusable React components
│   ├── lib/            # Hooks & utility functions
│   ├── contexts/       # Context provider
│   └── index.tsx       # Main app component
├── tailwind.config.js  # TailwindCSS configuration file
├── vite.config.js      # Vite configuration file
├── tsconfig.json       # Typescript configuration file
├── package.json        # Project dependencies and scripts
└── README.md           # Documentation
```

---

## API Integration

### Hugging Face Models

The app utilizes Hugging Face models for natural language processing. These enhance the quality and creativity of the generated recipes.

### Mistral API

Chef Claude App connects to the Mistral API for generating recipes. Ensure you have an API key and configure it in the environment variables.

### Anthropic API

Second option on generating recipes, Chef Claude App connects to the Anthropic API. Ensure you have an API key and configure it in the environment variables.

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_HF_ACCESS_TOKEN==your-mistral-api-key
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

---

## Acknowledgments

- [Mistral AI](https://mistral.ai) for recipe generation.
- [Hugging Face](https://huggingface.co) for powerful language models.
- [React Markdown](https://github.com/remarkjs/react-markdown) for rendering markdown content.
- [TailwindCSS](https://tailwindcss.com) for utility-first styling.
- [Vite](https://vitejs.dev) for a lightning-fast development environment.
- [ESLint](https://eslint.org) for code linting.
- [Prettier](https://prettier.io) for code formatting.

Enjoy creating recipes with Chef Claude App!
