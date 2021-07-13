<script context="module">
	import client from '../../sanityClient'
	  import imageUrlBuilder from '@sanity/image-url'
  
	  const builder = imageUrlBuilder(client)
  
	  function urlFor(source) {
		  return builder.image(source)
	  }
	  export function preload({ params, query }) {
	  return client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(posts => {
			  return { posts };
		  }).catch(err => this.error(500, err));
	  }
  </script>
  
  <script>
	export let posts;
  
	function formatDate(date) {
	  return new Date(date).toLocaleDateString()
	}
  </script>
  
  <style>
	  article {
		  max-width: 100%;
	  }
	  ul {
		  line-height: 1.5;
		  list-style: none;
		  margin-left: 0;
		  padding-left: 0;
		  display: grid;
		  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		  grid-gap: 20px;
		  align-items: stretch;
	  }

	  li {
		  margin-top: 10px;
		  border-radius: 16px;
		  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
		  box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.12);
 		  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.14);
		   transition: 0.3s;
	  }

	  li:hover {
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
		box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14);
	  }

	  img {
		width: 100%;
		object-fit: cover;
		height: 300px;
		border-radius: 16px 16px 0 0;
	  }

	  li, a {
		text-decoration: none;
	  }

	  h3, h5 {
		  margin: 20px;
	  }

	  h3 {
		  margin-bottom: 0;
	  }
	  h5 {
		  margin-top: 0;
	  }

	  
  </style>
  
  <svelte:head>
	  <title>Blog</title>
  </svelte:head>

<main>

	<article>
	<h1>Recent posts</h1>
	
	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.slug.current}'>
				<img src={urlFor(post.mainImage)} alt={post.mainImage.alt}><br>
				<h3>{post.title}</h3><br>
			</a><h5>{formatDate(post.publishedAt)}</h5></li>
		{/each}
	</ul>
	</article>

</main>