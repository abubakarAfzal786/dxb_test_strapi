module.exports = {
    load: {
      before: ['validateUser', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
      
      ],
      after: ['router'],
    },
    // settings: {
    //   validateUser: {
    //     enabled: true,
    //   },
    // },
  };