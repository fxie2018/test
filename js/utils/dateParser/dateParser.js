define('dateParser', [
	], function() {
	var DateParser = function() {};

	DateParser.prototype.classicDate = function() {
		var self = this;
		var d = new Date();
		var date = {
			date: d ,
			day: d.getDate(),
			dayNum: d.getDay(),
			dayName: this.getDayName(d.getDay()),
			month: d.getMonth()+1,
			monthName: this.getMonthName(d.getMonth()),
			year: d.getFullYear(),
			hours: this.getAmPmHours(d.getHours()),
			minutes: this.AddZero(d.getMinutes()),
			secondes: this.AddZero(d.getSeconds()),
			pmam: self.getPmam(d.getHours()),
			language: 0
		}

		return date;
	}
	
	DateParser.prototype.AddZero = function(i) {
		if (i<10) {
			i = "0" + i;
		}
		return i;
	}

	DateParser.prototype.getAmPmHours = function(hours) {
		var hours = hours;

  		return hours;
	}

	DateParser.prototype.getPmam = function(h) {
		if( h>=12 ) {
			return 'PM';
		}
		return 'AM';
	}

	DateParser.prototype.getDayName = function(i) {
		var days = [ 'Dimanche','Lundi','Mardi','mercredi', 'Jeudi', 'Vendredi','Samedi'];
		return days[i];
	}

	DateParser.prototype.getMonthName = function(i) {
		var months = ['janvier','février','mars','avril', 'mai', 'juin','juillet','août','septembre','octobre','novembre', 'décembre'];
		return months[i];
	}

	DateParser.prototype.newsFormat = function(i) {
		var formattedDate = new Date(i);
					
		var dd = ("0"+formattedDate.getDate()).slice(-2);
		var mm = ("0"+(formattedDate.getMonth()+1)).slice(-2);
		var hh = ("0"+formattedDate.getHours()).slice(-2);
		var ii = ("0"+formattedDate.getMinutes()).slice(-2);
		
		pubDate = dd + '/' + mm + ' ' + hh + ':' + ii;

		return pubDate;
	}

	return DateParser;
});