import groq from "groq"

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`

export const slugsQuery = groq`*[defined(slug.current)]{
    _type == "podcastShow" => {
      "slug": "library/podcasts/" + slug.current
    },
    _type == "video" => {
      "slug": "library/video/" + slug.current
    },
    _type == "article" => {
      "slug": "library/article/" + slug.current
    },
    _type == "podcastEpisode" => {
      "slug": "library/podcasts/" + podcastShow->slug.current + "/" + slug.current
    },
    _type == "press" => {
      "slug": "press/" + slug.current
    },
    _type == "person" && generate == true  => {
      "slug": select(teamMember == true => "team/" , "community/") + slug.current
    },
    _type == "devGuild" => {
      "slug": "devguild/" + slug.current
    },
    _type == "organization" && generate == true => {
      "slug": "portfolio/" + slug.current
    },
    _type == "spotlight" && generate == true => {
      "slug": "portfolio/spotlights/" + slug.current
    },
    _type == "page" => {
      "slug": slug.current
    }
}`;