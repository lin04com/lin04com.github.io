/**
 * Date Picker
 * Author ahschl0322@gmail.com
 * Calendrier Page
 */
function Calendar(options){
	if(this instanceof Calendar){
		var self = this;
		this.Today = new Date();
		this.year = options.year;
		this.month = options.month;
		this.date = options.date;
		this.start = options.start || 1970;		//开始年份
		this.end = options.end || 2200;			//结束年份
		this.YearDic = [];
		this.DateDom = options.id;				//DateDom

		//bind class name
		this.UiMaker = {
			getYear : self.DateDom.find('.y'),
			getMonth : self.DateDom.find('.m'),
			getDate : self.DateDom.find('.d')
		};

		this.MonthDic = function(){
			var _temp = {};
			for(var i = 1; i < 13; i++){
				_temp[i] = i;
			}
			return _temp;
		}();

		this.initlize(); //Initlaze...

	}else{
		return new Calendar(options);
	}
}

Calendar.prototype = {
	constructor : Calendar,
	initlize : function(){
		this.setDate(this.date);
		this.initYearDic(this.start, this.end);
		return this;
	},
	initYearDic : function(start, end){
		var s = start, e = end;
		while(s <= e){
			this.YearDic[s] = s;
			s ++;
		}
	},
	setDate : function(dateString){
		dateString = dateString ? new Date(dateString.replace(/[\/-]0?/g, "/")) : new Date();
		date = new Date(dateString);
		var _year = this.YearSubStr(date.getFullYear()),
			_month = this.prefixInteger(date.getMonth() + 1),
			_date = this.prefixInteger(date.getDate());

		this.UiMaker.getYear.text(_year);
		this.UiMaker.getMonth.text(_month);
		this.UiMaker.getDate.text(_date);
		this.DateDom.data('date-now', date);
		this.DateDom.find('.now').attr('date', date);
	},
	change : function(action, type){
		var self = this
		 	, temp, date = []
			, startDay = new Date(this.DateDom.data('date-now'))
			, _year = Number(startDay.getFullYear())
			, _month = Number(startDay.getMonth() + 1)
			, _date = Number(startDay.getDate())
			, countDate = new Date(_year, _month, 0).getDate()
		;

		switch(type){
			case 'year' :
				temp = action == 'up' ? _year + 1 : _year - 1;
				if(self.YearDic[temp]){
					_year = self.YearDic[temp];
				}
				break;
			case 'month' :
				temp = action == 'up' ? _month + 1 : _month - 1;
				if(self.MonthDic[temp]){
					_month = self.MonthDic[temp];
				}
				break;
			case 'date' :
				temp = action == 'up' ? _date + 1 : _date - 1;
				if(temp < 1 || temp > countDate){
					temp = countDate;
					return;
				}
				_date = temp;
				break;
			default :
		}

		date.push(this.prefixInteger(_month));
		date.push(this.prefixInteger(_date));
		date.push(this.prefixInteger(_year, 4));

		temp = date.join('/');

		if(new Date(new Date().toDateString()).getTime() > new Date(temp).getTime()){
			return false;
		}

		this.setDate(temp);
		return this;
	},
	prefixInteger : function(num, length) {
		length = length || 2;
		return (num / Math.pow(10, length)).toFixed(length).substr(2);
	},
	YearSubStr : function(year, start){
		try{
			start = start || 2;
			return this.prefixInteger(year.toString().substring(start) || 0);
		}catch(e){}
	}
};
