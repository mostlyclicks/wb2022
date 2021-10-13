exports.linkResolver = (doc) => {

  if (doc.type === 'news_and_events') {
    return `/news-events/${doc.uid}`
  }

  if (doc.type === 'project') {
    return `/projects/${doc.uid}`
  }

  if (doc.type === 'employment_opportunity') {
    return `/jobs/${doc.uid}`
  }



}