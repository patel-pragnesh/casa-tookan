/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <AVFoundation/AVFoundation.h>
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

@interface HyperloopAVFoundation : NSObject
@end

@implementation HyperloopAVFoundation




+ (id) Block_AVAudioBuffer______unsigned_int__enum_AVAudioConverterInputStatus___:(KrollCallback *) callback {
	return [^(unsigned int arg0, enum AVAudioConverterInputStatus * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedInt:arg0];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(enum AVAudioConverterInputStatus *)];
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

+ (id) Block_BOOL_____AVAudioUnitComponent____BOOL___:(KrollCallback *) callback {
	return [^(AVAudioUnitComponent * arg0, BOOL * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(BOOL *)];
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

+ (id) Block_enum_AVAudioEngineManualRenderingStatus_____unsigned_int__struct_AudioBufferList____int___:(KrollCallback *) callback {
	return [^(unsigned int arg0, struct AudioBufferList * arg1, int * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedInt:arg0];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct AudioBufferList *)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(int *)];
			args = @[_arg0, _arg1, _arg2];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_struct_AudioBufferList______unsigned_int_:(KrollCallback *) callback {
	return [^(unsigned int arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedInt:arg0];
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

+ (id) Block_void______AVAudioUnit____NSError___:(KrollCallback *) callback {
	return [^(AVAudioUnit * arg0, NSError * arg1) {
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

+ (id) Block_void_____AVAsynchronousCIImageFilteringRequest___:(KrollCallback *) callback {
	return [^(AVAsynchronousCIImageFilteringRequest * arg0) {
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

+ (id) Block_void_____AVAudioPCMBuffer____AVAudioTime___:(KrollCallback *) callback {
	return [^(AVAudioPCMBuffer * arg0, AVAudioTime * arg1) {
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

+ (id) Block_void_____AVMetadataItemValueRequest___:(KrollCallback *) callback {
	return [^(AVMetadataItemValueRequest * arg0) {
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

+ (id) Block_void_____BOOL_:(KrollCallback *) callback {
	return [^(BOOL arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
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

+ (id) Block_void_____BOOL__NSError___:(KrollCallback *) callback {
	return [^(BOOL arg0, NSError * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
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

+ (id) Block_void_____CMSampleBufferRef__AVCaptureBracketedStillImageSettings____NSError___:(KrollCallback *) callback {
	return [^(CMSampleBufferRef arg0, AVCaptureBracketedStillImageSettings * arg1, NSError * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(CMSampleBufferRef)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			id _arg2 = (arg2 == nil || [(id)arg2 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg2 encoding:@encode(id)];
			args = @[_arg0, _arg1, _arg2];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____CMSampleBufferRef__NSError___:(KrollCallback *) callback {
	return [^(CMSampleBufferRef arg0, NSError * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(CMSampleBufferRef)];
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

+ (id) Block_void_____CMTime_:(KrollCallback *) callback {
	return [^(CMTime arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(CMTime)];
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

+ (id) Block_void_____CMTime__struct_CGImage____CMTime__enum_AVAssetImageGeneratorResult__NSError___:(KrollCallback *) callback {
	return [^(CMTime arg0, struct CGImage * arg1, CMTime arg2, enum AVAssetImageGeneratorResult arg3, NSError * arg4) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(CMTime)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct CGImage *)];
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(CMTime)];
			id _arg3 = @(arg3);
			id _arg4 = (arg4 == nil || [(id)arg4 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg4 encoding:@encode(id)];
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

+ (id) Block_void_____NSArray_AVFileType____:(KrollCallback *) callback {
	return [^(NSArray<AVFileType> * arg0) {
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

+ (id) Block_void_____NSData____NSError___:(KrollCallback *) callback {
	return [^(NSData * arg0, NSError * arg1) {
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

+ (id) Block_void_____NSData____NSURLResponse____NSError___:(KrollCallback *) callback {
	return [^(NSData * arg0, NSURLResponse * arg1, NSError * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			id _arg2 = (arg2 == nil || [(id)arg2 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg2 encoding:@encode(id)];
			args = @[_arg0, _arg1, _arg2];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void_____NSURL____NSURLResponse____NSError___:(KrollCallback *) callback {
	return [^(NSURL * arg0, NSURLResponse * arg1, NSError * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			id _arg2 = (arg2 == nil || [(id)arg2 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg2 encoding:@encode(id)];
			args = @[_arg0, _arg1, _arg2];
			[HyperloopUtils invokeCallback:callback args:args thisObject:callback];
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_async(dispatch_get_main_queue(), Callback);
		}
	} copy];
}

+ (id) Block_void______Bool_:(KrollCallback *) callback {
	return [^(_Bool arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
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

+ (id) Block_void_____enum_AVAudioPlayerNodeCompletionCallbackType_:(KrollCallback *) callback {
	return [^(enum AVAudioPlayerNodeCompletionCallbackType arg0) {
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
