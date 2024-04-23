import { blogs } from './src/pages/Blog/Blog';

const homePageData = {
    path: "/",
    pageData: [
      'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories',
      'Why', '?', 'CONVERSATIONS ABOUT PERSPECTIVES, LIFE-CHANGING ADVENTURES, AND INSPIRATIONAL STORIES THAT WILL LIFT YOUR SPIRITS WHILE ALSO HIGHLIGHTING SIGNIFICANT COMMUNITY FIGURES.',
      'Women in Egypt', 'NOT AS A MATTER OF RIGHTS, BUT AS A MATTER OF RESPECT & BEHAVIOURAL CHANGE.',
      'Subscribe', 'Stay in the loop! Enter your email below to get updates.', 'Submit'
    ]
}

const aboutPage = {
    path: "/About",
    pageData: [
        'So,', 
        'Coffee Addict', 'Talkative', 'Producing', 'Car Lady', 'Blogs', 'Spontaneous', 'Dog Mom', 'Photography', 'Filming', 'Antiques Collector', 'Good Listener', 'Trying New Things', 'Notebooks Collector', 'Doodling', 'Movies over Series', 'Journaling',
        'who am I?', 
        'Fresh out of college with a degree in Digital Media in one hand and a microphone in the other, Canzy bursts onto the scene as your host. This effervescent ball of energy thrives on spontaneity and the thrill of the unexpected. But beneath the infectious enthusiasm lies a keen listener, a digital detective with a nose for exploring the hidden gems – the offbeat stories and extraordinary journeys that lie beneath the surface.', 
        'About the Podcast', 
        'Exploring Perspectives, Adventures, and Inspirations',
        `We're all about diving into fascinating conversations that open your eyes to new perspectives, sharing exciting adventures that'll keep you on the edge of your seat, and telling heartwarming stories that'll lift your spirits. And guess what? We're shining a spotlight on some incredible people making a difference in our community. So, grab a snack, get comfy, and join us for some feel-good vibes and inspiring tales!`
    ]
}

const episodesPage = {
    path: "/Episodes",
    pageData: [
        'Women in Egypt- Fatma Sharmy',
        'Watch our latest episode.', 
        'Watch Now',
        'Recent Episodes'
    ]
}

const blogPage = {
    path: "/Blog",
    pageData: ['The Blog', `Starting this podcast platform has been a dream nurtured over two years. It's been a journey filled with highs and lows, showcasing resilience, self-discovery, and the allure of storytelling.`, 'Explore Other Blogs'],
    blogData: blogs,
}


export const allData = [homePageData, aboutPage, blogPage, episodesPage]
export { blogPage }