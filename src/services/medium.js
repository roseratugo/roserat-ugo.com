const MEDIUM_USERNAME = '@roseratugo'

function extractImageFromContent(content) {
  const pictureMatch = content.match(/<picture[^>]*>[\s\S]*?<source[^>]*data-testid="og"[^>]*srcset="([^"]*)"[\s\S]*?<\/picture>/)
  if (pictureMatch) {
    const urls = pictureMatch[1].split(',')
    const lastUrl = urls[urls.length - 1].trim().split(' ')[0]
    return lastUrl
  }

  const mediumImageMatch = content.match(/https:\/\/miro\.medium\.com\/[^"'\s]+/)
  if (mediumImageMatch) {
    return mediumImageMatch[0].replace(/resize:fill:\d+:\d+/, 'resize:fill:1200:800')
  }

  const mainImageMatch = content.match(/<img[^>]*class="[^"]*medium-zoom-image[^"]*"[^>]*src="([^"]*)"/)
  if (mainImageMatch) return mainImageMatch[1]

  const firstImageMatch = content.match(/<img[^>]*src="([^"]*)"/)
  if (firstImageMatch) return firstImageMatch[1]

  return '/images/blog-placeholder.jpg'
}

export async function getMediumArticles() {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`)
    const data = await response.json()

    if (data.status === 'ok') {
      return data.items.map(item => {
        let imageUrl = item.thumbnail
        if (!imageUrl || imageUrl.includes('stat?event=post.clientViewed')) {
          imageUrl = extractImageFromContent(item.content)
        }
        
        if (imageUrl && imageUrl.includes('miro.medium.com')) {
          imageUrl = imageUrl.replace(/resize:fit:\d+/, 'resize:fit:1200')
        }

        return {
          title: item.title,
          subtitle: item.description.replace(/<[^>]*>/g, '').slice(0, 120) + '...',
          thumbnail: imageUrl,
          link: item.link,
          publishDate: new Date(item.pubDate).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          readingTime: Math.ceil(item.content.split(' ').length / 200)
        }
      })
    }
    return []
  } catch (error) {
    return []
  }
} 