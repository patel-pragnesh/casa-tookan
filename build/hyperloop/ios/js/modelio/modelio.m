/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <ModelIO/ModelIO.h>
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

@interface HyperloopModelIO : NSObject
@end

@implementation HyperloopModelIO




+ (id) Block_void_____MDLMaterialPropertyNode___:(KrollCallback *) callback {
	return [^(MDLMaterialPropertyNode * arg0) {
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

+ (id) Block_void_____MDLObject____BOOL___:(KrollCallback *) callback {
	return [^(MDLObject * arg0, BOOL * arg1) {
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
