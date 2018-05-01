/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports;

/**
 * GSS//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5.h
 * @class
 */
function gss_krb5_lucid_context_v1 (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_krb5_lucid_context_v1)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$rfc1964_kd = {};
	if (pointer) {
		this.$rfc1964_kd.sign_alg = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$rfc1964_kd.seal_alg = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$rfc1964_kd.ctx_key = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	this.$cfx_kd = {};
	if (pointer) {
		this.$cfx_kd.have_acceptor_subkey = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$cfx_kd.ctx_key = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$cfx_kd.acceptor_subkey = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_krb5_lucid_context_v1=IIIQQI{gss_krb5_rfc1964_keydata=II{gss_krb5_lucid_key=II^v}}{gss_krb5_cfx_keydata=I{gss_krb5_lucid_key=II^v}{gss_krb5_lucid_key=II^v}}}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$rfc1964_kd, 'sign_alg', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$rfc1964_kd, 'seal_alg', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$rfc1964_kd, 'ctx_key', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$cfx_kd, 'have_acceptor_subkey', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$cfx_kd, 'ctx_key', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$cfx_kd, 'acceptor_subkey', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.gss_krb5_rfc1964_keydata = require('/hyperloop/gss/gss_krb5_rfc1964_keydata');
	$imports.gss_krb5_cfx_keydata = require('/hyperloop/gss/gss_krb5_cfx_keydata');

	gss_krb5_lucid_context_v1._imports = $imports;

	// properties
	Object.defineProperties(gss_krb5_lucid_context_v1.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		initiate: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_initiate) {
				$dispatch(this.$native, 'setValue:atIndex:', [_initiate, 1]);
			},
			enumerable: false
		},
	
		endtime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_endtime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_endtime, 2]);
			},
			enumerable: false
		},
	
		send_seq: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_send_seq) {
				$dispatch(this.$native, 'setValue:atIndex:', [_send_seq, 3]);
			},
			enumerable: false
		},
	
		recv_seq: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_recv_seq) {
				$dispatch(this.$native, 'setValue:atIndex:', [_recv_seq, 4]);
			},
			enumerable: false
		},
	
		protocol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_protocol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_protocol, 5]);
			},
			enumerable: false
		},
	
		rfc1964_kd: {
			get: function () {
				return this.$rfc1964_kd;
			},
		
			set: function (_rfc1964_kd) {
				this.$rfc1964_kd.sign_alg = _rfc1964_kd.sign_alg;
				this.$rfc1964_kd.seal_alg = _rfc1964_kd.seal_alg;
				this.$rfc1964_kd.ctx_key = _rfc1964_kd.ctx_key;
			},
			enumerable: false
		},
	
		cfx_kd: {
			get: function () {
				return this.$cfx_kd;
			},
		
			set: function (_cfx_kd) {
				this.$cfx_kd.have_acceptor_subkey = _cfx_kd.have_acceptor_subkey;
				this.$cfx_kd.ctx_key = _cfx_kd.ctx_key;
				this.$cfx_kd.acceptor_subkey = _cfx_kd.acceptor_subkey;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_krb5_lucid_context_v1;
