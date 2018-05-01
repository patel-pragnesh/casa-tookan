/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <CoreMIDI/CoreMIDI.h>
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

@interface HyperloopCoreMIDI : NSObject
@end

@implementation HyperloopCoreMIDI




+ (id) Block_void_____struct_MIDINotification___:(KrollCallback *) callback {
	return [^(struct MIDINotification * arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(struct MIDINotification *)];
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

+ (id) Block_void_____struct_MIDIPacketList____void___:(KrollCallback *) callback {
	return [^(struct MIDIPacketList * arg0, void * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(struct MIDIPacketList *)];
			id _arg1 = (arg1 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(void *)];
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
