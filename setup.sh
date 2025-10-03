#!/bin/bash

# Lumina Gallery Setup Script
echo "🎨 Setting up Lumina Gallery..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation successful!"
    echo ""
    echo "🚀 Quick Start Commands:"
    echo "   npm run dev      - Start development server"
    echo "   npm run build    - Build for production"
    echo "   npm run preview  - Preview production build"
    echo ""
    echo "🌐 The dev server will start at http://localhost:3000"
    echo ""
    echo "📖 Check README.md for more information"
    echo ""
    echo "Happy coding! 🎨✨"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
