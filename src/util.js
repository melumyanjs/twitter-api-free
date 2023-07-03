require('dotenv').config({path: __dirname + '/.env'})

class TwitterFreeApi{

    static async me(){
        const res = await fetch("https://twitter.com/i/api/graphql/qRednkZG-rn1P6b48NINmQ/UserByScreenName?variables=%7B%22screen_name%22%3A%22itsme93901329%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D", {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru,en;q=0.9",
              "authorization": `Bearer ${process.env.BEARER_TOKEN}`,
              "content-type": "application/json",
              "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Linux\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
              "x-twitter-active-user": "yes",
              "x-twitter-auth-type": "OAuth2Session",
              "x-twitter-client-language": "en",
              "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; lang=en; external_referer=padhuUp37zhGLs0pttBy5NsUNKHWScGsXHrMbnkriOBJYOEADnEek2AG84UZAiHAD6Kfk49eQp0iN4dOmAUwSLmmw2WKXcoZ|0|8e8t2xd8A2w%3D; at_check=true; eu_cn=1; _gid=GA1.2.1415208929.1686725730; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227",
              "Referer": "https://twitter.com/itsme93901329",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          })
          const data = await res.json()
          const result = data.data.user.result
          return {
            __typename: result.__typename,
            created_at: result.legacy.created_at,
            userid: result.rest_id,
            username: result.legacy.screen_name,
            name: result.legacy.name,
        }
    }

    static async getUserByName(name){
        const res = await fetch("https://twitter.com/i/api/graphql/qRednkZG-rn1P6b48NINmQ/UserByScreenName?variables=%7B%22screen_name%22%3A%22itsme93901329%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D", {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru,en;q=0.9",
              "authorization": `Bearer ${process.env.BEARER_TOKEN}`,
              "content-type": "application/json",
              "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Linux\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
              "x-twitter-active-user": "yes",
              "x-twitter-auth-type": "OAuth2Session",
              "x-twitter-client-language": "en",
              "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; lang=en; external_referer=padhuUp37zhGLs0pttBy5NsUNKHWScGsXHrMbnkriOBJYOEADnEek2AG84UZAiHAD6Kfk49eQp0iN4dOmAUwSLmmw2WKXcoZ|0|8e8t2xd8A2w%3D; at_check=true; eu_cn=1; _gid=GA1.2.1415208929.1686725730; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227",
              "Referer": `https://twitter.com/${name}`,
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          })
          const data = await res.json()
          const result = data.data.user.result
          return {
            __typename: result.__typename,
            created_at: result.legacy.created_at,
            userid: result.rest_id,
            username: result.legacy.screen_name,
            name: result.legacy.name,
        }
    }

    static async getUserById(userid){
        const res = await fetch("https://twitter.com/i/api/graphql/qRednkZG-rn1P6b48NINmQ/UserByScreenName?variables=%7B%22screen_name%22%3A%22itsme93901329%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D", {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru,en;q=0.9",
              "authorization": `Bearer ${process.env.BEARER_TOKEN}`,
              "content-type": "application/json",
              "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Linux\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
              "x-twitter-active-user": "yes",
              "x-twitter-auth-type": "OAuth2Session",
              "x-twitter-client-language": "en",
              "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; lang=en; external_referer=padhuUp37zhGLs0pttBy5NsUNKHWScGsXHrMbnkriOBJYOEADnEek2AG84UZAiHAD6Kfk49eQp0iN4dOmAUwSLmmw2WKXcoZ|0|8e8t2xd8A2w%3D; at_check=true; eu_cn=1; _gid=GA1.2.1415208929.1686725730; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227",
              "Referer": `https://twitter.com/i/user/${userid}`,
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          })
          const data = await res.json()
          const result = data.data.user.result
          return {
            __typename: result.__typename,
            created_at: result.legacy.created_at,
            userid: result.rest_id,
            username: result.legacy.screen_name,
            name: result.legacy.name,
        }
        
    }
}


module.exports = {TwitterFreeApi}



async function following(){

    let variables = "%7B%22userId%22%3A%221619950391466115073%22%2C%22includePromotedContent%22%3Afalse%7D"

    const res = await fetch(`https://twitter.com/i/api/graphql/lE9JJNkmW6PLDjq4yAocYw/Following?variables=${variables}features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D`, {
        "headers": {
          "accept": "*/*",
          "accept-language": "ru,en;q=0.9",
          "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
          "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
          "x-twitter-active-user": "yes",
          "x-twitter-auth-type": "OAuth2Session",
          "x-twitter-client-language": "en",
          "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; lang=en; external_referer=padhuUp37zhGLs0pttBy5NsUNKHWScGsXHrMbnkriOBJYOEADnEek2AG84UZAiHAD6Kfk49eQp0iN4dOmAUwSLmmw2WKXcoZ|0|8e8t2xd8A2w%3D; at_check=true; eu_cn=1; _gid=GA1.2.1415208929.1686725730; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227",
          "Referer": "https://twitter.com/itsme93901329/following",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      })
    const data = await res.json()

    // console.log(data.data.user.result.timeline.timeline.instructions[3].entries.length)
      console.log(data)
}

async function createFrend(){
  fetch("https://twitter.com/i/api/1.1/friendships/create.json", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,en;q=0.9",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; eu_cn=1; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227; lang=en; _gid=GA1.2.64080100.1687161803; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCB9v59OIAToMY3NyZl9p%250AZCIlYjUyYWQwYWEyMDU4NmQzNWYzYzEzNGQ4YzI3OGE0NTg6B2lkIiViYzkx%250AYTgzMmI0N2MxM2Q3Y2YzYmZmZDUxNDZlMTc4MQ%253D%253D--f7de8c27fd5e7ddfe6c34cab736ea04c6af3b789; external_referer=padhuUp37zhU%2Fo1ilYwCNOmtabS4UqDS|0|8e8t2xd8A2w%3D",
    "Referer": "https://twitter.com/itsme93901329",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&include_ext_is_blue_verified=1&include_ext_verified_type=1&include_ext_profile_image_shape=1&skip_status=1&impression_id=2bcd80f42a6e3b5e&user_id=1359892451075518466",
  "method": "POST"
}); ;
fetch("https://twitter.com/i/api/1.1/friendships/create.json", {
  "headers": {
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "Referer": "https://twitter.com/itsme93901329",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&include_ext_is_blue_verified=1&include_ext_verified_type=1&include_ext_profile_image_shape=1&skip_status=1&impression_id=2bcd80f42a6e3b5e&user_id=1359892451075518466",
  "method": "POST"
});
}

async function foo1(){
  fetch("https://twitter.com/i/api/1.1/jot/client_event.json?keepalive=false", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,en;q=0.9",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; eu_cn=1; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227; lang=en; _gid=GA1.2.64080100.1687161803; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCB9v59OIAToMY3NyZl9p%250AZCIlYjUyYWQwYWEyMDU4NmQzNWYzYzEzNGQ4YzI3OGE0NTg6B2lkIiViYzkx%250AYTgzMmI0N2MxM2Q3Y2YzYmZmZDUxNDZlMTc4MQ%253D%253D--f7de8c27fd5e7ddfe6c34cab736ea04c6af3b789; external_referer=padhuUp37zhU%2Fo1ilYwCNOmtabS4UqDS|0|8e8t2xd8A2w%3D",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "debug=true&log=%5B%7B%22_category_%22%3A%22client_event%22%2C%22format_version%22%3A2%2C%22triggered_on%22%3A1687244951716%2C%22profile_id%22%3A%221619950391466115073%22%2C%22items%22%3A%5B%7B%22item_type%22%3A3%2C%22id%22%3A%221619950391466115073%22%2C%22is_viewer_follows_user%22%3Afalse%2C%22is_user_follows_viewer%22%3Afalse%2C%22is_viewer_super_following_user%22%3Afalse%2C%22is_viewer_super_followed_by_user%22%3Afalse%2C%22is_user_super_followable%22%3Afalse%7D%2C%7B%22item_type%22%3A3%2C%22id%22%3A%221359892451075518466%22%2C%22position%22%3A0%2C%22is_viewer_follows_user%22%3Afalse%2C%22is_user_follows_viewer%22%3Afalse%2C%22is_viewer_super_following_user%22%3Afalse%2C%22is_viewer_super_followed_by_user%22%3Afalse%2C%22is_user_super_followable%22%3Afalse%7D%5D%2C%22event_namespace%22%3A%7B%22page%22%3A%22me%22%2C%22section%22%3A%22following%22%2C%22component%22%3A%22FollowingSgs%22%2C%22element%22%3A%22user%22%2C%22action%22%3A%22unfollow%22%2C%22client%22%3A%22m5%22%7D%2C%22client_event_sequence_start_timestamp%22%3A1687244907040%2C%22client_event_sequence_number%22%3A56%2C%22client_app_id%22%3A%223033300%22%7D%5D",
  "method": "POST"
}); ;
fetch("https://twitter.com/i/api/1.1/friendships/destroy.json", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,en;q=0.9",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; eu_cn=1; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227; lang=en; _gid=GA1.2.64080100.1687161803; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCB9v59OIAToMY3NyZl9p%250AZCIlYjUyYWQwYWEyMDU4NmQzNWYzYzEzNGQ4YzI3OGE0NTg6B2lkIiViYzkx%250AYTgzMmI0N2MxM2Q3Y2YzYmZmZDUxNDZlMTc4MQ%253D%253D--f7de8c27fd5e7ddfe6c34cab736ea04c6af3b789; external_referer=padhuUp37zhU%2Fo1ilYwCNOmtabS4UqDS|0|8e8t2xd8A2w%3D",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&include_ext_is_blue_verified=1&include_ext_verified_type=1&include_ext_profile_image_shape=1&skip_status=1&user_id=1359892451075518466",
  "method": "POST"
});
fetch("https://twitter.com/i/api/1.1/jot/client_event.json?keepalive=false", {
  "headers": {
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "debug=true&log=%5B%7B%22_category_%22%3A%22client_event%22%2C%22format_version%22%3A2%2C%22triggered_on%22%3A1687244951716%2C%22profile_id%22%3A%221619950391466115073%22%2C%22items%22%3A%5B%7B%22item_type%22%3A3%2C%22id%22%3A%221619950391466115073%22%2C%22is_viewer_follows_user%22%3Afalse%2C%22is_user_follows_viewer%22%3Afalse%2C%22is_viewer_super_following_user%22%3Afalse%2C%22is_viewer_super_followed_by_user%22%3Afalse%2C%22is_user_super_followable%22%3Afalse%7D%2C%7B%22item_type%22%3A3%2C%22id%22%3A%221359892451075518466%22%2C%22position%22%3A0%2C%22is_viewer_follows_user%22%3Afalse%2C%22is_user_follows_viewer%22%3Afalse%2C%22is_viewer_super_following_user%22%3Afalse%2C%22is_viewer_super_followed_by_user%22%3Afalse%2C%22is_user_super_followable%22%3Afalse%7D%5D%2C%22event_namespace%22%3A%7B%22page%22%3A%22me%22%2C%22section%22%3A%22following%22%2C%22component%22%3A%22FollowingSgs%22%2C%22element%22%3A%22user%22%2C%22action%22%3A%22unfollow%22%2C%22client%22%3A%22m5%22%7D%2C%22client_event_sequence_start_timestamp%22%3A1687244907040%2C%22client_event_sequence_number%22%3A56%2C%22client_app_id%22%3A%223033300%22%7D%5D",
  "method": "POST"
});
fetch("https://twitter.com/i/api/1.1/friendships/destroy.json", {
  "headers": {
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&include_ext_is_blue_verified=1&include_ext_verified_type=1&include_ext_profile_image_shape=1&skip_status=1&user_id=1359892451075518466",
  "method": "POST"
}); ;
fetch("https://twitter.com/i/api/1.1/jot/client_event.json?keepalive=false", {
  "headers": {
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "category=perftown&log=%5B%7B%22description%22%3A%22rweb%3Aurt%3Anotifications%3Afetch_Top%3Asuccess%22%2C%22product%22%3A%22rweb%22%2C%22duration_ms%22%3A240%7D%2C%7B%22description%22%3A%22rweb%3Aurt%3Anotifications%3Afetch_Top%3Aformat%3Asuccess%22%2C%22product%22%3A%22rweb%22%2C%22duration_ms%22%3A240%7D%5D",
  "method": "POST"
}); ;
fetch("https://twitter.com/i/api/1.1/jot/client_event.json?keepalive=false", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru,en;q=0.9",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"YaBrowser\";v=\"23\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-uuid": "cc27a8f8-7e87-4a16-8548-417aa6c9384c",
    "x-csrf-token": "9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "cookie": "des_opt_in=Y; kdt=qoEulEtrfdiYjqxGOWHuu0KNFp6WL0l7onAVGMY4; guest_id=v1%3A167472014720052844; auth_token=a43d75606cd7be4c35c3754662ce64884c21609d; ct0=9dfa9326d716ac16e3afa7c568c2fc888c5fd0a42d666ddbc8eed7a450095d2a60d9f07e78821e5c6e1a0932aacbdf13f20a9ed7258fcc63ae21105daa2e83742718587de6f12e4ec5f7d3c3b340b8c1; twid=u%3D1619950391466115073; tweetdeck_version=beta; _gcl_au=1.1.154891562.1682433129; guest_id_marketing=v1%3A167472014720052844; guest_id_ads=v1%3A167472014720052844; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; personalization_id=\"v1_0iqrINd6iahW4zF+E5KYBg==\"; eu_cn=1; mbox=PC#7b83cc323f544014bfba9bea77026094.37_0#1749980007|session#5dee7770a1334140850d7a5a4e00837b#1686737067; _ga_34PHSZMC42=GS1.1.1686734881.3.1.1686735286.0.0.0; _ga=GA1.2.739965579.1683194227; lang=en; _gid=GA1.2.64080100.1687161803; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCB9v59OIAToMY3NyZl9p%250AZCIlYjUyYWQwYWEyMDU4NmQzNWYzYzEzNGQ4YzI3OGE0NTg6B2lkIiViYzkx%250AYTgzMmI0N2MxM2Q3Y2YzYmZmZDUxNDZlMTc4MQ%253D%253D--f7de8c27fd5e7ddfe6c34cab736ea04c6af3b789; external_referer=padhuUp37zhU%2Fo1ilYwCNOmtabS4UqDS|0|8e8t2xd8A2w%3D",
    "Referer": "https://twitter.com/itsme93901329/following",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "category=perftown&log=%5B%7B%22description%22%3A%22rweb%3Aurt%3Anotifications%3Afetch_Top%3Asuccess%22%2C%22product%22%3A%22rweb%22%2C%22duration_ms%22%3A240%7D%2C%7B%22description%22%3A%22rweb%3Aurt%3Anotifications%3Afetch_Top%3Aformat%3Asuccess%22%2C%22product%22%3A%22rweb%22%2C%22duration_ms%22%3A240%7D%5D",
  "method": "POST"
});
}
