const writerModel = require('../models/writer.js');


const addwriter = async function() {
  const data = this.request.body;
  let text=data.text

  let success = false;
  let msg = '';

 
    await writerModel.addwriter(text);
    success = true;
    msg = '添加成功！';
  this.body = {
    success,
    msg
  }
}
const findWriter = async function() {
	const result = await writerModel.findwriter();

	this.body = {
					success: true,
					total: result.count,
					list: result.rows,
					msg: '获取文章列表成功！'
	}
}

module.exports = {
	addwriter,
	findWriter
}
