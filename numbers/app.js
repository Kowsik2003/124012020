const express = require('express');
const axios = require('axios');
const sort = require('fast-sort').sort; 
const app = express();

app.get('/number',async (req,res) => {
	// const resp = await axios.get(req.query.url);
	// let nu = [12,2,3,1],ms = [6,5,7,2,3,4];
	let nums = []
	if(Array.isArray(req.query.url)) {
		req.query.url.forEach( async el => {
			const resp = await axios.get(el);
			nums = [...nums,resp.data.numbers];
		})
	} else {
			const resp = await axios.get(req.query.url);
			nums = [...nums,resp.data.numbers];
	}


	nums = sort(nums).asc();

	let nums2 = [];

	nums.forEach(el => {
		if(nums2.length == 0)
			nums2.push(el);
		else {
			if(el>nums2[nums2.length-1])
				nums2.push(el);

		}
	})
	

	res.status(200).json({
		status : 'success',
		data : {
			numbers : nums2
		}
	})
})

app.listen(3000);
