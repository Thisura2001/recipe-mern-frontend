import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
interface SearchBarProps {
    onSearch: (query: string) => void
}
export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(query)
    }
    return (
        <div className="w-full max-w-3xl mx-auto mb-10">
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search for recipes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <button
                    type="submit"
                    className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                    Search
                </button>
            </form>
        </div>
    )
}
