/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <CoreText/CoreText.h>
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

@interface HyperloopCoreText : NSObject
@end

@implementation HyperloopCoreText




+ (id) Block__Bool_____enum_CTFontDescriptorMatchingState__struct___CFDictionary___:(KrollCallback *) callback {
	return [^(enum CTFontDescriptorMatchingState arg0, struct __CFDictionary * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = @(arg0);
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(struct __CFDictionary *)];
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

+ (id) Block_void_____double__CFIndex___Bool___Bool___:(KrollCallback *) callback {
	return [^(double arg0, CFIndex arg1, _Bool arg2, _Bool * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithDouble:arg0];
			id _arg1 = [NSNumber numberWithLong:arg1];
			id _arg2 = [NSNumber numberWithBool:arg2];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(_Bool *)];
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


@end
