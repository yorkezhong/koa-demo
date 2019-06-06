const writerController = require('../controllers/writer.js');
const router = require('koa-router')();

router.post('/writer', writerController.addwriter);
router.post('/writer/find', writerController.findWriter);

module.exports = router;
