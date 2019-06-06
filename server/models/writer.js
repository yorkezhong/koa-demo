const theDatabase = require('../config/db.js').theDb;
const writerSchema = theDatabase.import('../schema/writer.js');



// 添加商品
const addwriter = async (text) => {
  await writerSchema.create({
			text,
  });

  return true;
}
const findwriter = async function() {
	return await writerSchema.findAndCount(); 
}






module.exports = {
	addwriter,
	findwriter
}
