/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <Metal/Metal.h>
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

@interface HyperloopMetal : NSObject
@end

@implementation HyperloopMetal




+ (id) Block_void_____id_MTLCommandBuffer__:(KrollCallback *) callback {
	return [^(id<MTLCommandBuffer> arg0) {
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

+ (id) Block_void_____id_MTLComputePipelineState___MTLComputePipelineReflection____NSError___:(KrollCallback *) callback {
	return [^(id<MTLComputePipelineState> arg0, MTLComputePipelineReflection * arg1, NSError * arg2) {
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

+ (id) Block_void_____id_MTLComputePipelineState___NSError___:(KrollCallback *) callback {
	return [^(id<MTLComputePipelineState> arg0, NSError * arg1) {
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

+ (id) Block_void_____id_MTLDrawable__:(KrollCallback *) callback {
	return [^(id<MTLDrawable> arg0) {
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

+ (id) Block_void_____id_MTLFunction___NSError___:(KrollCallback *) callback {
	return [^(id<MTLFunction> arg0, NSError * arg1) {
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

+ (id) Block_void_____id_MTLLibrary___NSError___:(KrollCallback *) callback {
	return [^(id<MTLLibrary> arg0, NSError * arg1) {
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

+ (id) Block_void_____id_MTLRenderPipelineState___MTLRenderPipelineReflection____NSError___:(KrollCallback *) callback {
	return [^(id<MTLRenderPipelineState> arg0, MTLRenderPipelineReflection * arg1, NSError * arg2) {
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

+ (id) Block_void_____id_MTLRenderPipelineState___NSError___:(KrollCallback *) callback {
	return [^(id<MTLRenderPipelineState> arg0, NSError * arg1) {
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

+ (id) Block_void_____void____NSUInteger_:(KrollCallback *) callback {
	return [^(void * arg0, NSUInteger arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(void *)];
			id _arg1 = [NSNumber numberWithUnsignedLong:arg1];
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


@end
