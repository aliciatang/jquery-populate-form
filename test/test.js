var assert = chai.assert;
describe('jquery.populate-form.puplateObject', function(){
	describe('input', function(){
		it('should return vaue for input type text', function(){
			var form = $('<form><input type="text" name="key" value=""></form>');
			form.populateObject({"key":"value"});
			assert.equal("value", $('input', form).val());
		});
		it('should return vaue for input type hidden', function(){
			var form = $('<form><input type="hidden" name="key" value=""></form>');
			form.populateObject({"key":"value"});
			assert.equal("value", $('input', form).val());
		});
		it('should return vaue for input type password', function(){
			var form = $('<form><input type="password" name="key" value=""></form>');
			form.populateObject({"key":"value"});
			assert.equal("value", $('input', form).val());
		});
		it('should NOT set vaue for input type submit', function(){
			var form = $('<form><input type="submit" name="key" value="submit"></form>');
			form.populateObject({"key":"value"});
			assert.equal("value", $('input', form).val());
		});
		it('should NOT set vaue for input type button', function(){
			var form = $('<form><input type="button" name="key" value="button"></form>');
			form.populateObject({"key":"value"});
			assert.equal("value", $('input', form).val());
		});
	})
});
