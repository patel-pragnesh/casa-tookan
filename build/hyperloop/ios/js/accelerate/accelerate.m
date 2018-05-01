/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <Accelerate/Accelerate.h>
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

@interface HyperloopAccelerate : NSObject
@end

@implementation HyperloopAccelerate




+ (id) Block_void______Bool__enum_CBLAS_TRANSPOSE__DenseMatrix_Double__DenseMatrix_Double_:(KrollCallback *) callback {
	return [^(_Bool arg0, enum CBLAS_TRANSPOSE arg1, DenseMatrix_Double arg2, DenseMatrix_Double arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
			id _arg1 = @(arg1);
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(DenseMatrix_Double)];
			id _arg3 = [HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(DenseMatrix_Double)];
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

+ (id) Block_void______Bool__enum_CBLAS_TRANSPOSE__DenseMatrix_Float__DenseMatrix_Float_:(KrollCallback *) callback {
	return [^(_Bool arg0, enum CBLAS_TRANSPOSE arg1, DenseMatrix_Float arg2, DenseMatrix_Float arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
			id _arg1 = @(arg1);
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(DenseMatrix_Float)];
			id _arg3 = [HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(DenseMatrix_Float)];
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

+ (id) Block_void______Bool__enum_CBLAS_TRANSPOSE__DenseVector_Double__DenseVector_Double_:(KrollCallback *) callback {
	return [^(_Bool arg0, enum CBLAS_TRANSPOSE arg1, DenseVector_Double arg2, DenseVector_Double arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
			id _arg1 = @(arg1);
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(DenseVector_Double)];
			id _arg3 = [HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(DenseVector_Double)];
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

+ (id) Block_void______Bool__enum_CBLAS_TRANSPOSE__DenseVector_Float__DenseVector_Float_:(KrollCallback *) callback {
	return [^(_Bool arg0, enum CBLAS_TRANSPOSE arg1, DenseVector_Float arg2, DenseVector_Float arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithBool:arg0];
			id _arg1 = @(arg1);
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(DenseVector_Float)];
			id _arg3 = [HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(DenseVector_Float)];
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
