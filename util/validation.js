const errMsg = require('./errMsg');


/**
 * ==============================================
 * 							Check Is Empty
 * ============================================== 
 */

exports.isEmpty = (prop, next) => {
	const keys = Object.keys(prop);

	// keys.forEach(key => {
	// 	if(!prop[key]) {
	// 		next(new errMsg(`${key} field is required!`, 400));
	// 	};
	// });

  for(i = 0; i < keys.length - 1; i++) {
    if(!prop[keys[i]]) {
      next(new errMsg(`${keys[i]} field is required!`, 400));
      break;
    };
  }
} 


/**
 * ==============================================
 * 							Check Is Minimum
 * ============================================== 
 */

 exports.isMin = (prop, next) => {
 	const keys = Object.keys(prop);

 	keys.forEach(key => {
 		if(prop[key][0].length < prop[key][1]) {
 			return next(new errMsg(`${key} is too short. It should be ${prop[key][1]} charecter long.`));
 		};
 	});
 }



/**
 * ==============================================
 * 							Check Is Maximum
 * ============================================== 
 */

 exports.isMax = (prop, next) => {
 	const keys = Object.keys(prop);

 	keys.forEach(key => {
 		if(prop[key][0].length > prop[key][1]) {
 			return next(new errMsg(`${key} is too long. It should be under ${prop[key][1]} charecter long.`));
 		};
 	});
 }