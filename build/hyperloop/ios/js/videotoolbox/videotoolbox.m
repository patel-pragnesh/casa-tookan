/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <VideoToolbox/VideoToolbox.h>
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

@interface HyperloopVideoToolbox : NSObject
@end

@implementation HyperloopVideoToolbox




+ (id) Block_OSStatus_____CMSampleBufferRef_:(KrollCallback *) callback {
	return [^(CMSampleBufferRef arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(CMSampleBufferRef)];
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

+ (id) Block_void_____int__enum_VTDecodeInfoFlags__struct___CVBuffer____CMTime__CMTime_:(KrollCallback *) callback {
	return [^(int arg0, enum VTDecodeInfoFlags arg1, struct __CVBuffer * arg2, CMTime arg3, CMTime arg4) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithInt:arg0];
			id _arg1 = @(arg1);
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(struct __CVBuffer *)];
			id _arg3 = [HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(CMTime)];
			id _arg4 = [HyperloopPointer pointer:(const void *)&arg4 encoding:@encode(CMTime)];
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

+ (id) Block_void_____int__enum_VTEncodeInfoFlags__struct_opaqueCMSampleBuffer___:(KrollCallback *) callback {
	return [^(int arg0, enum VTEncodeInfoFlags arg1, struct opaqueCMSampleBuffer * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithInt:arg0];
			id _arg1 = @(arg1);
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(struct opaqueCMSampleBuffer *)];
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


@end
