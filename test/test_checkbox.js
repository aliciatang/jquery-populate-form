var assert = chai.assert;
describe('jquery.populate-form.puplateObject', function(){
	describe('checkbox', function(){
		it('should check the box.', function(){
			var form = $('<form><input type="checkbox" name="lang" value="us-en"></form>');
			form.populateObject({"lang":"us-en"});
			assert.isTrue($('input', form).is(":checked"));
			assert.deepEqual([{"name":"lang", "value":"us-en"}], form.serializeArray());
		});
		it('should check both boxes.', function(){
			var form = $('<form><input type="checkbox" name="lang" value="us-en"><input type="checkbox" name="lang" value="zh-cn"></form>');
			form.populateObject({"lang":["us-en","zh-cn"]});
			assert.isTrue($('input[value="us-en"]', form).is(":checked"));
			assert.isTrue($('input[value="zh-cn"]', form).is(":checked"));
			assert.deepEqual([{"name":"lang", "value":"us-en"},{"name":"lang", "value":"zh-cn"}], form.serializeArray());
		});
		it('should uncheck non value box.', function(){
			var form = $('<form><input type="checkbox" name="lang" value="us-en"><input type="checkbox" name="lang" value="zh-cn" checked></form>');
			assert.isTrue($('input[value="zh-cn"]', form).is(":checked"));
			form.populateObject({"lang":["us-en"]});
			assert.isTrue($('input[value="us-en"]', form).is(":checked"));
			assert.isFalse($('input[value="zh-cn"]', form).is(":checked"));
			assert.deepEqual([{"name":"lang", "value":"us-en"}], form.serializeArray());
		});
	})
});
