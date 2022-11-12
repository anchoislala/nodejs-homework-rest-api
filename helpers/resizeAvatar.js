var Jimp = require("jimp");
const path = require("path");

const resizeAvatar = async (req) => {

    const filePath = path.join(__dirname, "../", "temp", req.file.originalname);

	return await Jimp.read(filePath).then((image) =>
		image.resize(250, 250).write(filePath)
	);
};

module.exports = resizeAvatar;