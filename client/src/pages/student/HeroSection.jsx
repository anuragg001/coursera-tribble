import { Button } from '@/components/ui/button'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-white text-4xl font-bold mb-4'>Find the best courses for your excellence</h1>
                <p className='text-gray-200 dark:text-gray-400 mb-8'>Discover,Learn and Upskill with out wide range of courses </p>
                <form className='flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                    <input type="text" className='flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 ' placeholder='Search for a course' />
                    <Button className='bg-indigo-600 dark:bg-indigo-700  text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 '>Search</Button>
                </form>
                <Button className='bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-500 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700'>Explore</Button>
            </div>

        </div>
    )
}

export default HeroSection