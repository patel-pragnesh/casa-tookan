//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"test";
NSString * const TI_APPLICATION_ID = @"com.mandelduck.jiko";
NSString * const TI_APPLICATION_PUBLISHER = @"Everdream soft";
NSString * const TI_APPLICATION_URL = @"https://www.everdreamsoft.com/";
NSString * const TI_APPLICATION_NAME = @"jiko";
NSString * const TI_APPLICATION_VERSION = @"0.0.4";
NSString * const TI_APPLICATION_DESCRIPTION = @"undefined";
NSString * const TI_APPLICATION_COPYRIGHT = @"2015 - 2018 Everdream Soft";
NSString * const TI_APPLICATION_GUID = @"e9dcaaef-c216-4879-9ddd-2fe45ff7af60";
BOOL const TI_APPLICATION_ANALYTICS = false;
BOOL const TI_APPLICATION_SHOW_ERROR_CONTROLLER = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
