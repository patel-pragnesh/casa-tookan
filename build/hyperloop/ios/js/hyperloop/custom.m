/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface HyperloopPointer : NSObject
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding;
+(instancetype)pointer:(const void *)pointer encoding:(const char *)encoding framework:(NSString *)framework classname:(NSString *)classname;
-(void *)pointerValue;
-(SEL)selectorValue;
-(Class)classValue;
-(id)objectValue;
@end

@interface HyperloopUtils : NSObject
+(id)invokeCustomCallback:(NSArray *)args identifier:(NSString *)identifier thisObject:(id)thisObject;
@end

/**
 * user class defined at /Users/a/Documents/Appcelerator_Studio_Workspace/tookan/build/iphone/build/Products/Debug-iphonesimulator/jiko.app/alloy/controllers/dappbrowser.js:270
 */
@interface WebViewDelegate : NSObject <WKNavigationDelegate>

-(void)webView:(WKWebView *)arg0 didFinishNavigation:(WKNavigation *)arg1;

-(void)webView:(WKWebView *)arg0 didStartProvisionalNavigation:(WKNavigation *)arg1;

@end

@implementation WebViewDelegate

-(void)webView:(WKWebView *)arg0 didFinishNavigation:(WKNavigation *)arg1 {
	@autoreleasepool {
		id refSelf = self;
		id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id) framework:@"WebKit" classname:@"WKWebView"];
		id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id) framework:@"WebKit" classname:@"WKNavigation"];
		void(^Callback)(void) = ^{
			[HyperloopUtils invokeCustomCallback:@[_arg0, _arg1] identifier:@"WebViewDelegate_webView_didFinishNavigation__1" thisObject: refSelf];
			_arg0;
			_arg1;
			refSelf;
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_sync(dispatch_get_main_queue(), Callback);
		}
	}
}

-(void)webView:(WKWebView *)arg0 didStartProvisionalNavigation:(WKNavigation *)arg1 {
	@autoreleasepool {
		id refSelf = self;
		id _arg0 = (arg0 == nil || [(id)arg0 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg0 encoding:@encode(id) framework:@"WebKit" classname:@"WKWebView"];
		id _arg1 = (arg1 == nil || [(id)arg1 isEqual:[NSNull null]]) ? (id)[NSNull null] : (id)[HyperloopPointer pointer:(__bridge void *)arg1 encoding:@encode(id) framework:@"WebKit" classname:@"WKNavigation"];
		void(^Callback)(void) = ^{
			[HyperloopUtils invokeCustomCallback:@[_arg0, _arg1] identifier:@"WebViewDelegate_webView_didStartProvisionalNavigation__1" thisObject: refSelf];
			_arg0;
			_arg1;
			refSelf;
		};
		if ([NSThread isMainThread]) {
			Callback();
		} else {
			dispatch_sync(dispatch_get_main_queue(), Callback);
		}
	}
}

@end


/**
 * mapping of custom class to module path
 */
@interface HyperloopCustomClassMapping : NSObject
@end

@implementation HyperloopCustomClassMapping

+(NSString *)mappingForClass: (NSString *)classname {
	static NSDictionary *mappings = nil;
	if (mappings == nil) {
		mappings = [NSDictionary dictionaryWithObjects:@[@"/hyperloop/hyperloop/webviewdelegate"]
								 forKeys:@[@"WebViewDelegate"]];
	}
	return [mappings objectForKey:classname];
}

@end
