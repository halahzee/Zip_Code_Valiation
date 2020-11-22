/*

A form input field will accept a zip code...


Test Plan 

Input 				Expected Output
5-5555				invalid
Aa-aaaaa...			invalid
0000				false
00000				invalid
00000-0000			false 
-,.+!@ =/			invalid
12345				valid
12345-6789			valid 
""					valid	
null				invalid
undefined			invalid
06001				valid

*/

let validation = require("../app/zipCodeFunction.js");

let assert = require ('chai').assert; 

describe('Zip Code Tests', function(){

it('Empty string should fail', function(){
	let returnValue = validation.validateZipCode("");
	assert.equal(returnValue, false);

});

it('00000 should fail', function(){
	let returnValue = validation.validateZipCode("00000");
	assert.equal(returnValue, false);

});

it('0 should fail', function(){

	let returnValue = validation.validateZipCode(0);
	assert.equal(returnValue, false);

});

it("0000 should fail", function(){

	let returnValue = validation.validateZipCode(0000);
	assert.equal(returnValue, false);

});

it(" '0' string should fail", function(){

	let returnValue = validation.validateZipCode("0");
	assert.equal(returnValue, false);

});
it(" 'a' should fail", function(){

	let returnValue = validation.validateZipCode('a');
	assert.equal(returnValue, false);

});
it(" 06001 string should fail", function(){

	let returnValue = validation.validateZipCode('06001');
	assert.equal(returnValue, true);

});


});
























