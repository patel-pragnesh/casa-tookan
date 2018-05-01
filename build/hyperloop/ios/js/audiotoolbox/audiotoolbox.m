/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <AudioToolbox/AudioToolbox.h>
#import <Foundation/Foundation.h>
#import "TiBase.h"
#import "KrollCallback.h"

@interface HyperloopPointer : NSObject
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding;
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding framework:(NSString *)framework classname:(NSString *)classname;
-(void *)pointerValue;
-(SEL)selectorValue;
-(Class)classValue;
-(id)objectValue;
@end

@interface HyperloopUtils : NSObject
+(void)invokeCallback:(id)callback args:(NSArray *)args thisObject:(id)thisObject;
@end

@interface HyperloopAudioToolbox : NSObject
@end

@implementation HyperloopAudioToolbox




+ (id) Block_NSString______AUParameter____float___:(KrollCallback *) callback {
	return [^(AUParameter * arg0, float * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(float *)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_NSString______AUParameterNode____long_:(KrollCallback *) callback {
	return [^(AUParameterNode * arg0, long arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithLong:arg1];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block__Bool_____double____double____long____double____long____double___:(KrollCallback *) callback {
	return [^(double * arg0, double * arg1, long * arg2, double * arg3, long * arg4, double * arg5) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(double *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(double *)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(long *)];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(double *)];
			id _arg4 = (arg4 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(long *)];
			id _arg5 = (arg5 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg5 encoding:@encode(double *)];
			args = @[_arg0, _arg1, _arg2, _arg3, _arg4, _arg5];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block__Bool_____enum_AUHostTransportStateFlags____double____double____double___:(KrollCallback *) callback {
	return [^(enum AUHostTransportStateFlags * arg0, double * arg1, double * arg2, double * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(enum AUHostTransportStateFlags *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(double *)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(double *)];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(double *)];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_float_____AUParameter___:(KrollCallback *) callback {
	return [^(AUParameter * arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			args = @[_arg0];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_float_____AUParameter____NSString___:(KrollCallback *) callback {
	return [^(AUParameter * arg0, NSString * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_int_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long__struct_AudioBufferList___:(KrollCallback *) callback {
	return [^(enum AudioUnitRenderActionFlags * arg0, struct AudioTimeStamp * arg1, unsigned int arg2, long arg3, struct AudioBufferList * arg4) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(enum AudioUnitRenderActionFlags *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioTimeStamp *)];
			id _arg2 = [NSNumber numberWithUnsignedInt:arg2];
			id _arg3 = [NSNumber numberWithLong:arg3];
			id _arg4 = (arg4 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(struct AudioBufferList *)];
			args = @[_arg0, _arg1, _arg2, _arg3, _arg4];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_int_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long__struct_AudioBufferList____int_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long__struct_AudioBufferList____:(KrollCallback *) callback {
	return [^(enum AudioUnitRenderActionFlags * arg0, struct AudioTimeStamp * arg1, unsigned int arg2, long arg3, struct AudioBufferList * arg4, int(^arg5)(enum AudioUnitRenderActionFlags *, struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *)) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(enum AudioUnitRenderActionFlags *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioTimeStamp *)];
			id _arg2 = [NSNumber numberWithUnsignedInt:arg2];
			id _arg3 = [NSNumber numberWithLong:arg3];
			id _arg4 = (arg4 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(struct AudioBufferList *)];
			id _arg5 = (arg5 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg5 encoding:"@?"];
			args = @[_arg0, _arg1, _arg2, _arg3, _arg4, _arg5];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_int_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long__struct_AudioBufferList____union_AURenderEvent____int_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long__struct_AudioBufferList____:(KrollCallback *) callback {
	return [^(enum AudioUnitRenderActionFlags * arg0, struct AudioTimeStamp * arg1, unsigned int arg2, long arg3, struct AudioBufferList * arg4, union AURenderEvent * arg5, int(^arg6)(enum AudioUnitRenderActionFlags *, struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *)) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(enum AudioUnitRenderActionFlags *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioTimeStamp *)];
			id _arg2 = [NSNumber numberWithUnsignedInt:arg2];
			id _arg3 = [NSNumber numberWithLong:arg3];
			id _arg4 = (arg4 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(struct AudioBufferList *)];
			id _arg5 = (arg5 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg5 encoding:@encode(union AURenderEvent *)];
			id _arg6 = (arg6 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg6 encoding:"@?"];
			args = @[_arg0, _arg1, _arg2, _arg3, _arg4, _arg5, _arg6];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_int_____long_long__unsigned_char__long__unsigned_char___:(KrollCallback *) callback {
	return [^(long long arg0, unsigned char arg1, long arg2, unsigned char * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithLongLong:arg0];
			id _arg1 = [NSNumber numberWithUnsignedChar:arg1];
			id _arg2 = [NSNumber numberWithLong:arg2];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(unsigned char *)];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____AUAudioUnit____NSError___:(KrollCallback *) callback {
	return [^(AUAudioUnit * arg0, NSError * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____AUParameter____float_:(KrollCallback *) callback {
	return [^(AUParameter * arg0, float arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithFloat:arg1];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____AudioComponentInstance__OSStatus_:(KrollCallback *) callback {
	return [^(AudioComponentInstance arg0, OSStatus arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(AudioComponentInstance)];
			id _arg1 = [NSNumber numberWithInt:arg1];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____enum_AudioUnitRemoteControlEvent_:(KrollCallback *) callback {
	return [^(enum AudioUnitRemoteControlEvent arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = @(arg0);
			args = @[_arg0];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____enum_AudioUnitRenderActionFlags____struct_AudioTimeStamp____unsigned_int__long_:(KrollCallback *) callback {
	return [^(enum AudioUnitRenderActionFlags * arg0, struct AudioTimeStamp * arg1, unsigned int arg2, long arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(enum AudioUnitRenderActionFlags *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioTimeStamp *)];
			id _arg2 = [NSNumber numberWithUnsignedInt:arg2];
			id _arg3 = [NSNumber numberWithLong:arg3];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____enum_AudioUnitRenderActionFlags__struct_AudioTimeStamp____unsigned_int__long_:(KrollCallback *) callback {
	return [^(enum AudioUnitRenderActionFlags arg0, struct AudioTimeStamp * arg1, unsigned int arg2, long arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = @(arg0);
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioTimeStamp *)];
			id _arg2 = [NSNumber numberWithUnsignedInt:arg2];
			id _arg3 = [NSNumber numberWithLong:arg3];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____long_long__unsigned_char__long__unsigned_char___:(KrollCallback *) callback {
	return [^(long long arg0, unsigned char arg1, long arg2, unsigned char * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithLongLong:arg0];
			id _arg1 = [NSNumber numberWithUnsignedChar:arg1];
			id _arg2 = [NSNumber numberWithLong:arg2];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(unsigned char *)];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____long_long__unsigned_int__unsigned_long_long__float_:(KrollCallback *) callback {
	return [^(long long arg0, unsigned int arg1, unsigned long long arg2, float arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithLongLong:arg0];
			id _arg1 = [NSNumber numberWithUnsignedInt:arg1];
			id _arg2 = [NSNumber numberWithUnsignedLongLong:arg2];
			id _arg3 = [NSNumber numberWithFloat:arg3];
			args = @[_arg0, _arg1, _arg2, _arg3];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____long__struct_AUParameterAutomationEvent___:(KrollCallback *) callback {
	return [^(long arg0, struct AUParameterAutomationEvent * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithLong:arg0];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AUParameterAutomationEvent *)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____long__struct_AURecordedParameterEvent___:(KrollCallback *) callback {
	return [^(long arg0, struct AURecordedParameterEvent * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithLong:arg0];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AURecordedParameterEvent *)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____struct_OpaqueAudioQueue____struct_AudioQueueBuffer___:(KrollCallback *) callback {
	return [^(struct OpaqueAudioQueue * arg0, struct AudioQueueBuffer * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(struct OpaqueAudioQueue *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioQueueBuffer *)];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____struct_OpaqueAudioQueue____struct_AudioQueueBuffer____struct_AudioTimeStamp____unsigned_int__struct_AudioStreamPacketDescription___:(KrollCallback *) callback {
	return [^(struct OpaqueAudioQueue * arg0, struct AudioQueueBuffer * arg1, struct AudioTimeStamp * arg2, unsigned int arg3, struct AudioStreamPacketDescription * arg4) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(struct OpaqueAudioQueue *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioQueueBuffer *)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(struct AudioTimeStamp *)];
			id _arg3 = [NSNumber numberWithUnsignedInt:arg3];
			id _arg4 = (arg4 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(struct AudioStreamPacketDescription *)];
			args = @[_arg0, _arg1, _arg2, _arg3, _arg4];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____unsigned_long_long__float_:(KrollCallback *) callback {
	return [^(unsigned long long arg0, float arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedLongLong:arg0];
			id _arg1 = [NSNumber numberWithFloat:arg1];
			args = @[_arg0, _arg1];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____void_:(KrollCallback *) callback {
	return [^{
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			[HyperloopUtils invokeCallback:callback args:nil thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}


@end
