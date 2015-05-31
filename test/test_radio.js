var assert = chai.assert;
describe('jquery.populate-form.puplateObject', function(){
	describe('radio', function(){
		it('should set vaue for input type radio, non set', function(){
			var form = $('<form><input type="radio" name="gender" value="f"><input type="radio" name="gender" value="m"></form>');
			form.populateObject({"gender":"f"});
			assert.deepEqual([{"name":"gender", "value":"f"}], form.serializeArray());
		});
		it('should set vaue for input type radio, uncheck', function(){
			var form = $('<form><input type="radio" name="gender" value="f"><input type="radio" name="gender" value="m" checked></form>');
			assert.isTrue($('input[value="m"]', form).is(":checked"));
			form.populateObject({"gender":"f"});
			assert.isTrue($('input[value="f"]', form).is(":checked"));
			assert.isFalse($('input[value="m"]', form).is(":checked"));
			assert.deepEqual([{"name":"gender", "value":"f"}], form.serializeArray());
		});
	})
});
