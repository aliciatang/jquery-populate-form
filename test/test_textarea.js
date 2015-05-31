var assert = chai.assert;
describe('jquery.populate-form.puplateObject', function(){
	describe('textarea', function(){
		it('should set the textarea with given value.', function(){
			var form = $('<form><textarea name="key">old value</textarea></form>');
			assert.deepEqual([{"name":"key", "value":"old value"}], form.serializeArray());
			form.populateObject({"key":"new value"});
			assert.deepEqual([{"name":"key", "value":"new value"}], form.serializeArray());
		});
	})
});
