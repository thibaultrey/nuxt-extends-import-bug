import { RequestBodySearch, MatchQuery } from "elastic-builder";

export default defineNuxtPlugin((nuxtApp) => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide("query", () => {
    const requestBody = new RequestBodySearch().query(
      new MatchQuery("message", "this is a test")
    );
    return requestBody.toJSON();
  });
});
