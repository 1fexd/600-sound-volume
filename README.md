# 600-sound-volume

[600% Sound Volume](https://addons.mozilla.org/en-US/firefox/addon/600-sound-volume/), but the ads/tracking (about which
the author blatantly lies in their privacy policy) have been removed.

# Download

* [Firefox Add-ons (pending approval)](https://addons.mozilla.org/en-US/firefox/addon/600-sound-volume-privacy/)
* [Github releases](https://github.com/1fexd/600-sound-volume/releases)

# Details

## Author's claims 

* [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/600-sound-volume/privacy/) ([archived](https://archive.vn/yCuC5))

```
"600% Sound Volume" does not collect any data of any kind.

"600% Sound Volume" has no home server.
"600% Sound Volume" doesn't embed any kind of analytic hooks in its code.
"600% Sound Volume" accept donations or any other form of financing.

The only thing the "600% Sound Volume" does is sometimes (very rare) opens Aliexpress advertising frame to get extra cash for development and support.

The project is currently hosted on github.com, which is owned by GitHub Inc. (now a subsidiary of Microsoft Corporation), and thus is unrelated to "600% Sound Volume".

That is all.
```

## Actual behavior

* The extension fetches a list of domains where an ad-banner will be inserted
  from `https://ad.resourcefulman.net/banner/ad-locations.txt`
* When the user navigates to a page whose domain is present in the fetched ad-location list, the extension fetches an
  ad-banner from `https://ad.resourcefulman.net/banner?ref={DOMAIN}`
* The extension injects an iframe containing the ad-banner into the page
    * Only at this point user consent is honored, and the banner is only shown if the user permits it in the extensions
      settings, but this still contradicts the authors privacy claims.

