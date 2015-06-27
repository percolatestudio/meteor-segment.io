# Segment.io integration for Meteor

* Note: We've switched to the official versioning scheme for tracking upstream packages (1.1.0_1). Unfortunately, meteor will pick the highest version (in this case 3.0.0) which is old and should not be used. Please choose the latest 1.x version explicitly like so `meteor add percolatestudio:segment.io@=1.2.2_1`). *

*Works on client and server.*

#### Client

The segment.io snippet is copied almost verbatim from the [docs](https://segment.io/docs/tutorials/quickstart-analytics.js/), however, `analytics` is exposed via the Meteor package rather than `window`.

Snippet version is `3.0.1`.

#### Server

Using official `analytics-node` npm module.

## Usage

> Almost all the apis are available on both client and server

The un-inited `analytics` object is available for use as per normal.

First, initialize analytics:

```
analytics.load(YOUR_KEY);
```

Then, you could send a `pageview` from IronRouter:

```
Router.onRun(function() {
  analytics.page();
  this.next(); // If using versions of IronRouter later than 0.9.4
});
```

To `identify` the user, you'd setup an autorun:

```
Meteor.startup(function() {
  Tracker.autorun(function(c) {
    // waiting for user subscription to load
    if (! Router.current() || ! Router.current().ready())
      return;

    var user = Meteor.user();
    if (! user)
      return;

    analytics.identify(user._id, {
      name: user.profile.name,
      email: user.emails[0].address
    });

    c.stop();
  });
});
```

Aliasing anonymous users to a registered user when their account is created:

```
Accounts.createUser({
  email: email,
  password: password,
  profile: {
    name: name
  }
}, function(error) {
  if (! error) {
    analytics.alias(Meteor.userId());
  } else {
    alert('Error creating account!\n' + EJSON.stringify(error));
  }
});
```

Tracking an event is as simple as:

```
analytics.track('Purchased T-Shirt', {
  name: 'The Cake is a Liar',
  revenue: 14.99
});
```

## License 

MIT. (c) Percolate Studio, maintained by Zoltan Olah (@zol).
