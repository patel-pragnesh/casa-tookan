/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
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

@interface HyperloopFoundation : NSObject
@end

@implementation HyperloopFoundation




+ (id) Block_BOOL_____KeyType__ObjectType__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, id arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_BOOL_____NSUInteger__BOOL___:(KrollCallback *) callback {
	return [^(NSUInteger arg0, BOOL * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedLong:arg0];
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

+ (id) Block_BOOL_____NSURL____NSError___:(KrollCallback *) callback {
	return [^(NSURL * arg0, NSError * arg1) {
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

+ (id) Block_BOOL_____ObjectType__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, BOOL * arg1) {
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

+ (id) Block_BOOL_____ObjectType__NSUInteger__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, NSUInteger arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithUnsignedLong:arg1];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_BOOL_____id__NSDictionary_NSString___id____:(KrollCallback *) callback {
	return [^(id arg0, NSDictionary<NSString *,id> * arg1) {
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

+ (id) Block_NSProgress______void_____NSData____NSError____:(KrollCallback *) callback {
	return [^(void(^arg0)(NSData *, NSError *)) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:"@?"];
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

+ (id) Block_NSProgress______void_____NSURL____BOOL__NSError____:(KrollCallback *) callback {
	return [^(void(^arg0)(NSURL *, BOOL, NSError *)) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:"@?"];
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

+ (id) Block_NSProgress______void_____id_NSItemProviderWriting___NSError____:(KrollCallback *) callback {
	return [^(void(^arg0)(id<NSItemProviderWriting>, NSError *)) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:"@?"];
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

+ (id) Block_enum_NSComparisonResult_____id__id_:(KrollCallback *) callback {
	return [^(id arg0, id arg1) {
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

+ (id) Block_id_______NSError____NSErrorUserInfoKey_:(KrollCallback *) callback {
	return [^(NSError * arg0, NSErrorUserInfoKey arg1) {
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

+ (id) Block_id_______id__NSArray_NSExpression_______NSMutableDictionary___:(KrollCallback *) callback {
	return [^(id arg0, NSArray<NSExpression *> * arg1, NSMutableDictionary * arg2) {
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

+ (id) Block_void_______NSProgress_____void_:(KrollCallback *) callback {
	return [^(NSProgress * arg0) {
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

+ (id) Block_void_____KeyType__ObjectType__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, id arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSArray__NSURLSessionTask______:(KrollCallback *) callback {
	return [^(NSArray< NSURLSessionTask *> * arg0) {
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

+ (id) Block_void_____NSArray_NSFileVersion_______NSError___:(KrollCallback *) callback {
	return [^(NSArray<NSFileVersion *> * arg0, NSError * arg1) {
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

+ (id) Block_void_____NSArray_NSHTTPCookie______:(KrollCallback *) callback {
	return [^(NSArray<NSHTTPCookie *> * arg0) {
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

+ (id) Block_void_____NSArray_NSURLSessionDataTask_______NSArray_NSURLSessionUploadTask_______NSArray_NSURLSessionDownloadTask______:(KrollCallback *) callback {
	return [^(NSArray<NSURLSessionDataTask *> * arg0, NSArray<NSURLSessionUploadTask *> * arg1, NSArray<NSURLSessionDownloadTask *> * arg2) {
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

+ (id) Block_void_____NSCachedURLResponse___:(KrollCallback *) callback {
	return [^(NSCachedURLResponse * arg0) {
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

+ (id) Block_void_____NSData___:(KrollCallback *) callback {
	return [^(NSData * arg0) {
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

+ (id) Block_void_____NSData____BOOL__NSError___:(KrollCallback *) callback {
	return [^(NSData * arg0, BOOL arg1, NSError * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithBool:arg1];
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

+ (id) Block_void_____NSDate____BOOL__BOOL___:(KrollCallback *) callback {
	return [^(NSDate * arg0, BOOL arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithBool:arg1];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSDictionary_NSAttributedStringKey_id_____NSRange__BOOL___:(KrollCallback *) callback {
	return [^(NSDictionary<NSAttributedStringKey,id> * arg0, NSRange arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSDictionary_NSFileProviderServiceName_NSFileProviderService_______NSError___:(KrollCallback *) callback {
	return [^(NSDictionary<NSFileProviderServiceName,NSFileProviderService *> * arg0, NSError * arg1) {
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

+ (id) Block_void_____NSDictionary_NSString___NSURLCredential______:(KrollCallback *) callback {
	return [^(NSDictionary<NSString *,NSURLCredential *> * arg0) {
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

+ (id) Block_void_____NSError___:(KrollCallback *) callback {
	return [^(NSError * arg0) {
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

+ (id) Block_void_____NSFileHandle___:(KrollCallback *) callback {
	return [^(NSFileHandle * arg0) {
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

+ (id) Block_void_____NSInputStream___:(KrollCallback *) callback {
	return [^(NSInputStream * arg0) {
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

+ (id) Block_void_____NSInputStream____NSOutputStream____NSError___:(KrollCallback *) callback {
	return [^(NSInputStream * arg0, NSOutputStream * arg1, NSError * arg2) {
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

+ (id) Block_void_____NSLinguisticTag__NSRange__BOOL___:(KrollCallback *) callback {
	return [^(NSLinguisticTag arg0, NSRange arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSLinguisticTag__NSRange__NSRange__BOOL___:(KrollCallback *) callback {
	return [^(NSLinguisticTag arg0, NSRange arg1, NSRange arg2, BOOL * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(NSRange)];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSNotification___:(KrollCallback *) callback {
	return [^(NSNotification * arg0) {
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

+ (id) Block_void_____NSRange__BOOL___:(KrollCallback *) callback {
	return [^(NSRange arg0, BOOL * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(NSRange)];
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

+ (id) Block_void_____NSString____BOOL___:(KrollCallback *) callback {
	return [^(NSString * arg0, BOOL * arg1) {
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

+ (id) Block_void_____NSString____NSRange__NSRange__BOOL___:(KrollCallback *) callback {
	return [^(NSString * arg0, NSRange arg1, NSRange arg2, BOOL * arg3) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = [HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(NSRange)];
			id _arg3 = (arg3 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg3 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSTextCheckingResult____NSMatchingFlags__BOOL___:(KrollCallback *) callback {
	return [^(NSTextCheckingResult * arg0, NSMatchingFlags arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = @(arg1);
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____NSTimer___:(KrollCallback *) callback {
	return [^(NSTimer * arg0) {
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

+ (id) Block_void_____NSUInteger__BOOL___:(KrollCallback *) callback {
	return [^(NSUInteger arg0, BOOL * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = [NSNumber numberWithUnsignedLong:arg0];
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

+ (id) Block_void_____NSURL___:(KrollCallback *) callback {
	return [^(NSURL * arg0) {
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

+ (id) Block_void_____NSURL____BOOL__NSError___:(KrollCallback *) callback {
	return [^(NSURL * arg0, BOOL arg1, NSError * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithBool:arg1];
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

+ (id) Block_void_____NSURL____NSError___:(KrollCallback *) callback {
	return [^(NSURL * arg0, NSError * arg1) {
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

+ (id) Block_void_____NSURL____NSURL___:(KrollCallback *) callback {
	return [^(NSURL * arg0, NSURL * arg1) {
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

+ (id) Block_void_____NSURLCredential___:(KrollCallback *) callback {
	return [^(NSURLCredential * arg0) {
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

+ (id) Block_void_____NSURLRequest___:(KrollCallback *) callback {
	return [^(NSURLRequest * arg0) {
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

+ (id) Block_void_____NSURLResponse____NSData____NSError___:(KrollCallback *) callback {
	return [^(NSURLResponse * arg0, NSData * arg1, NSError * arg2) {
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

+ (id) Block_void_____NSURLSessionAuthChallengeDisposition__NSURLCredential___:(KrollCallback *) callback {
	return [^(NSURLSessionAuthChallengeDisposition arg0, NSURLCredential * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = @(arg0);
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

+ (id) Block_void_____NSURLSessionDelayedRequestDisposition__NSURLRequest___:(KrollCallback *) callback {
	return [^(NSURLSessionDelayedRequestDisposition arg0, NSURLRequest * arg1) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = @(arg0);
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

+ (id) Block_void_____NSURLSessionResponseDisposition_:(KrollCallback *) callback {
	return [^(NSURLSessionResponseDisposition arg0) {
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

+ (id) Block_void_____NSXPCConnection____NSError___:(KrollCallback *) callback {
	return [^(NSXPCConnection * arg0, NSError * arg1) {
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

+ (id) Block_void_____ObjectType__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, BOOL * arg1) {
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

+ (id) Block_void_____ObjectType__NSUInteger__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, NSUInteger arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithUnsignedLong:arg1];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____id_:(KrollCallback *) callback {
	return [^(id arg0) {
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

+ (id) Block_void_____id__NSRange__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, NSRange arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____id__NSUInteger__BOOL___:(KrollCallback *) callback {
	return [^(id arg0, NSUInteger arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id)];
			id _arg1 = [NSNumber numberWithUnsignedLong:arg1];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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

+ (id) Block_void_____id_NSItemProviderReading___NSError___:(KrollCallback *) callback {
	return [^(id<NSItemProviderReading> arg0, NSError * arg1) {
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

+ (id) Block_void_____id_NSItemProviderWriting___NSError___:(KrollCallback *) callback {
	return [^(id<NSItemProviderWriting> arg0, NSError * arg1) {
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

+ (id) Block_void_____id_NSSecureCoding___NSError___:(KrollCallback *) callback {
	return [^(id<NSSecureCoding> arg0, NSError * arg1) {
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

+ (id) Block_void_____void_____id_NSSecureCoding___NSError_____Class__NSDictionary___:(KrollCallback *) callback {
	return [^(void(^arg0)(id<NSSecureCoding>, NSError *), Class arg1, NSDictionary * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:"@?"];
			id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(Class)];
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

+ (id) Block_void_____void_____void__:(KrollCallback *) callback {
	return [^(void(^arg0)()) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:"@?"];
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

+ (id) Block_void_____void____NSRange__BOOL___:(KrollCallback *) callback {
	return [^(void * arg0, NSRange arg1, BOOL * arg2) {
		void(^Callback)(void) = ^{
			NSArray *args = nil;
			id _arg0 = (arg0 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg0 encoding:@encode(void *)];
			id _arg1 = [HyperloopPointer pointer:(const void *)&arg1 encoding:@encode(NSRange)];
			id _arg2 = (arg2 == nil) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(const void *)&arg2 encoding:@encode(BOOL *)];
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
