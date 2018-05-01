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
 * CoreMIDI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIThruConnection.h
 * @class
 */
function MIDIThruConnectionParams (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIThruConnectionParams)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$noteNumber = {};
	if (pointer) {
		this.$noteNumber.transform = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$noteNumber.param = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	this.$velocity = {};
	if (pointer) {
		this.$velocity.transform = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$velocity.param = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	this.$keyPressure = {};
	if (pointer) {
		this.$keyPressure.transform = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$keyPressure.param = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	this.$channelPressure = {};
	if (pointer) {
		this.$channelPressure.transform = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$channelPressure.param = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	this.$programChange = {};
	if (pointer) {
		this.$programChange.transform = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$programChange.param = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	this.$pitchBend = {};
	if (pointer) {
		this.$pitchBend.transform = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (pointer) {
		this.$pitchBend.param = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIThruConnectionParams=II[8{MIDIThruConnectionEndpoint=Ii}]I[8{MIDIThruConnectionEndpoint=Ii}][16C]CCCC{MIDITransform=Ss}{MIDITransform=Ss}{MIDITransform=Ss}{MIDITransform=Ss}{MIDITransform=Ss}{MIDITransform=Ss}CCCC[3C]CSS[4S]}', 'CoreMIDI', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIThruConnection');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$noteNumber, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$noteNumber, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$velocity, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$velocity, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$keyPressure, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$keyPressure, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$channelPressure, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$channelPressure, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$programChange, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$programChange, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$pitchBend, 'transform', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
	Object.defineProperty(this.$pitchBend, 'param', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.MIDITransform = require('/hyperloop/coremidi/miditransform');

	MIDIThruConnectionParams._imports = $imports;

	// properties
	Object.defineProperties(MIDIThruConnectionParams.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		numSources: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_numSources) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numSources, 1]);
			},
			enumerable: false
		},
	
		sources: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_sources) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sources, 2]);
			},
			enumerable: false
		},
	
		numDestinations: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_numDestinations) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numDestinations, 3]);
			},
			enumerable: false
		},
	
		destinations: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_destinations) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destinations, 4]);
			},
			enumerable: false
		},
	
		channelMap: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_channelMap) {
				$dispatch(this.$native, 'setValue:atIndex:', [_channelMap, 5]);
			},
			enumerable: false
		},
	
		lowVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_lowVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_lowVelocity, 6]);
			},
			enumerable: false
		},
	
		highVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_highVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_highVelocity, 7]);
			},
			enumerable: false
		},
	
		lowNote: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_lowNote) {
				$dispatch(this.$native, 'setValue:atIndex:', [_lowNote, 8]);
			},
			enumerable: false
		},
	
		highNote: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_highNote) {
				$dispatch(this.$native, 'setValue:atIndex:', [_highNote, 9]);
			},
			enumerable: false
		},
	
		noteNumber: {
			get: function () {
				return this.$noteNumber;
			},
		
			set: function (_noteNumber) {
				this.$noteNumber.transform = _noteNumber.transform;
				this.$noteNumber.param = _noteNumber.param;
			},
			enumerable: false
		},
	
		velocity: {
			get: function () {
				return this.$velocity;
			},
		
			set: function (_velocity) {
				this.$velocity.transform = _velocity.transform;
				this.$velocity.param = _velocity.param;
			},
			enumerable: false
		},
	
		keyPressure: {
			get: function () {
				return this.$keyPressure;
			},
		
			set: function (_keyPressure) {
				this.$keyPressure.transform = _keyPressure.transform;
				this.$keyPressure.param = _keyPressure.param;
			},
			enumerable: false
		},
	
		channelPressure: {
			get: function () {
				return this.$channelPressure;
			},
		
			set: function (_channelPressure) {
				this.$channelPressure.transform = _channelPressure.transform;
				this.$channelPressure.param = _channelPressure.param;
			},
			enumerable: false
		},
	
		programChange: {
			get: function () {
				return this.$programChange;
			},
		
			set: function (_programChange) {
				this.$programChange.transform = _programChange.transform;
				this.$programChange.param = _programChange.param;
			},
			enumerable: false
		},
	
		pitchBend: {
			get: function () {
				return this.$pitchBend;
			},
		
			set: function (_pitchBend) {
				this.$pitchBend.transform = _pitchBend.transform;
				this.$pitchBend.param = _pitchBend.param;
			},
			enumerable: false
		},
	
		filterOutSysEx: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 16);
			},
		
			set: function (_filterOutSysEx) {
				$dispatch(this.$native, 'setValue:atIndex:', [_filterOutSysEx, 16]);
			},
			enumerable: false
		},
	
		filterOutMTC: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 17);
			},
		
			set: function (_filterOutMTC) {
				$dispatch(this.$native, 'setValue:atIndex:', [_filterOutMTC, 17]);
			},
			enumerable: false
		},
	
		filterOutBeatClock: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 18);
			},
		
			set: function (_filterOutBeatClock) {
				$dispatch(this.$native, 'setValue:atIndex:', [_filterOutBeatClock, 18]);
			},
			enumerable: false
		},
	
		filterOutTuneRequest: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 19);
			},
		
			set: function (_filterOutTuneRequest) {
				$dispatch(this.$native, 'setValue:atIndex:', [_filterOutTuneRequest, 19]);
			},
			enumerable: false
		},
	
		reserved2: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 20);
			},
		
			set: function (_reserved2) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reserved2, 20]);
			},
			enumerable: false
		},
	
		filterOutAllControls: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 21);
			},
		
			set: function (_filterOutAllControls) {
				$dispatch(this.$native, 'setValue:atIndex:', [_filterOutAllControls, 21]);
			},
			enumerable: false
		},
	
		numControlTransforms: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 22);
			},
		
			set: function (_numControlTransforms) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numControlTransforms, 22]);
			},
			enumerable: false
		},
	
		numMaps: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 23);
			},
		
			set: function (_numMaps) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numMaps, 23]);
			},
			enumerable: false
		},
	
		reserved3: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 24);
			},
		
			set: function (_reserved3) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reserved3, 24]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIThruConnectionParams;
