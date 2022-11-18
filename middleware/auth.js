import admin from "../config/firebase-config.js"
class Middleware {
	async decodeToken(req, res, next) {
		try {
			const token = req.headers.authorization.split(' ')[1];
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				req.user = decodeValue;
				return next();
			}
			return res.json({ message: 'Un authorize' });
		} catch (e) {
			return res.json({ message: e });
		}
	}
}
export default new Middleware();