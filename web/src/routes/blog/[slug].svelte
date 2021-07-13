<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const post = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return { post };
  }
</script>

<script>
  export let post;
</script>

<style>
  div {
    max-width: 50%;
    margin: 0 auto;
  }

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<div class="content">
  <h1>{post.title}</h1>
  <BlockContent blocks={post.body} {serializers} />
</div>
