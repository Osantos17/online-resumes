import React from "react";
import { Tweet, eagerLoadTwitterLibrary } from "react-twitter-widgets";

eagerLoadTwitterLibrary();

export default {
  title: "Tweet",
  component: Tweet,
};

export const TwitterFeed = () => (
  <Tweet tweetId="841418541026877441" options={{ width: "200", align: "right", theme: "dark" }} />
);
