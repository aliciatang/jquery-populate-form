var assert = chai.assert;
describe('jquery.populate-form.puplateObject', function(){
	describe('select', function(){
		it('should select the option with given value.', function(){
			var form = $('<form><select name="lang"><option value="us-en">us-en</option></select></form>');
			form.populateObject({"lang":"us-en"});
			assert.isTrue($('option', form).is(":selected"));
			assert.deepEqual([{"name":"lang", "value":"us-en"}], form.serializeArray());
		});
		it('should check multip select options.', function(){
			var form = $('<form><select name="lang" multiple><option value="us-en">English</option><option value="zh-cn">Chinese</option><select></form>');
			form.populateObject({"lang": ["zh-cn", "us-en"]});
			assert.isTrue($('option[value="us-en"]', form).is(":selected"));
			assert.isTrue($('option[value="zh-cn"]', form).is(":selected"));
			assert.deepEqual([{"name":"lang", "value":"us-en"},{"name":"lang", "value":"zh-cn"}], form.serializeArray());
		});
		it('should unselect non value option.', function(){
			var form = $('<form><select name="lang"><option value="us-en"><option value="zh-cn" selected></form>');
			assert.isTrue($('option[value="zh-cn"]', form).is(":selected"));
			form.populateObject({"lang":["us-en"]});
			assert.isTrue($('option[value="us-en"]', form).is(":selected"));
			assert.isFalse($('option[value="zh-cn"]', form).is(":selected"));
			assert.deepEqual([{"name":"lang", "value":"us-en"}], form.serializeArray());
		});
	})
});
