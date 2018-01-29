const router = require('express').Router();
const { Conversation, WatchWordOccurrence, Snippet } = require('../db/models');

module.exports = router;

// get a single conversation with all associated watchWordOccurences and snippets
router.get('/:conversationId', (req, res, next) => {
  Conversation.findById(req.params.conversationId, {
    include: [{model: WatchWordOccurrence, include: [{model: Snippet}]}]
  })
    .then(conversations => res.json(conversations))
    .catch(next)
})

router.get('/user/:userId', (req, res, next) => {
  Conversation.findAll({
    where: {
      userId: req.params.userId
    }
  })
  .then(conversations => res.json(conversations))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Conversation.create(req.body)
    .then(conversation => res.json(conversation)) // in the event that we want to send this to the front end
    .catch(next)
})