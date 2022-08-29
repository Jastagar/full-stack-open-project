import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import BlogIndivisual from './BlogIndivisual'

test('Checking th rendering of BlogIndivisual', () => {
    const eachBlog ={
        title: 'Some title this is for testing',
        author: 'Jastagar',
        likes: 12,
        url: 'www.github.com'
    }
    render(<BlogIndivisual eachBlog={eachBlog} blogs={[]} index={5} changeBlogs={() => { console.log('changeBlogs function') }} />)

    const element = screen.getByText('Some title this is for testing')
    expect(element).toBeDefined()
})