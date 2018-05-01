/* C++ code produced by gperf version 3.0.3 */
/* Command-line: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/gperf -L C++ -E -t /private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf  */
/* Computed positions: -k'' */

#line 3 "/private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf"


#include <string.h>
#include <v8.h>
#include <KrollBindings.h>

#include "com.indiesquare.webview.WebviewModule.h"
#include "com.indiesquare.webview.ExampleProxy.h"


#line 14 "/private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf"
struct titanium::bindings::BindEntry;
/* maximum key range = 2, duplicates = 0 */

class WebviewBindings
{
private:
  static inline unsigned int hash (const char *str, unsigned int len);
public:
  static struct titanium::bindings::BindEntry *lookupGeneratedInit (const char *str, unsigned int len);
};

inline /*ARGSUSED*/
unsigned int
WebviewBindings::hash (register const char *str, register unsigned int len)
{
  return len;
}

struct titanium::bindings::BindEntry *
WebviewBindings::lookupGeneratedInit (register const char *str, register unsigned int len)
{
  enum
    {
      TOTAL_KEYWORDS = 2,
      MIN_WORD_LENGTH = 36,
      MAX_WORD_LENGTH = 37,
      MIN_HASH_VALUE = 36,
      MAX_HASH_VALUE = 37
    };

  static struct titanium::bindings::BindEntry wordlist[] =
    {
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
#line 17 "/private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf"
      {"com.indiesquare.webview.ExampleProxy", ::com::indiesquare::webview::webview::ExampleProxy::bindProxy, ::com::indiesquare::webview::webview::ExampleProxy::dispose},
#line 16 "/private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf"
      {"com.indiesquare.webview.WebviewModule", ::com::indiesquare::webview::WebviewModule::bindProxy, ::com::indiesquare::webview::WebviewModule::dispose}
    };

  if (len <= MAX_WORD_LENGTH && len >= MIN_WORD_LENGTH)
    {
      unsigned int key = hash (str, len);

      if (key <= MAX_HASH_VALUE)
        {
          register const char *s = wordlist[key].name;

          if (*str == *s && !strcmp (str + 1, s + 1))
            return &wordlist[key];
        }
    }
  return 0;
}
#line 18 "/private/var/folders/nv/r_25ssyx3k70hy55hrzghc2c0000gn/T/a/webview-generated/KrollGeneratedBindings.gperf"

