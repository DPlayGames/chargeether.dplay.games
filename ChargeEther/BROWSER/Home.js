ChargeEther.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE(MSG('TITLE'));
		
		let wrapper = UUI.PANEL({
			
			style : {
				position : 'absolute',
				left : 0,
				top : 0,
				width : '100%',
				minHeight : '100%',
				backgroundImage : '/ChargeEther/R/background.jpg'
			},
			
			contentStyle : {
				padding : 20,
				fontSize : 16,
				color : '#979b9b'
			},
			
			c : [
			H1({
				style : {
					fontSize : 35,
					marginBottom : 5,
					color : '#fff'
				},
				c : MSG('TITLE')
			}),
			
			P({
				c : MSG('EXCHANGE_MESSAGE')
			}),
			
			P({
				style : {
					marginTop : 30
				},
				c : MSG('DC_VENDING_MACHINE_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeEther/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : MSG('DC_VENDING_MACHINE_BUTTON'),
				on : {
					tap : () => {
						open('http://vendingmachine.dplay.company');
					}
				}
			}),
			
			P({
				style : {
					marginTop : 30
				},
				c : MSG('TESTNET_FAUCET_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeEther/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : 'Kovan Faucet',
				on : {
					tap : () => {
						open('https://faucet.kovan.network');
					}
				}
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeEther/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : 'Ropsten Ethereum Faucet',
				on : {
					tap : () => {
						open('https://faucet.ropsten.be');
					}
				}
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeEther/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : 'Rinkeby Authenticated Faucet',
				on : {
					tap : () => {
						open('https://faucet.rinkeby.io');
					}
				}
			}),
			
			P({
				style : {
					marginTop : 30
				},
				c : MSG('UNISWAP_MESSAGE')
			}),
			
			UUI.V_CENTER({
				style : {
					marginTop : 10,
					width : 330,
					height : 33,
					backgroundImage : '/ChargeEther/R/button.png',
					cursor : 'pointer',
					textAlign : 'center',
					color : '#c2c0bd',
					fontWeight : 'bold'
				},
				c : MSG('UNISWAP_BUTTON'),
				on : {
					tap : () => {
						open('https://uniswap.exchange/swap?inputCurrency=0x92c5387aCE61F5c505BF2c2D4c84120F0A813d4B');
					}
				}
			})]
		}).appendTo(BODY);
		
		inner.on('close', () => {
			wrapper.remove();
		});
	}
});