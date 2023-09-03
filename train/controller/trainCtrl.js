const axios = require('axios');
const sort = require('fast-sort').sort;
const AppError = require('../utils/AppError')
exports.getAllTrain = async (req,res,next) => {
	try {
		let trains = await axios.get('http://20.244.56.144/train/trains',{
			headers : {
				'Authorization' : 'Bearer ' + process.env.Token
			}
		});
		trains = trains.data;

		trains = sort(trains).by([{asc : t => t.price.sleeper},{desc : t => t.seatsAvailable.sleeper},{desc : t => t.departureTime.Hours}])
		
		res.status(200).json({
			status : 'success',
			data : {
				no_of_trains : trains.length,
				trains
			}
		})
	} catch(err) {
		next(err);
	}
}