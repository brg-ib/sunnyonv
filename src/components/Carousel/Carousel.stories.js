import React from 'react'
import Carousel from './Carousel'

export default {
  component: Carousel,
  title: 'Carousel'
}

const Template = args => <Carousel {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      title: 'New Zealand\'s Ardern credits virus response for election win - The Associated Press',
      description: 'AUCKLAND, New Zealand (AP) — A day after winning a second term in a landside victory, New Zealand Prime Minister Jacinda Ardern said Sunday she sees the election result as an endorsement of her...',
      urlToImage: 'https://storage.googleapis.com/afs-prod/media/cc960d3469bc40fbb623ffeaeabd3a45/3000.jpeg'
    },
    {
      title: "Ratcliffe: No evidence tying Hunter Biden's laptop to Russia - Fox News",
      description: 'Director of National Intelligence John Ratcliffe on Monday said that Hunter Biden’s laptop “is not part of some Russian disinformation campaign,” amid claims...',
      urlToImage: 'https://i.ytimg.com/vi/bGXYq8pcW28/maxresdefault.jpg'
    },
    {
      title: "Federal judge halts Trump's proposed food stamp cutback for 700,000 Americans - NBC News",
      description: 'A federal judge struck down a December Trump administration proposal that would have reduced SNAP, or food stamp, benefits to roughly 700,000 people.',
      urlToImage: 'https://media4.s-nbcnews.com/j/newscms/2020_43/3421158/201019-food-stamps-mc-1227_7a905fe7bd4b06a5f189ec657254f8db.nbcnews-fp-1200-630.jpg'
    },
    {
      title: "Federal judge halts Trump's proposed food stamp cutback for 700,000 Americans - NBC News",
      description: 'A federal judge struck down a December Trump administration proposal that would have reduced SNAP, or food stamp, benefits to roughly 700,000 people.',
      urlToImage: 'https://media4.s-nbcnews.com/j/newscms/2020_43/3421158/201019-food-stamps-mc-1227_7a905fe7bd4b06a5f189ec657254f8db.nbcnews-fp-1200-630.jpg'
    },
    {
      title: "Federal judge halts Trump's proposed food stamp cutback for 700,000 Americans - NBC News",
      description: 'A federal judge struck down a December Trump administration proposal that would have reduced SNAP, or food stamp, benefits to roughly 700,000 people.',
      urlToImage: 'https://media4.s-nbcnews.com/j/newscms/2020_43/3421158/201019-food-stamps-mc-1227_7a905fe7bd4b06a5f189ec657254f8db.nbcnews-fp-1200-630.jpg'
    },
    {
      title: "Federal judge halts Trump's proposed food stamp cutback for 700,000 Americans - NBC News",
      description: 'A federal judge struck down a December Trump administration proposal that would have reduced SNAP, or food stamp, benefits to roughly 700,000 people.',
      urlToImage: 'https://media4.s-nbcnews.com/j/newscms/2020_43/3421158/201019-food-stamps-mc-1227_7a905fe7bd4b06a5f189ec657254f8db.nbcnews-fp-1200-630.jpg'
    },
    {
      title: "Federal judge halts Trump's proposed food stamp cutback for 700,000 Americans - NBC News",
      description: 'A federal judge struck down a December Trump administration proposal that would have reduced SNAP, or food stamp, benefits to roughly 700,000 people.',
      urlToImage: 'https://media4.s-nbcnews.com/j/newscms/2020_43/3421158/201019-food-stamps-mc-1227_7a905fe7bd4b06a5f189ec657254f8db.nbcnews-fp-1200-630.jpg'
    }
  ]
}
