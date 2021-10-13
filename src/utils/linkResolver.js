exports.linkResolver = (doc) => {

  if (doc.type === 'news_and_events') {
    return `/news-events/${doc.uid}`
  }

  

}