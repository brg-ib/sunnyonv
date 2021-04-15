import React from 'react'
import NewsCard from './NewsCard'

export default {
  component: NewsCard,
  title: 'NewsCard'
}

const Template = args => <NewsCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New Zealand\'s Ardern credits virus response for election win - The Associated Press',
  urlToImage: 'https://storage.googleapis.com/afs-prod/media/cc960d3469bc40fbb623ffeaeabd3a45/3000.jpeg',
  description: 'AUCKLAND, New Zealand (AP) — A day after winning a second term in a landside victory, New Zealand Prime Minister Jacinda Ardern said Sunday she sees the election result as an endorsement of her...'
}
