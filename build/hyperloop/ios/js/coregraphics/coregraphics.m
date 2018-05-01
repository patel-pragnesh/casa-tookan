/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <CoreGraphics/CoreGraphics.h>
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

@interface HyperloopCoreGraphics : NSObject
@end

@implementation HyperloopCoreGraphics


+(id)CGRectMake:(NSArray *)args {
#ifdef TARGET_IPHONE_SIMULATOR
	if ([args count] != 4) {
		@throw [NSException exceptionWithName:@"InvalidArgument" reason:[NSString stringWithFormat:@"CGRectMake requires 4 arguments but only %lu passed", (unsigned long)[args count]] userInfo:nil];
	}
#endif
	id x_ = [args objectAtIndex:0];
	double x = [x_ isEqual:[NSNull null]] ? 0 : [x_ doubleValue];
	id y_ = [args objectAtIndex:1];
	double y = [y_ isEqual:[NSNull null]] ? 0 : [y_ doubleValue];
	id width_ = [args objectAtIndex:2];
	double width = [width_ isEqual:[NSNull null]] ? 0 : [width_ doubleValue];
	id height_ = [args objectAtIndex:3];
	double height = [height_ isEqual:[NSNull null]] ? 0 : [height_ doubleValue];
	CGRect result$ = (CGRect)CGRectMake((double) x, (double) y, (double) width, (double) height);
	return [HyperloopPointer pointer:(const void *)&result$ encoding:@encode(CGRect)];
}



+ (id) Block_void_____struct_CGPathElement___:(KrollCallback *) callback {
	return [^(struct CGPathElement * arg0) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(struct CGPathElement *)];
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


@end
