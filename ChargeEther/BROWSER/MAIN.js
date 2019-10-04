ChargeEther.MAIN = METHOD({

	run : () => {
		
		MSG.loadCSV('/ChargeEther/R/text.csv', () => {
			
			ChargeEther.MATCH_VIEW({
				uri : '',
				target : ChargeEther.Home
			});
		});
	}
});
