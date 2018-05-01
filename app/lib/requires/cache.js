module.exports = (function() {
	var self = {};
	var crypt = require("crypt/api");
	
	function getPath(isMakeFile){
		if( OS_ANDROID ){
			var newDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "save");
			if( newDir == null || !newDir.exists() ) newDir.createDirectory();
			var file = Ti.Filesystem.getFile(newDir.nativePath, "save_file.json");
			if( isMakeFile && (file == null || !file.exists()) ) file.write("");
			
			return file.nativePath;
		}
		else return globals.SAVE_FILE_PATH;
	}
	self.getPath = getPath;
	
	function getRSAPath(isMakeFile){
		if( OS_ANDROID ){
			var newDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "jithd");
			if( newDir == null || !newDir.exists() ) newDir.createDirectory();
			
			var file = Ti.Filesystem.getFile(newDir.nativePath, "jithd.json");
			if( isMakeFile && (file == null || !file.exists()) ) file.write("");
			
			return file.nativePath;
		}
		else return globals.CRYPT_FILE_PATH;
	}
	self.getRSAPath = getRSAPath;
	
	function getData(){
		var f = Ti.Filesystem.getFile( getPath(false) );
		var data = f.read();
		if ( !data || data.length <= 0 ) data = "{}";
		else{
			try{
				var rsa_info = loadRsa();
				var RSAkey = (globals.Crypt_key == null)? (globals.Crypt_key = crypt.loadRSAkey(rsa_info.a)): globals.Crypt_key;
				var DecryptionResult = crypt.decrypt(data.toString(), RSAkey);
				data = DecryptionResult.plaintext;
				if( checkExists() && (data == undefined || data.length <= 0) ) throw new Error("");
			}
			catch(e){
				throw new Error("*** Access deny.");
			}
		}
		return JSON.parse(data);
	}
	
	self.data = null;
	
	self.init = function(){
		var f = Ti.Filesystem.getFile( getPath(false) );
	    if( f != null && f.exists() ){
	    	f.deleteFile();
	    }
	    
	    var f2 = Ti.Filesystem.getFile( getRSAPath(false) );
	    if( f2 != null && f2.exists() ) f2.deleteFile();
	    
	    var f3 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "qr_address.png");
		if( f3 != null && f3.exists() ) f3.deleteFile();
		
		Ti.App.Properties.setString("current_address", null);
	    
	    load();
	};
	
	function loadRsa(){
		var f = Ti.Filesystem.getFile( getRSAPath(false) );
		
		var json = f.read();
		if ( !json || json.length <= 0 ) json = "{}";
		
		return JSON.parse(json);
	};
	self.loadRsa = loadRsa;
	
	function checkExists(){
		var exists = false;
		if( OS_ANDROID ){
			var newDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "save");
			var f = null;
			var f2 = null;
			if( newDir != null && newDir.exists() ){
				f = Ti.Filesystem.getFile(newDir.nativePath, "save_file.json");
			}
			var newDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "jithd");
			if( newDir != null && newDir.exists() ){
				f2 = Ti.Filesystem.getFile(newDir.nativePath, "jithd.json");
			}
			var a = (f == null)? false: f.exists();
			var b = (f2 == null)? false: f2.exists();
			exists = a && b;
		}
		else{
			var f = Ti.Filesystem.getFile( getPath(false) );
			var f2  = Ti.Filesystem.getFile( getRSAPath(false) );
			exists = f != null && f.exists() && f2 != null && f2.exists();
		}
		
		return exists;
	};
	self.checkExists = checkExists;
	
	self.saveRsa = function( data ){
		var f  = Ti.Filesystem.getFile( getRSAPath(true) );
		f.write(JSON.stringify( data ));
	};
	
	function load(){
		try{
			globals.datas = getData();
			self.data = globals.datas;
			return true;
		}
		catch(e){
			return false;
		}
	};
	self.load = load;
	
	self.save = function(){
		var f = Ti.Filesystem.getFile( getPath(true) );
	    
	    var str_data = JSON.stringify(self.data);
	    var rsa_info = loadRsa();
		    
	    var RSAkey = (globals.Crypt_key == null)? (globals.Crypt_key = crypt.loadRSAkey(rsa_info.a)): globals.Crypt_key;
	    var PubKey = crypt.publicKeyString(RSAkey);
	    
	    var EncryptionResult = crypt.encrypt(str_data, PubKey);
	    str_data = EncryptionResult.cipher;
	    f.write(str_data);
	};
	
	return self;
}());