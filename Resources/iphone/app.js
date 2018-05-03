




var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;















Alloy.Globals = {
	currentTab: 1,
	copyright: '© 2015-2017 IndieSquare Inc.',

	datas: null,
	lastUrl: null,

	auth_id: 'indietest',
	auth_pass: 'indie4936test',

	sender_id: '35204291973',
	api_key: 'a6db8ab60116e98d7920e5c65545835c',
	demopassphrase: 'just love know never want time out there make look eye down',

	SAVE_FILE_PATH: Ti.Filesystem.applicationDataDirectory + '/save_file.json',
	CRYPT_FILE_PATH: Ti.Filesystem.applicationDataDirectory + '/jithd.json',

	network: 'livenet' };

function isiPhoneX() {
	return Ti.Platform.displayCaps.platformWidth === 375 && Ti.Platform.displayCaps.platformHeight == 812 ||
	Ti.Platform.displayCaps.platformHeight === 812 && Ti.Platform.displayCaps.platformWidth == 375;
}

Alloy.Globals.isiPhoneX = isiPhoneX();

Alloy.Globals.isAndroid = false;

Alloy.Globals.mainColor = "#e7e7e7";
Alloy.Globals.bitcoinColor = Alloy.Globals.mainColor;
Alloy.Globals.ethereumColor = "#5572c9";
Alloy.Globals.tabBarHeight = 57;
Alloy.Globals.topBarHeight = 60;
Alloy.Globals.userEthTokens = 'userEthTokensV3';
if (Alloy.Globals.isiPhoneX) {
	Alloy.Globals.tabBarHeight = 72;
	Alloy.Globals.topBarHeight = 75;
}
if (false) {
	Alloy.Globals.topBarHeight = 55;
}


Alloy.createController('index');