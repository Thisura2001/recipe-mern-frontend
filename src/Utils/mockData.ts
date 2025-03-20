import {Recipe} from "../Model/RecipeModel.ts";

export const mockData:Recipe[] = [
    {
        id: '1',
        name: 'Spaghetti Carbonara',
        area: 'Italian',
        instructions: 'Cook pasta until al dente. In a separate bowl, whisk eggs, cheese, and pepper. Cook pancetta until crispy. Toss hot pasta with egg mixture and pancetta. Serve immediately.',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
        source: 'Traditional Recipe'
    },
    {
        id: '2',
        name: 'Chicken Tikka Masala',
        area: 'Indian',
        instructions: 'Marinate chicken in yogurt and spices. Grill until charred. Simmer in a tomato-based curry sauce with cream. Serve with rice or naan.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80',
        source: 'Indian Cuisine Cookbook'
    },
    {
        id: '3',
        name: 'Avocado Toast',
        area: 'American',
        instructions: 'Toast bread until golden. Mash ripe avocado and spread on toast. Top with salt, pepper, and red pepper flakes. Optional: add poached egg on top.',
        image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        source: 'Modern Breakfast Ideas'
    },
    {
        id: '4',
        name: 'Beef Tacos',
        area: 'Mexican',
        instructions: 'Brown ground beef with taco seasoning. Warm tortillas. Assemble with beef, lettuce, tomato, cheese, and sour cream.',
        image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
        source: 'Mexican Street Food'
    },
    {
        id: '5',
        name: 'Vegetable Stir Fry',
        area: 'Chinese',
        instructions: 'Heat oil in wok. Add garlic and ginger. Add vegetables and stir-fry until tender-crisp. Add sauce and toss to coat. Serve over rice.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        source: 'Asian Cooking Essentials'
    },
    {
        id: '6',
        name: 'Greek Salad',
        area: 'Greek',
        instructions: 'Combine chopped cucumber, tomato, red onion, and bell pepper. Add olives and feta cheese. Dress with olive oil, lemon juice, oregano, salt, and pepper.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        source: 'Mediterranean Diet Cookbook'
    }
];